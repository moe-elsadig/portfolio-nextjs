## 2024-05-28 - Hardcoded API Key in Config
**Vulnerability:** Found a hardcoded Mapbox API key (`mapbox_key`) in `next.config.js`.
**Learning:** Configuration files are often committed to version control and are a common place where developers mistakenly leave hardcoded secrets instead of referencing environment variables.
**Prevention:** Always use environment variables (e.g., `process.env.MAPBOX_KEY`) for sensitive tokens, and use `.env` files locally that are excluded from version control via `.gitignore`.
