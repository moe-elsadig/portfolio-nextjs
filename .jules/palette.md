## 2025-04-05 - Wrapping Interactive Icons
**Learning:** Attaching `onClick` handlers directly to bare SVG components (like `react-icons`) creates an accessibility anti-pattern. These elements are not focusable by default and lack semantic meaning, rendering them unusable for keyboard and screen reader users.
**Action:** Always wrap interactive icons in a semantic `<button>` tag equipped with an appropriate `aria-label` and `focus-visible` styles (`focus-visible:outline-none focus-visible:ring-2`) to ensure full keyboard and assistive technology accessibility.
