# Справочник компонентов — Alfa Bank Mobile Landings

> Этот файл — единственный источник правды о компонентах для лендингов.
> Используется агентами **growth-landing-designer** и **growth-landing-coder**.
> Исходники компонентов (TSX): `C:\Users\Nick\.cursor\references\code_library\`

---

## 1. Целевое окружение

| Параметр | Значение |
|----------|----------|
| Viewport | 375 px (iPhone standard) |
| Среда | Mobile WebView (iOS / Android) |
| Ввод | Touch-only — **нет** hover-состояний |
| Touch target | Минимум 44 × 44 px (iOS HIG) |
| Safe area | Учитывать `safe-area-inset-top` и `safe-area-inset-bottom` |
| Шрифтовые веса | Максимум 2 на экран: **400** (body) и **700** (заголовки, кнопка) |

---

## 2. Дизайн-токены

### Цвета

| Токен | Значение | Применение |
|-------|----------|------------|
| `page-bg` | `#F2F3F5` | Фон страницы |
| `surface` | `#FFFFFF` | Фон карточек и поверхностей |
| `surface-dark` | `#000000` | Тёмная поверхность (primary button) |
| `accent` | `#EF3124` | Акцент (ghost-кнопка, прогресс, звёзды) |
| `text-primary` | `rgba(3, 3, 6, 0.88)` | Основной текст |
| `text-secondary` | `rgba(4, 4, 19, 0.55)` | Вторичный текст |
| `text-inverted` | `#FFFFFF` | Текст на тёмном фоне |
| `border-primary` | `#E1E3E6` | Рамки, разделители |

### Типографика

| Вариант | Размер | Высота строки | Вес | Letter-spacing | Шрифт |
|---------|--------|---------------|-----|----------------|-------|
| `h1` | 28 px | 34 px | 700 | −0.02 em | SF Pro Display |
| `h2` | 24 px | 28 px | 700 | — | SF Pro Display |
| `h3` | 22 px | 26 px | 700 | — | SF Pro Display |
| `body-l` | 18 px | 24 px | 400 | — | SF Pro Text |
| `body-m` | 17 px | 24 px | 400 | — | SF Pro Text |

Фолбэк-шрифты: `-apple-system, BlinkMacSystemFont, Roboto, sans-serif`.

### Отступы и сетка

| Токен | Значение | Применение |
|-------|----------|------------|
| `page-x` | 20 px | Горизонтальные отступы от краёв экрана |
| `section` | 32 px | Вертикальный отступ секции (сверху и снизу) |
| `block` | 16 px | Отступ между элементами внутри секции |

Контент **никогда** не касается краёв экрана.

### Скругления (border-radius)

| Токен | Значение | Применение |
|-------|----------|------------|
| `button` | 16 px | Кнопки |
| `input` | 10 px | Поля ввода |
| `card` | 32 px | Карточки |
| `full` | 80 px | Полностью скруглённые элементы |

---

## 3. Компоненты

### 3.1 Button

Основная кнопка действия.

| Свойство | Значение |
|----------|----------|
| Высота | 56 px |
| Border-radius | 16 px |
| Шрифт | 17 px / 24 px, weight 700 |
| Padding | 0 24 px |
| Активное состояние | opacity: 0.8 |

**Варианты:**

| Вариант | Фон | Текст | Рамка |
|---------|-----|-------|-------|
| `primary` | `#000000` | `#FFFFFF` | нет |
| `secondary` | `#FFFFFF` | `rgba(3,3,6,0.88)` | 1 px solid `#E1E3E6` |

**Props:** `variant`, `onClick`, `fullWidth`, `className`

**Правило:** Primary-кнопка — только одна на экран. Secondary не конкурируют визуально с primary.

**HTML-пример:**
```html
<button style="
  height: 56px;
  border-radius: 16px;
  background: #000000;
  color: #FFFFFF;
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  padding: 0 24px;
  width: 100%;
  cursor: pointer;
">Оформить заявку</button>
```

**TSX-пример:**
```tsx
import { Button } from './components/shared/Button';

<Button variant="primary" fullWidth onClick={handleClick}>
  Оформить заявку
</Button>
```

---

### 3.2 Typography

Типографика с фиксированными стилями.

**Варианты:** см. таблицу в разделе «Типографика» выше.

**Props:** `variant` (`h1` | `h2` | `h3` | `body-l` | `body-m`), `color` (`primary` | `secondary` | `inverted`), `className`, `style`

