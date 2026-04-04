## 2026-04-04 - Accessible Interactive SVGs
**Learning:** Do not attach `onClick` handlers directly to bare SVG components (like `react-icons`). This is a common anti-pattern that breaks accessibility for keyboard navigation and screen readers.
**Action:** Always wrap interactive SVGs in a semantic `<button>` tag with an appropriate `aria-label` and `focus-visible:outline-none focus-visible:ring-2` to ensure proper keyboard accessibility and standard verified Tailwind focus styles.
