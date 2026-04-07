## 2025-04-07 - Add Keyboard Accessibility and ARIA to Icon Buttons
**Learning:** Found an accessibility anti-pattern where bare SVG icons (`react-icons`, Heroicons) are bound to `onClick` handlers directly. Screen readers cannot properly interpret these icons and they lack keyboard focus state (cannot tab into them).
**Action:** Always wrap interactive icons in a semantic `<button>` tag equipped with an appropriate `aria-label` and verify keyboard accessibility via `focus-visible` classes (e.g., `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300`).