**HTML-пример:**
```html
<h1 style="font-size:28px; line-height:34px; font-weight:700; letter-spacing:-0.02em; color:rgba(3,3,6,0.88);">
  Главный заголовок
</h1>

<p style="font-size:17px; line-height:24px; font-weight:400; color:rgba(4,4,19,0.55);">
  Вторичный текст описания
</p>
```

**TSX-пример:**
```tsx
import { Typography } from './components/shared/Typography';

<Typography variant="h1">Главный заголовок</Typography>
<Typography variant="body-m" color="secondary">Вторичный текст</Typography>
```

---

### 3.3 Card

Белая карточка для группировки контента.

| Свойство | Значение |
|----------|----------|
| Фон | `#FFFFFF` |
| Border-radius | 32 px |
| Padding (по умолчанию) | 16 px |

**Props:** `padding`, `className`

**HTML-пример:**
```html
<div style="background:#FFFFFF; border-radius:32px; padding:16px;">
  Содержимое карточки
</div>
```

**TSX-пример:**
```tsx
import { Card } from './components/shared/Card';

<Card>
  <h3>Заголовок</h3>
  <p>Содержимое карточки</p>
</Card>
```

---

### 3.4 Section

Секция — основной строительный блок лендинга. Задаёт отступы.

| Свойство | Значение по умолчанию |
|----------|-----------------------|
| Padding X | 20 px |
| Padding Top | 32 px |
| Padding Bottom | 32 px |

**Props:** `paddingX`, `paddingTop`, `paddingBottom`, `className`

**HTML-пример:**
```html
<section style="padding: 32px 20px;">
  Содержимое секции
</section>
```

**TSX-пример:**
```tsx
import { Section } from './components/shared/Section';

<Section paddingTop="32px" paddingBottom="16px">
  Содержимое
</Section>
```

---

### 3.5 FixedCTA

Фиксированная CTA-кнопка внизу экрана.

| Свойство | Значение |
|----------|----------|
| Позиция | fixed, bottom: 0 |
| Padding | 16 px 20 px |
| Padding bottom | `calc(16px + env(safe-area-inset-bottom))` |
| Фон | `#F2F3F5` |
| Верхняя рамка | 1 px solid `#E1E3E6` |

**Props:** `variant`, `onClick`

**Обязательно:** добавить `padding-bottom: 88px` к `<main>`, чтобы контент не перекрывался кнопкой.

**HTML-пример:**
```html
<!-- Обязательно: pb-[88px] на main -->
<main style="padding-bottom: 88px;">...</main>

<div style="
  position: fixed;
  bottom: 0; left: 0; right: 0;
  padding: 16px 20px;
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
  background: #F2F3F5;
  border-top: 1px solid #E1E3E6;
">
  <div style="max-width:375px; margin:0 auto;">
    <button style="
      height:56px; border-radius:16px; background:#000; color:#FFF;
      font-size:17px; font-weight:700; border:none; width:100%;
    ">Оформить заявку</button>
  </div>
</div>
```

**TSX-пример:**
```tsx
import { FixedCTA } from './components/shared/FixedCTA';

<FixedCTA onClick={handleSubmit}>Оформить заявку</FixedCTA>
```

---

### 3.6 BulletList

Список с кастомными маркерами.

| Свойство | Значение |
|----------|----------|
| Gap между пунктами | 12 px |
| Иконка | DotIcon (•), 16 px |
| Выравнивание иконки | center |

**Props:** `items` (string[]), `className`

**HTML-пример:**
```html
<div style="display:flex; flex-direction:column; gap:12px;">
  <div style="display:flex; gap:12px; align-items:center;">
    <span style="font-size:16px; color:rgba(3,3,6,0.88); flex-shrink:0;">•</span>
    <p style="font-size:17px; line-height:24px; color:rgba(3,3,6,0.88);">Текст пункта</p>
  </div>
  <!-- повторить для каждого пункта -->
</div>
```

**TSX-пример:**
```tsx
import { BulletList } from './components/shared/BulletList';

<Card>
  <BulletList items={['пункт 1', 'пункт 2', 'пункт 3']} />
</Card>
```

---

### 3.7 FeatureCard

Карточка с иконкой слева и текстом справа (заголовок + описание).

| Свойство | Значение |
|----------|----------|
| Иконка | img, по умолчанию 64 × 64 px |
| Gap | 16 px |
| Выравнивание | center по вертикали |
| Заголовок | 15 px / 20 px, weight 700 |
| Описание | 15 px / 20 px, weight 400, secondary color |

**Props:** `icon` (string URL), `title`, `description`, `iconSize`, `className`

