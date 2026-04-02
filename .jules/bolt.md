## 2024-03-30 - Avoid internal fetch() in Next.js getServerSideProps
**Learning:** This Next.js codebase uses internal API routes (like `/api/projectData`) and then uses `fetch()` inside `getServerSideProps` to load them. This causes an unnecessary HTTP request from the Next.js server to itself, significantly slowing down the time-to-first-byte (TTFB) during server-side rendering.
**Action:** When adding or fetching static data inside Next.js `getServerSideProps` or `getStaticProps`, do not fetch internal API routes. Instead, extract the data logic into common files/modules and import the functions directly.

## 2026-04-02 - Optimize Static Pages with getStaticProps
**Learning:** This Next.js codebase unnecessarily used `getServerSideProps` to fetch purely static JSON data (e.g., project/work lists) from local files, causing Next.js to server-side render these pages on every request. This defeated Next.js's ability to serve statically generated pages, increasing server load and degrading the Time to First Byte (TTFB).
**Action:** When pages render purely static data or local data arrays that do not change on every request, replace `getServerSideProps` with `getStaticProps`. This opts the pages into Static Site Generation (SSG), prerendering them at build time for instant delivery over a CDN.
