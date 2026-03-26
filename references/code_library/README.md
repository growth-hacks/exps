# Alfa Bank Shared Components

Библиотека переиспользуемых компонентов для мобильных лендингов Альфа-Банка.

## Компоненты

### Button
Кнопка с тремя вариантами: primary (черная), secondary (белая с рамкой), ghost (прозрачная с красным текстом). Высота 56px, активное состояние через opacity.

### Card
Белая карточка с закругленными углами (32px). Используется для группировки контента.

### Section
Секция с автоматическими отступами (20px по горизонтали, 32px по вертикали). Основной строительный блок лендинга.

### Typography
Типографика с вариантами h1, h2, h3, body-l, body-m. Автоматически применяет правильные размеры, веса и цвета.

### ProgressCircle
Круг с номером и прогрессом 0-100%. Пунктирный фон, красная заливка прогресса.

### FixedCTA
Фиксированная кнопка внизу экрана. Требует добавления `pb-[88px]` к main контейнеру.

### BulletList
Список с кастомными маркерами (черный круг с контуром, 10px). Принимает массив строк.

### CircleIcon
SVG-иконка черного кружка с контуром. Используется в BulletList, может использоваться отдельно.

### DotIcon
Текстовая иконка с символом буллета (•). Альтернативный простой вариант маркера для списков.

### StarIcon
SVG-иконка красной звездочки Альфа-Банка. Альтернативный вариант маркера для списков.

### FeatureCard
Карточка с иконкой слева и текстом справа (заголовок + описание). Иконка центрируется по высоте текста. Размер иконки по умолчанию 64px.

### IconCard
Карточка с центрированной иконкой сверху и текстом снизу. Используется в сетках (IconGrid).

### IconGrid
Сетка из IconCard компонентов. Настраиваемое количество колонок (2, 3, 4), размер иконок и минимальная высота карточек.

## Использование

Все компоненты импортируются из папки `/components/Shared/`:

```tsx
import { Button } from './components/Shared/Button';
import { Card } from './components/Shared/Card';
import { Section } from './components/Shared/Section';
import { Typography } from './components/Shared/Typography';
import { ProgressCircle } from './components/Shared/ProgressCircle';
import { FixedCTA } from './components/Shared/FixedCTA';
import { BulletList } from './components/Shared/BulletList';
import { CircleIcon } from './components/Shared/CircleIcon';
import { DotIcon } from './components/Shared/DotIcon';
import { StarIcon } from './components/Shared/StarIcon';
import { FeatureCard } from './components/Shared/FeatureCard';
import { IconCard } from './components/Shared/IconCard';
import { IconGrid } from './components/Shared/IconGrid';
```

Подробная документация с примерами находится в `/guidelines/Guidelines.md`.