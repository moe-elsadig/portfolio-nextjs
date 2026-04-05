## 2024-05-28 - Hardcoded API Key in Config
**Vulnerability:** Found a hardcoded Mapbox API key (`mapbox_key`) in `next.config.js`.
**Learning:** Configuration files are often committed to version control and are a common place where developers mistakenly leave hardcoded secrets instead of referencing environment variables.
**Prevention:** Always use environment variables (e.g., `process.env.MAPBOX_KEY`) for sensitive tokens, and use `.env` files locally that are excluded from version control via `.gitignore`.

## 2024-05-29 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Found `window.open(url)` used to open external links without specifying `'_blank', 'noopener,noreferrer'`.
**Learning:** Using `window.open` without these features allows the newly opened tab to retain a reference to the opening window's `window.opener` object, potentially enabling reverse tabnabbing attacks where the new tab can manipulate the original window (e.g., redirecting it to a phishing site).
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` when opening external links programmatically.
