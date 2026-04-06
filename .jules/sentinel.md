## 2024-05-28 - Hardcoded API Key in Config
**Vulnerability:** Found a hardcoded Mapbox API key (`mapbox_key`) in `next.config.js`.
**Learning:** Configuration files are often committed to version control and are a common place where developers mistakenly leave hardcoded secrets instead of referencing environment variables.
**Prevention:** Always use environment variables (e.g., `process.env.MAPBOX_KEY`) for sensitive tokens, and use `.env` files locally that are excluded from version control via `.gitignore`.

## 2024-05-28 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Used `window.open(url)` to open external links without explicitly passing `'_blank', 'noopener,noreferrer'` parameters in `components/ProjectCard.js`.
**Learning:** Failing to set `noopener,noreferrer` when opening external links using `window.open()` introduces a reverse tabnabbing vulnerability, where the newly opened page can maliciously manipulate the original page. This codebase uses `onClick` and `window.open` on icons (e.g. `react-icons`) instead of standard `<a>` tags.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` or `target="_blank" rel="noopener noreferrer"` with standard link tags when opening external links.
