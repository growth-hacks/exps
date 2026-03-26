# Growth Experiments — Альфа-Банк мобильное приложение

## Контекст проекта

Workspace содержит growth-эксперименты для мобильного приложения Альфа-Банка.

Схема эксперимента: виджеты на главном экране приложения → клик пользователя → лендинг,
открывающийся в Mobile WebView (Тильда). Разные группы пользователей видят разные виджеты
со ссылками на разные варианты лендинга.

Лендинги — одностраничные HTML-файлы под Mobile WebView: viewport 375px, touch-only,
iOS/Android. Публикуются в Тильде.

## Критическое ограничение платформы

Mobile WebView Альфа-Банка **блокирует все запросы к внешним доменам в runtime**,
включая CDN. Все JS-библиотеки должны быть встроены в HTML inline или загружены
через файловое хранилище Тильды (Tilda Files).

## Пути

| Ресурс | Путь |
|--------|------|
| Корень workspace | `C:\Users\Nick\.claude\projects\Exps\` |
| Редполитика | `C:\Users\Nick\.claude\projects\Exps\references\texts\redpolicy.txt` |
| Справочник компонентов | `C:\Users\Nick\.claude\projects\Exps\references\code_library\alfa-components.md` |
| Папка эксперимента | `C:\Users\Nick\.claude\projects\Exps\{ID}\` |

## Соглашение об именах файлов

| Агент | Артефакт |
|-------|----------|
| planner | `{ID}-plan.md` |
| architect | `{ID}-architecture.md` |
| arch-reviewer | `{ID}-review-arch.md` |
| copywriter | `{ID}-copy-variant-{N}.md` |
| copy-reviewer | `{ID}-review-copy.md` |
| emotional-designer | `{ID}-creative-concept-variant-{N}.md` |
| CPO-reviewer | `{ID}-review-cpo.md` |
| designer | `{ID}-design-spec-variant-{N}.md` |
| design-reviewer | `{ID}-review-design.md` |
| coder | `{ID}_{N}_{platform}.html` |
| html-reviewer | `{ID}-review-html.md` |
| QA | `{ID}-qa-report.md` |

Все файлы хранятся в папке эксперимента `{ID}/`.
Финальные HTML без сопутствующих plan.md и design-spec не создаются.

## Агенты пайплайна

Управляет цепочкой **growth-orchestrator**. Пользователь общается только с ним.

| Агент | Модель | Роль |
|-------|--------|------|
| growth-orchestrator | Sonnet | Управляет пайплайном, читает состояние папки, вызывает агентов |
| growth-hack-test-planner | Opus | Формирует план эксперимента |
| growth-test-architect | Opus | Архитектура сложных компонентов (только сложные тесты) |
| growth-arch-reviewer | Sonnet | Ревью архитектуры (петля, max 3 итерации) |
| growth-landing-copywriter | Sonnet | Тексты по редполитике |
| growth-copy-reviewer | Haiku | Проверка текстов по редполитике (петля, max 3 итерации) |
| growth-emotional-designer | Opus | Творческая концепция, оригинальные идеи |
| growth-cpo-reviewer | Opus | Стратегический ревью всего эксперимента |
| growth-landing-designer | Sonnet | Дизайн-спека по Core DS |
| growth-design-reviewer | Haiku | Проверка полноты спеки (петля, max 3 итерации) |
| growth-landing-coder | Sonnet | HTML-вёрстка |
| growth-html-reviewer | Haiku | Статический анализ HTML (петля, max 3 итерации) |
| growth-qa | Sonnet | Браузерное тестирование через Playwright |

## Пайплайн и петли обратной связи

```
planner → GATE 1
  └─[сложный тест]─► architect ⟷ arch-reviewer (max 3)
copywriter ⟷ copy-reviewer (max 3) → GATE 2
emotional-designer → GATE 3
CPO-reviewer → GATE 4
designer ⟷ design-reviewer (max 3)
coder ⟷ html-reviewer (max 3) ⟷ QA (max 3) → GATE 5
```

**Петля:** если ревьюер возвращает FAIL — агент получает feedback и переделывает.
После 3 неудачных итераций оркестратор эскалирует к пользователю.

## Human Review Gates

| Gate | Когда | Что проверяет пользователь |
|------|-------|---------------------------|
| **GATE 1** | После planner | Варианты, CTA URL, платформа — ок? |
| **GATE 2** | После copy-reviewer PASS | Финальные тексты вариантов |
| **GATE 3** | После emotional-designer | Выбор творческого направления |
| **GATE 4** | После CPO-reviewer | Стратегические замечания, решение куда откатиться |
| **GATE 5** | После QA | Скриншот лендинга + qa-report, «ок» перед публикацией |

## Критерии сложного теста (нужен architect)

Тест считается сложным, если содержит хотя бы одно из:
- Интерактивные компоненты (калькуляторы, конфигураторы, формы с расчётами)
- Генерация документов (PDF, отчёты)
- Интеграция с ИИ-моделями
- Вызовы внешних API

Оркестратор определяет это по описанию теста и спрашивает пользователя: «Тест содержит [X]. Подключить архитектора?»

## Формат ревью-файлов (PASS/FAIL)

Все ревьюеры (arch, copy, design, html) пишут в стандартном формате:

```
# Review: [тип] — Эксперимент {ID}
Вердикт: PASS / FAIL
Итерация: N из 3

## Проблемы (если FAIL)
1. [что нарушено] → [как исправить]

## Пройденные проверки
- [x] Проверка 1
- [x] Проверка 2
```

## Запрещено для всех агентов

- Публиковать что-либо в Тильду, Slack или внешние системы.
- Изменять файлы в папках других экспериментов.
- Создавать финальные HTML без сопутствующих plan.md и design-spec.
- Загружать JS-библиотеки динамически из CDN в runtime.
- Использовать CTA URL «из головы» — только из `{ID}-plan.md`.
- Удалять или перезаписывать финальные HTML без явной команды пользователя.
- Менять тексты копирайтера без обоснования и согласования.
- Превышать 3 итерации петли без эскалации к пользователю.
