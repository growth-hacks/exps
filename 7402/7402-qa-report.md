# QA Report — Эксперимент 7402
Вердикт: FAIL
Итерация: 1 из 3

> **Метод тестирования:** статический анализ HTML-кода (Playwright MCP недоступен в текущем окружении). Все проверки выполнены через grep/read исходного кода файлов. Браузерные скриншоты не получены — требуется ручная визуальная проверка на Gate 5.

---

## Протестированные файлы
- 7402_1_andr.html
- 7402_2_andr.html
- 7402_3_andr.html
- 7402_4_andr.html

---

## Результаты по файлам

### 7402_1_andr.html (Вариант 1 — базовый калькулятор)

| Проверка | Результат | Детали |
|---|---|---|
| Viewport 375px | ✅ | `width=device-width, initial-scale=1.0, viewport-fit=cover` |
| Консольные ошибки | ✅ | Явных JS-ошибок в коде не обнаружено |
| CDN-запросы в runtime | ✅ | Только `googletagmanager.com` (разрешено) |
| GA4 счётчик (`typeof gtag`) | ✅ | `gtag` определён в `<head>`, `G-98GT8FHBZK` |
| GA4 событие | ❌ | Найдено: `cta_click_7402_0_android`. Ожидалось: `cta_click_7402_1_andr` — нумерация начинается с 0 (VARIANT_ID=0), суффикс `android` вместо `andr` |
| CTA кнопка fixed bottom | ✅ | `.cta-wrap { position: fixed; bottom: 0; ... }`, кнопка `id="cta-btn"` |
| CTA кнопка — класс `.cta-button` | ❌ | Кнопка имеет только класс `cta-btn`, **без** `cta-button`. QA-селектор `.cta-button` не сработает |
| CTA URL совпадает с планом | ✅ | `https://ghk-cr-track.ru/7402_end` |
| `window._track` — функция | ✅ | `window._track = track;` (строка 1950) |
| `uid_7402` в localStorage | ✅ | `localStorage.setItem('uid_7402', userId)` с `crypto.randomUUID()` |
| `navigator.sendBeacon` | ✅ | Используется для отправки событий на вебхук |
| Скриншоты | ⚠️ | Браузерные скриншоты недоступны |

---

### 7402_2_andr.html (Вариант 2 — AI-факты / badge)

| Проверка | Результат | Детали |
|---|---|---|
| Viewport 375px | ✅ | `width=device-width, initial-scale=1.0, viewport-fit=cover` |
| Консольные ошибки | ✅ | Явных JS-ошибок в коде не обнаружено |
| CDN-запросы в runtime | ✅ | Только `googletagmanager.com` (разрешено) |
| GA4 счётчик (`typeof gtag`) | ✅ | `gtag` определён в `<head>`, `G-98GT8FHBZK` |
| GA4 событие | ❌ | Найдено: `cta_click_7402_1_android`. Ожидалось: `cta_click_7402_2_andr` — нумерация начинается с 0 (VARIANT_ID=1), суффикс `android` вместо `andr` |
| CTA кнопка fixed bottom | ✅ | `.cta-wrap { position: fixed; bottom: 0; ... }`, кнопка `id="cta-btn"` |
| CTA кнопка — класс `.cta-button` | ✅ | Класс `cta-btn cta-button` присутствует |
| CTA URL совпадает с планом | ✅ | `https://ghk-cr-track.ru/7402_end` |
| `window._track` — функция | ✅ | `window._track = track;` (строка 1540) |
| `uid_7402` в localStorage | ✅ | `localStorage.setItem('uid_7402', userId)` с `crypto.randomUUID()` |
| `navigator.sendBeacon` | ✅ | Используется для отправки событий на вебхук |
| **Трекинг-проверка: `#ai-facts-block`** | ❌ | **КРИТИЧНО:** элемент `id="ai-facts-block"` отсутствует в HTML. JS-код в строке 1547 ищет `document.querySelector('#ai-facts-block')` — получает `null`. IntersectionObserver для события `ai_facts_view` **не навешивается**. Вместо блока с фактами присутствует `id="ai-badge"` |
| Скриншоты | ⚠️ | Браузерные скриншоты недоступны |

---

### 7402_3_andr.html (Вариант 3 — AI bottom sheet / accordion)

| Проверка | Результат | Детали |
|---|---|---|
| Viewport 375px | ✅ | `width=device-width, initial-scale=1.0, viewport-fit=cover` |
| Консольные ошибки | ✅ | Явных JS-ошибок в коде не обнаружено |
| CDN-запросы в runtime | ✅ | Только `googletagmanager.com` (разрешено) |
| GA4 счётчик (`typeof gtag`) | ✅ | `gtag` определён в `<head>`, `G-98GT8FHBZK` |
| GA4 событие | ❌ | Найдено: `cta_click_7402_2_android`. Ожидалось: `cta_click_7402_3_andr` — нумерация начинается с 0 (VARIANT_ID=2), суффикс `android` вместо `andr` |
| CTA кнопка fixed bottom | ✅ | `.cta-wrap { position: fixed; bottom: 0; ... }`, кнопка `id="cta-btn"` |
| CTA кнопка — класс `.cta-button` | ✅ | Класс `cta-btn cta-button` присутствует |
| CTA URL совпадает с планом | ✅ | `https://ghk-cr-track.ru/7402_end` |
| `window._track` — функция | ✅ | `window._track = track;` (строка 1082) |
| `uid_7402` в localStorage | ✅ | `localStorage.setItem('uid_7402', userId)` с `crypto.randomUUID()` |
| `navigator.sendBeacon` | ✅ | Используется для отправки событий на вебхук |
| **Трекинг-проверка: `#ai-accordion-trigger`** | ✅ | Элемент присутствует (строка 354), listener навешен (строка 1090) |
| Скриншоты | ⚠️ | Браузерные скриншоты недоступны |

