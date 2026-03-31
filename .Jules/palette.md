## 2024-05-14 - Icon-only buttons lack ARIA labels
**Learning:** Icon-only buttons like the toggle dark mode and close menu often lack ARIA labels which decreases accessibility. Also there are no standard focus visible states set for keyboard navigation.
**Action:** When adding icon-only buttons, always ensure an `aria-label` is present and add a `focus-visible` styling state.