**HTML-пример:**
```html
<div style="background:#FFF; border-radius:32px; padding:16px;">
  <div style="display:flex; gap:16px; align-items:center;">
    <img src="icon.png" alt="" style="width:64px; height:64px; object-fit:contain; flex-shrink:0;">
    <div>
      <p style="font-size:15px; line-height:20px; font-weight:700; color:rgba(3,3,6,0.88); margin-bottom:4px;">
        Заголовок
      </p>
      <p style="font-size:15px; line-height:20px; color:rgba(4,4,19,0.55);">
        Описание
      </p>
    </div>
  </div>
</div>
```

**TSX-пример:**
```tsx
import { FeatureCard } from './components/shared/FeatureCard';

<FeatureCard
  icon="https://example.com/icon.png"
  title="Регистрация бизнеса — 0 ₽"
  description="Без госпошлины, с бесплатным выпуском КЭП"
/>
```

---

### 3.8 IconCard

Карточка с центрированной иконкой сверху и текстом снизу. Используется в сетках (IconGrid).

| Свойство | Значение |
|----------|----------|
| Иконка | img, по умолчанию 96 × 96 px |
| Min height | 160 px |
| Padding | 12 px |
| Текст | 15 px / 20 px, primary color, center |

**Props:** `iconSrc` (string URL), `text`, `iconSize`, `minHeight`, `className`

**HTML-пример:**
```html
<div style="background:#FFF; border-radius:32px; padding:12px;">
  <div style="display:flex; flex-direction:column; align-items:center; text-align:center; min-height:160px;">
    <img src="icon.png" alt="" style="width:96px; height:96px; object-fit:contain; margin-bottom:8px;">
    <p style="font-size:15px; line-height:20px; color:rgba(3,3,6,0.88);">Текст описания</p>
  </div>
</div>
```

---

### 3.9 IconGrid

Сетка из IconCard. Стандартный компонент для 2×2, 3- или 4-колоночных гридов.

| Свойство | Значение по умолчанию |
|----------|-----------------------|
| Columns | 2 |
| Gap | 16 px |
| Icon size | 96 px |
| Min height | 160 px |

**Props:** `items` (`{ iconSrc?, text }[]`), `columns` (2 | 3 | 4), `iconSize`, `minHeight`, `gap`

**HTML-пример:**
```html
<div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px;">
  <!-- IconCard 1 -->
  <div style="background:#FFF; border-radius:32px; padding:12px;">
    <div style="display:flex; flex-direction:column; align-items:center; text-align:center; min-height:160px;">
      <img src="icon1.png" alt="" style="width:96px; height:96px; object-fit:contain; margin-bottom:8px;">
      <p style="font-size:15px; line-height:20px; color:rgba(3,3,6,0.88);">Текст</p>
    </div>
  </div>
  <!-- IconCard 2, 3, 4... -->
</div>
```

**TSX-пример:**
```tsx
import { IconGrid } from './components/shared/IconGrid';

<IconGrid items={[
  { iconSrc: 'icon1.png', text: 'при подтверждении дохода' },
  { iconSrc: 'icon2.png', text: 'при масштабировании' },
]} />
```

**Важно:** всегда используй IconGrid вместо ручной сборки гридов.

---

### 3.10 ProgressCircle

Круг с номером и индикатором прогресса.

| Свойство | Значение |
|----------|----------|
| Размер по умолчанию | 64 × 64 px |
| Stroke width | 3 px |
| Фон круга | dashed `#E1E3E6`, strokeDasharray="4 4" |
| Прогресс | **`#EF3124`** (красный, ВСЕГДА) |
| Номер внутри | 22 px / 26 px, weight 700, primary color |

**Props:** `number`, `progress` (0–100), `size`

**HTML-пример:** Реализуется через SVG (см. исходник `ProgressCircle.tsx`).

**TSX-пример:**
```tsx
import { ProgressCircle } from './components/shared/ProgressCircle';

<ProgressCircle number={1} progress={50} />
<ProgressCircle number={2} progress={100} size={80} />
```

**КРИТИЧНО:** прогресс ВСЕГДА красный (`#EF3124`), никогда не серый.

---

### 3.11 Accordion (спойлер)

