## 2024-05-28 - Hardcoded API Key in Config
**Vulnerability:** Found a hardcoded Mapbox API key (`mapbox_key`) in `next.config.js`.
**Learning:** Configuration files are often committed to version control and are a common place where developers mistakenly leave hardcoded secrets instead of referencing environment variables.
**Prevention:** Always use environment variables (e.g., `process.env.MAPBOX_KEY`) for sensitive tokens, and use `.env` files locally that are excluded from version control via `.gitignore`.

## 2024-05-28 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Found multiple instances of `window.open(url)` without `noopener,noreferrer` features in `components/ProjectCard.js`.
**Learning:** Opening external links via `window.open` without `noopener,noreferrer` creates a reverse tabnabbing vulnerability where the newly opened tab maintains a reference to the `window.opener` object, potentially allowing the new page to maliciously modify the original page.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` when opening external links dynamically via JavaScript, just as `rel="noopener noreferrer"` should be used with standard `<a>` tags.
