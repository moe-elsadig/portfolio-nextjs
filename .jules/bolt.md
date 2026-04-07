## 2024-03-30 - Avoid internal fetch() in Next.js getServerSideProps
**Learning:** This Next.js codebase uses internal API routes (like `/api/projectData`) and then uses `fetch()` inside `getServerSideProps` to load them. This causes an unnecessary HTTP request from the Next.js server to itself, significantly slowing down the time-to-first-byte (TTFB) during server-side rendering.
**Action:** When adding or fetching static data inside Next.js `getServerSideProps` or `getStaticProps`, do not fetch internal API routes. Instead, extract the data logic into common files/modules and import the functions directly.

## 2024-05-18 - Use getStaticProps instead of getServerSideProps for static data
**Learning:** This Next.js codebase used `getServerSideProps` to load purely static data arrays in `pages/index.js` and `pages/home2.js`. This is a performance anti-pattern that causes the page to be re-rendered on the server for every single request, slowing down the Time To First Byte (TTFB).
**Action:** Use `getStaticProps` instead of `getServerSideProps` for pages that serve purely static data to enable Static Site Generation (SSG). This pre-renders the page at build time and serves it instantly from a CDN.