---

### 7402_4_andr.html (Вариант 4 — AI inline-чат с рейтингом)

| Проверка | Результат | Детали |
|---|---|---|
| Viewport 375px | ✅ | `width=device-width, initial-scale=1.0, viewport-fit=cover` |
| Консольные ошибки | ✅ | Явных JS-ошибок в коде не обнаружено |
| CDN-запросы в runtime | ✅ | Только `googletagmanager.com` (разрешено) |
| GA4 счётчик (`typeof gtag`) | ✅ | `gtag` определён в `<head>`, `G-98GT8FHBZK` |
| GA4 событие | ❌ | Найдено: `cta_click_7402_3_android`. Ожидалось: `cta_click_7402_4_andr` — нумерация начинается с 0 (VARIANT_ID=3), суффикс `android` вместо `andr` |
| CTA кнопка fixed bottom | ✅ | `.cta-wrap { position: fixed; bottom: 0; ... }`, кнопка `id="cta-btn"` |
| CTA кнопка — класс `.cta-button` | ✅ | Класс `cta-btn cta-button` присутствует |
| CTA URL совпадает с планом | ✅ | `https://ghk-cr-track.ru/7402_end` |
| `window._track` — функция | ✅ | `window._track = track;` (строка 1270) |
| `uid_7402` в localStorage | ✅ | `localStorage.setItem('uid_7402', userId)` с `crypto.randomUUID()` |
| `navigator.sendBeacon` | ✅ | Используется для отправки событий на вебхук |
| **Трекинг-проверка: `#ai-rate-up` и `#ai-rate-down`** | ✅ | Оба элемента присутствуют (строки 412–413), listeners навешены (строки 1282–1283) |
| Скриншоты | ⚠️ | Браузерные скриншоты недоступны |

---

## Найденные баги (FAIL)

### БАГ 1 — КРИТИЧНО: Неверные имена GA4-событий (все 4 файла)

**Что нарушено:** Имена GA4-событий не соответствуют соглашению `cta_click_{ID}_{N}_{platform}`.

| Файл | VARIANT_ID | Найдено в коде | Ожидалось |
|---|---|---|---|
| 7402_1_andr.html | 0 | `cta_click_7402_0_android` | `cta_click_7402_1_andr` |
| 7402_2_andr.html | 1 | `cta_click_7402_1_android` | `cta_click_7402_2_andr` |
| 7402_3_andr.html | 2 | `cta_click_7402_2_android` | `cta_click_7402_3_andr` |
| 7402_4_andr.html | 3 | `cta_click_7402_3_android` | `cta_click_7402_4_andr` |

**Два отклонения:**
1. Нумерация вариантов начинается с 0 (VARIANT_ID 0/1/2/3), а должна с 1 (по имени файла: `_1_`, `_2_`, `_3_`, `_4_`).
2. Суффикс `android` вместо `andr` (как в имени файла).

**Как исправить:** В каждом файле поменять строку `gtag('event', 'cta_click_7402_N_android', ...)` на `gtag('event', 'cta_click_7402_N_andr', ...)` и исправить VARIANT_ID (0→1, 1→2, 2→3, 3→4) либо скорректировать соглашение в плане.

---

### БАГ 2 — КРИТИЧНО: Отсутствует `#ai-facts-block` в варианте 2

**Файл:** 7402_2_andr.html

**Что нарушено:** JS-код (строка 1547) ищет `document.querySelector('#ai-facts-block')` для навешивания IntersectionObserver и отправки события `ai_facts_view`. Элемент с таким ID **отсутствует** в HTML. В файле есть только `id="ai-badge"`. Observer получает `null` и не создаётся — событие `ai_facts_view` никогда не будет отправлено.

**Как исправить:** Либо добавить `id="ai-facts-block"` к элементу `div.ai-badge` (или обёртке), либо изменить JS-селектор с `'#ai-facts-block'` на `'#ai-badge'`.

---

### БАГ 3 — НЕКРИТИЧНО: Кнопка CTA в варианте 1 не имеет класса `cta-button`

**Файл:** 7402_1_andr.html

**Что нарушено:** В файлах 2, 3, 4 кнопка имеет классы `cta-btn cta-button`, в варианте 1 — только `cta-btn`. QA-инструмент (и возможные внешние интеграции) ищет по `.cta-button`.

**Как исправить:** Добавить класс `cta-button` к кнопке в строке 674: `<button class="cta-btn cta-button" id="cta-btn" ...>`.

---

## Итог

**Вердикт: FAIL.** Обнаружено 3 бага:

- **2 критичных:** неверные имена GA4-событий во всех 4 вариантах (нумерация с 0, суффикс `android` вместо `andr`); отсутствие `#ai-facts-block` в варианте 2 — событие `ai_facts_view` не будет отправляться.
- **1 некритичный:** отсутствие класса `cta-button` на кнопке CTA в варианте 1.

**Что работает корректно во всех 4 вариантах:**
- Viewport 375px (mobile-first)
- CDN-блокировка соблюдена (только gtm разрешён)
- GA4-счётчик подключён
- CTA-кнопка fixed bottom, CTA URL верный
- `window._track` присутствует
- `uid_7402` в localStorage (персистентный UUID)
- `navigator.sendBeacon` для трекинга
- Вариант 3: `#ai-accordion-trigger` присутствует и listener навешен
- Вариант 4: `#ai-rate-up` и `#ai-rate-down` присутствуют и listeners навешены

> ⚠️ **Примечание:** Браузерное тестирование через Playwright MCP не выполнено (инструмент недоступен). Скриншоты отсутствуют. Визуальную проверку рендера необходимо провести вручную перед Gate 5.