Раскрывающийся блок: заголовок + контент, по тапу заголовок раскрывает/сворачивает тело. Из дизайн-системы Альфа-Банка: [core-ds/core-components — accordion](https://github.com/core-ds/core-components/tree/master/packages/accordion). Пакет: `@alfalab/core-components-accordion`.

| Свойство | Значение |
|----------|----------|
| Заголовок | `header` — строка или ReactNode |
| Контент | `children` — текст или разметка тела блока |
| Состояние | `expanded` (controlled) или `defaultExpanded` (uncontrolled) |
| Иконка раскрытия | по умолчанию — стрелка (control), позиция `controlPosition`: `'start'` \| `'end'` |

**Props:** `header`, `children`, `expanded` | `defaultExpanded`, `onExpandedChange`, `controlPosition` (по умолчанию `'end'`), `className`, `containerClassName`, `headerClassName`, `bodyClassName`, `dataTestId`.

**Использование на лендингах:** блоки «Ограничения и подробности», FAQ, дополнительный текст — без ухода со страницы. Стили согласовать с токенами (Card, Typography).

**TSX-пример (если используется пакет):**
```tsx
import { Accordion } from '@alfalab/core-components-accordion';

<Accordion header="Ограничения и подробности" defaultExpanded={false}>
  <p>Текст ограничений и ссылки на «Подробнее» / «Условия акции»...</p>
</Accordion>
```

**HTML-реализация (Тильда/статичная вёрстка):** семантически `<details>`/`<summary>` или блок с кнопкой-триггером и скрытым контентом; стили по Card (border-radius 32 px, padding 16 px).

---

### 3.12 BottomSheet (всплывающая шторка)

Мобильная шторка снизу экрана для контента «на той же странице» — подробности, условия, не уводя пользователя по внешней ссылке. Из дизайн-системы Альфа-Банка: [core-ds/core-components — bottom-sheet](https://github.com/core-ds/core-components/tree/master/packages/bottom-sheet). Пакет: `@alfalab/core-components-bottom-sheet`.

| Свойство | Значение |
|----------|----------|
| Видимость | `open: boolean` (обязательный) |
| Закрытие | `onClose: () => void` (обязательный) |
| Заголовок | `title?: ReactNode` |
| Подзаголовок | `subtitle?: ReactNode` |
| Контент | `children` — тело шторки |
| Кнопка действия | `actionButton?: ReactNode` (например, «Закрыть») |
| Высота | `initialHeight?: 'default' \| 'full'` |
| Оверлей | `hideOverlay?: boolean` (по умолчанию оверлей виден), закрытие по тапу на оверлей — `disableOverlayClick` |
| Свайп вниз | `swipeable?: boolean` (по умолчанию true) |
| Крестик | `hasCloser?: boolean` |

**Props (основные):** `open`, `onClose`, `title`, `subtitle`, `children`, `actionButton`, `initialHeight`, `hasCloser`, `disableOverlayClick`, `swipeable`, `className`, `dataTestId`, `colors?: 'default' \| 'inverted'`.

**Использование на лендингах:** по тапу на «Подробнее об опции» / «Проценты под защитой» или «Условия акции» открывать BottomSheet с заголовком и текстом; пользователь остаётся на странице. Контент — из копирайта или статичная разметка.

**TSX-пример (если используется пакет):**
```tsx
import { BottomSheet } from '@alfalab/core-components-bottom-sheet';

<BottomSheet open={isOpen} onClose={() => setIsOpen(false)} title="Проценты под защитой">
  <p>Текст программы...</p>
  <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
</BottomSheet>
```

**HTML-реализация (Тильда/статичная вёрстка):** overlay (затемнённый фон) + панель снизу (border-radius сверху, padding), кнопка «Закрыть», по клику на overlay или кнопку — скрытие. Не использовать переход по внешней ссылке.

---

### 3.13 Иконки-маркеры

Три варианта маркеров для списков:

| Компонент | Описание | По умолчанию | Props |
|-----------|----------|--------------|-------|
| `DotIcon` | Символ `•` | 20 px, primary color | `size`, `color` |
| `CircleIcon` | SVG-кружок с контуром | 20 px, stroke 2 px, primary color | `size`, `color`, `strokeWidth` |
| `StarIcon` | SVG-звёздочка (заливка) | 20 px, `#EF3124` | `size`, `color` |

`BulletList` использует `DotIcon` по умолчанию.

---

## 4. Зависимости между компонентами

```
FixedCTA ──→ Button
BulletList ──→ DotIcon + Typography
FeatureCard ──→ Card + Typography
IconCard ──→ Card + Typography
IconGrid ──→ IconCard ──→ Card + Typography
ProgressCircle (самостоятельный)
Accordion ──→ Typography (опционально, из core-ds)
BottomSheet ──→ BaseModal, Backdrop (из core-ds)
Section (самостоятельный)
Button (самостоятельный)
Typography (самостоятельный)
Card (самостоятельный)
CircleIcon, DotIcon, StarIcon (самостоятельные)
```

Это значит: если используешь IconGrid, его CSS должен включать стили Card и Typography. При вёрстке HTML это надо учитывать.

---

## 5. Дерево решений — какой компонент использовать

```
Нужен элемент на лендинге
│
├─ Текст?
│  └─→ Typography (h1/h2/h3/body-l/body-m)
│
├─ Действие (кнопка)?
│  ├─ Основное действие, фиксировано внизу? → FixedCTA
│  └─ Обычная кнопка в потоке? → Button
│
├─ Группировка контента?
│  └─→ Card
│
├─ Структурный блок с отступами?
│  └─→ Section
│
├─ Список пунктов?
│  └─→ BulletList (внутри Card)
│
├─ Карточка с иконкой + заголовок + описание?
│  └─→ FeatureCard
│
├─ Сетка иконок с подписями (2×2, 3 колонки)?
│  └─→ IconGrid (внутри Section)
│
├─ Пошаговый процесс с номерами?
│  └─→ ProgressCircle (внутри Card)
│
├─ Раскрывающийся блок (спойлер, FAQ)?
│  └─→ Accordion (alfa-components п. 3.11 / core-ds accordion)
│
├─ Контент «на той же странице» (подробности, условия) без перехода по ссылке?
│  └─→ BottomSheet (alfa-components п. 3.12 / core-ds bottom-sheet)
│
└─ Нужного компонента нет?
   └─→ Обратись к пользователю: «Кажется, здесь уместен [описание].
       Давайте создадим новый компонент?»
```

---

## 6. Типовые паттерны

### Hero-секция
```html
<section style="padding: 32px 20px 8px;">
  <h1 style="font-size:28px; line-height:34px; font-weight:700; letter-spacing:-0.02em; color:rgba(3,3,6,0.88); margin-bottom:24px;">
    Главный заголовок
  </h1>
  <p style="font-size:17px; line-height:24px; color:rgba(4,4,19,0.55);">
    Подзаголовок или описание
  </p>
</section>
```

### Карточка с кругом + текст (шаги)
```html
<div style="background:#FFF; border-radius:32px; padding:16px;">
  <div style="display:flex; gap:16px; align-items:flex-start;">
    <!-- ProgressCircle (SVG) -->
    <div style="flex:1; padding-top:4px;">
      <p style="font-size:22px; line-height:26px; font-weight:700; color:rgba(3,3,6,0.88); margin-bottom:8px;">
        Заголовок шага
      </p>
      <p style="font-size:17px; line-height:24px; color:rgba(4,4,19,0.55);">
        Описание шага
      </p>
    </div>
  </div>
</div>
```

### Bullet-список в карточке
```html
<section style="padding: 24px 20px 8px;">
  <h3 style="font-size:22px; line-height:26px; font-weight:700; color:rgba(3,3,6,0.88); margin-bottom:16px;">
    Заголовок секции
  </h3>
  <div style="background:#FFF; border-radius:32px; padding:16px;">
    <!-- BulletList -->
  </div>
</section>
```

### Отступы между элементами

| Между чем | Отступ |
|-----------|--------|
| Заголовок → подзаголовок | 24 px (margin-bottom) |
| Hero → первый контент-блок | 8 px (paddingBottom hero) + 8–24 px (paddingTop след. секции) |
| Карточки в списке | 16 px (gap) |
| Секция (стандарт) | 32 px сверху и снизу |
| Секция (компактная) | 16 px сверху и снизу |

---

## 7. Анти-паттерны

| Не делай | Делай |
|----------|-------|
| Задавать font-size/font-weight/line-height через Tailwind-классы | Использовать inline `style` или компонент Typography |
| Создавать гриды вручную через flex/div | Использовать IconGrid |
| Ставить больше одной primary-кнопки на экран | Одна primary + secondary/ghost при необходимости |
| Использовать серый цвет для прогресса ProgressCircle | Всегда `#EF3124` |
| Придумывать кастомные размеры шрифтов | Строго по таблице типографики |
| Использовать hover-эффекты | Touch-only: активное состояние через opacity |
| Ставить контент вплотную к краям экрана | padding 20 px через Section |
| Забывать padding-bottom: 88 px при FixedCTA | Всегда добавлять на `<main>` |
| Использовать больше 2 font-weight на экран | Только 400 и 700 |

---

## 8. Изображения-плейсхолдеры

Пока изображения не поставляются автоматически. Во всех местах, где нужна картинка, использовать заглушку:

```html
<img
  src="https://placehold.co/600x400/F2F3F5/030306?text=Image"
  alt="Описание изображения"
  style="border-radius: 32px;"
/>
```

Иконки для FeatureCard / IconCard — ссылки на изображения подставляет пользователь вручную.
