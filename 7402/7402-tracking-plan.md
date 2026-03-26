# План: трекинг событий — Эксперимент 7402

## Контекст

Эксперимент 7402 тестирует 4 варианта лендинга для Альфа-Вклада: базовый калькулятор (1), + AI-факты (2), + AI bottom sheet (3), + AI inline-чат с рейтингом (4). Нужно зафиксировать поведение пользователей для анализа влияния AI-блоков на конверсию в CTA. Данные пишутся в существующий Google Sheets файл (новый лист `7402`) через переиспользованный Apps Script.

---

## Финальная схема событий

### Универсальные (все 4 варианта)

| Событие | event_value | Триггер |
|---|---|---|
| `landing_open` | — | Загрузка страницы |
| `chose_something` | — | Первое взаимодействие с калькулятором (один раз за сессию) |
| `scroll_depth` | 25 / 50 / 75 / 100 | Прокрутка до порога |
| `info_overlay_open` | — | Открытие оверлея с условиями продукта |
| `pdf_download` | — | Скачивание PDF |
| `cta_click` | — | Клик "К оформлению" (+ дублировать в GA) |

### Вариант 2

| Событие | event_value | Триггер |
|---|---|---|
| `ai_facts_view` | — | AI-блок вошёл в viewport (IntersectionObserver, threshold 0.5) |

### Вариант 3

| Событие | event_value | Триггер |
|---|---|---|
| `ai_bs_open` | — | Клик по `#ai-accordion-trigger` |

### Вариант 4

| Событие | event_value | Триггер |
|---|---|---|
| `ai_chat_open` | — | Клик по `#ai-prompt` |
| `ai_rating` | `positive` / `negative` | Клик по `#ai-rate-up` / `#ai-rate-down` |

---

## Структура строки в Google Sheets (лист `7402`)

```
timestamp | exp_number | variant | platform | user_id | session_id | event | event_value | scroll_depth
```

| Поле | Описание |
|---|---|
| `user_id` | UUID из `localStorage` — персистентен между визитами |
| `session_id` | UUID, генерируется при каждой загрузке страницы |
| `platform` | `android` или `ios` — хардкод в каждом HTML-файле |
| `event_value` | Дополнительное значение события; пусто если не нужно |
| `scroll_depth` | Текущий % прокрутки на момент события |

---

## Изменения в Apps Script

Переиспользуем существующий скрипт (`SHEET_ID = '1E_OtSuorg6mCByIAhLjmwEx6vVbfYwOC4xKiVnbkzn0'`).
Добавляем ветку для 7402 в начало `doPost`, не трогая логику сюрчаржей.
После изменений — **Update existing deployment** (URL остаётся прежним).

### Webhook URL
`https://script.google.com/macros/s/AKfycbyJ3LG8mpZHl49wW9s5zzD5eB14XzlvKEFEIOqW8E2TSyZpkfJ5Zp01j9-Y8BpKRN_oUw/exec`

### Полный обновлённый код Apps Script

```js
const SHEET_ID = '1E_OtSuorg6mCByIAhLjmwEx6vVbfYwOC4xKiVnbkzn0';

const HEADERS = [
  'timestamp', 'exp_number', 'variant', 'platform', 'event',
  'interacted_with_surcharges', 'surcharges_count',
  'surcharge_1', 'surcharge_2', 'surcharge_3', 'surcharge_4', 'surcharge_5',
  'first_choice', 'second_choice', 'third_choice', 'surcharge_order', 'scroll_depth'
];

const HEADERS_7402 = [
  'timestamp', 'exp_number', 'variant', 'platform',
  'user_id', 'session_id', 'event', 'event_value', 'scroll_depth'
];

function getOrCreateSheet(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    const h = headers || HEADERS;
    sheet.appendRow(h);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, h.length)
      .setBackground('#030306')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold');
    sheet.setColumnWidth(1, 160);
    if (!headers) {
      sheet.setColumnWidth(16, 120);
      sheet.getRange(2, 16, 1000, 1).setNumberFormat('@');
    }
  }
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'lock_timeout' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);

    // --- Эксперимент 7402 ---
    if (data.exp_number === '7402') {
      const sheet = getOrCreateSheet(ss, '7402', HEADERS_7402);
      sheet.appendRow([
        new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }),
        data.exp_number   || '',
        data.variant      || '',
        data.platform     || '',
        data.user_id      || '',
        data.session_id   || '',
        data.event        || '',
        data.event_value  || '',
        data.scroll_depth ?? 0
      ]);
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // --- Остальные эксперименты (логика сюрчаржей) ---
    const sheetName = data.exp_number ? String(data.exp_number) : 'Events';
    const sheet = getOrCreateSheet(ss, sheetName);

    const orderArr = data.surcharge_order
      ? String(data.surcharge_order).split(',').map(x => x.trim()).filter(Boolean)
      : [];

    sheet.appendRow([
      new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }),
      data.exp_number   || '',
      data.variant      || '',
      data.platform     || '',
      data.event        || '',
      data.interacted_with_surcharges ? 'да' : 'нет',
      data.surcharges_count ?? 0,
      data.surcharge_1 ? 'да' : 'нет',
      data.surcharge_2 ? 'да' : 'нет',
      data.surcharge_3 ? 'да' : 'нет',
      data.surcharge_4 ? 'да' : 'нет',
      data.surcharge_5 ? 'да' : 'нет',
      orderArr[0] || '',
      orderArr[1] || '',
      orderArr[2] || '',
      "'" + orderArr.join(','),
      data.scroll_depth ?? 0
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'alive' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```
