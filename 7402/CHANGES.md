# Что нужно изменить в лендингах

## Предпосылка
В web-view Альфа-Банка заблокированы внешние запросы. Библиотека `html2pdf.js`
сейчас загружается динамически с CDN (`cdnjs.cloudflare.com`) — из-за этого
генерация PDF не будет работать.

Файл `html2pdf.bundle.min.js` уже скачан и лежит рядом в этой папке.

---

## Изменение 1 — Подключить скрипт в `<head>`

Добавить строку **перед** закрывающим тегом `</head>` в каждом файле:

```html
<script src="html2pdf.bundle.min.js"></script>
```

| Файл | Строка, после которой вставить |
|------|-------------------------------|
| `7402_1_andr.html` | 537 (`  </style>`) |
| `7402_2_andr.html` | 292 (`  </style>`) |
| `7402_4_andr.html` | 239 (`  </style>`) |

**Результат — было:**
```html
  </style>
</head>
```

**Стало:**
```html
  </style>
<script src="html2pdf.bundle.min.js"></script>
</head>
```

---

## Изменение 2 — Убрать CDN-загрузку из функции `downloadPDF`

Удалить 3 строки (блок `if`) в каждом файле:

```js
    if (!window.html2pdf) {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.2/html2pdf.bundle.min.js');
    }
```

| Файл | Строки |
|------|--------|
| `7402_1_andr.html` | 1805–1807 |
| `7402_2_andr.html` | 1304–1306 |
| `7402_4_andr.html` | 1025–1027 |

---

## Важно при публикации на Тильде

`src="html2pdf.bundle.min.js"` — относительный путь. Он сработает только если файл
лежит на том же домене.

**Нужно:**
1. Загрузить `html2pdf.bundle.min.js` в файловое хранилище Тильды
2. Заменить `src="html2pdf.bundle.min.js"` на полный URL из хранилища, например:
   `src="https://static.tildacdn.com/tild-XXXX/html2pdf.bundle.min.js"`
