## 2024-03-30 - Avoid internal fetch() in Next.js getServerSideProps
**Learning:** This Next.js codebase uses internal API routes (like `/api/projectData`) and then uses `fetch()` inside `getServerSideProps` to load them. This causes an unnecessary HTTP request from the Next.js server to itself, significantly slowing down the time-to-first-byte (TTFB) during server-side rendering.
**Action:** When adding or fetching static data inside Next.js `getServerSideProps` or `getStaticProps`, do not fetch internal API routes. Instead, extract the data logic into common files/modules and import the functions directly.

## 2025-04-03 - Use getStaticProps for purely static local data to enable SSG
**Learning:** Next.js pages loading static local data (like Javascript arrays from `getProjectData()`) using `getServerSideProps` are server-side rendered on every request. This causes unnecessary server overhead and slower Time to First Byte (TTFB). This codebase had multiple pages opting out of Static Site Generation (SSG) for static data.
**Action:** Always prefer `getStaticProps` over `getServerSideProps` when data can be determined at build time. This ensures pages are statically generated (SSG) and can be cached at the edge/CDN.
