## 2024-03-30 - Avoid internal fetch() in Next.js getServerSideProps
**Learning:** This Next.js codebase uses internal API routes (like `/api/projectData`) and then uses `fetch()` inside `getServerSideProps` to load them. This causes an unnecessary HTTP request from the Next.js server to itself, significantly slowing down the time-to-first-byte (TTFB) during server-side rendering.
**Action:** When adding or fetching static data inside Next.js `getServerSideProps` or `getStaticProps`, do not fetch internal API routes. Instead, extract the data logic into common files/modules and import the functions directly.

## 2024-04-06 - Use getStaticProps instead of getServerSideProps for purely static data
**Learning:** By using `getServerSideProps` for pages that only depend on static or local data, the Next.js server performs unnecessary server-side rendering for every request, which degrades Time to First Byte (TTFB) and misses out on Static Site Generation (SSG).
**Action:** Always prefer `getStaticProps` over `getServerSideProps` when rendering pages with purely static or locally generated data to enable SSG and improve TTFB.
