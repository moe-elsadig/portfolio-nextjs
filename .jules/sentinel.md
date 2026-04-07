## 2024-05-28 - Hardcoded API Key in Config
**Vulnerability:** Found a hardcoded Mapbox API key (`mapbox_key`) in `next.config.js`.
**Learning:** Configuration files are often committed to version control and are a common place where developers mistakenly leave hardcoded secrets instead of referencing environment variables.
**Prevention:** Always use environment variables (e.g., `process.env.MAPBOX_KEY`) for sensitive tokens, and use `.env` files locally that are excluded from version control via `.gitignore`.

## 2024-06-03 - Reverse Tabnabbing Vulnerability
**Vulnerability:** Found instances of `window.open(url)` without `_blank` and `noopener,noreferrer` properties in `components/ProjectCard.js`.
**Learning:** Failing to pass `'_blank'` and `'noopener,noreferrer'` features to `window.open` allows the newly opened window to access the originating window via the `window.opener` API, introducing a reverse tabnabbing vulnerability where a malicious page can hijack the original page.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` when opening external links.
