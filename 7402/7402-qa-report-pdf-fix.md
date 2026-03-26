# QA Report: PDF Fix — Эксперимент 7402
Дата: 2026-03-26
Вердикт: PASS

## Результаты по файлам

### 7402_1_andr.html
- Загрузка: OK
- html2pdf инициализирован: да
- Кнопка #ov-download найдена: да
- CDN-запросов (cdnjs.cloudflare.com): нет
- PDF генерация: OK (download triggered — файл `alfa-vklad-zayavlenie.pdf`)
- Console errors: `Failed to load resource: net::ERR_CONNECTION_CLOSED` — googletagmanager.com (аналитика, ожидаемо в тестовой среде, не связано с PDF)

### 7402_2_andr.html
- Загрузка: OK
- html2pdf инициализирован: да
- Кнопка #ov-download найдена: да
- CDN-запросов (cdnjs.cloudflare.com): нет
- PDF генерация: OK (download triggered — файл `alfa-vklad-zayavlenie.pdf`)
- Console errors: `Failed to load resource: net::ERR_CONNECTION_CLOSED` — googletagmanager.com (аналитика, ожидаемо в тестовой среде, не связано с PDF)

### 7402_3_andr.html
- Загрузка: OK
- html2pdf инициализирован: да
- Кнопка #ov-download найдена: да
- CDN-запросов (cdnjs.cloudflare.com): нет
- PDF генерация: OK (download triggered — файл `alfa-vklad-zayavlenie.pdf`)
- Console errors: `Failed to load resource: net::ERR_CONNECTION_CLOSED` — googletagmanager.com (аналитика, ожидаемо в тестовой среде, не связано с PDF)

### 7402_4_andr.html
- Загрузка: OK
- html2pdf инициализирован: да
- Кнопка #ov-download найдена: да
- CDN-запросов (cdnjs.cloudflare.com): нет
- PDF генерация: OK (download triggered — файл `alfa-vklad-zayavlenie.pdf`)
- Console errors: `Failed to load resource: net::ERR_CONNECTION_CLOSED` — googletagmanager.com (аналитика, ожидаемо в тестовой среде, не связано с PDF)

## Детали тестирования

- Инструмент: Playwright 1.58.0, Chromium (headless), viewport 375×812
- Протокол: `file:///`
- Сценарий для каждого файла: загрузка страницы → клик `#doc-link` → ожидание overlay → клик `#ov-download` → перехват события download

## Примечания

1. **CDN полностью убран**: ни один файл не делает запросов к `cdnjs.cloudflare.com`. Библиотека `html2pdf.js` встроена inline в `<script>` — `window.html2pdf` доступен сразу после загрузки DOM.

2. **Единственная ошибка в консоли** — `ERR_CONNECTION_CLOSED` для `googletagmanager.com`. Это аналитический скрипт (GTM), недоступный в изолированной тестовой среде. В Mobile WebView Альфа-Банка это поведение аналогично (внешние домены блокируются), но данная ошибка не влияет на работу PDF-генерации.

3. **PDF генерируется корректно** во всех 4 вариантах: overlay открывается, кнопка скачивания срабатывает, файл `alfa-vklad-zayavlenie.pdf` создаётся без console.error `[pdf]`.

## Итог

Фикс подтверждён. Все 4 лендинга эксперимента 7402 корректно генерируют PDF без обращений к внешним CDN. Готово к публикации в Тильде.
