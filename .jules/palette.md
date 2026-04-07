
## 2024-05-19 - Semantic HTML for React Icons
**Learning:** Found a pattern of using bare SVGs (`react-icons` and Heroicons) with `onClick` handlers as primary interactive elements. This creates accessibility barriers since they lack semantic meaning and keyboard focus styling.
**Action:** Always wrap interactive icons in a semantic `<button>` tag with an appropriate `aria-label` and `focus-visible` styles to ensure full accessibility and keyboard navigation.
