A reproduction repo of GitHub issue [#1215](https://github.com/47ng/nuqs/issues/1215) for Nuqs TSR adapter.

# Getting Started

To run this application:

```bash
pnpm install
pnpm dev
```

# Tests

Run the test suite with:

```bash
pnpm test
```

The tests exercise `removeTrailingSlash` to ensure it:
- Strips only trailing slashes from hrefs.
- Preserves valid paths, query strings, and hash fragments.

# Files of interest

The files of interest are:

- [`src/lib/utils.ts`](src/lib/utils.ts) – defines `removeTrailingSlash`.
- [`src/routes/nuqs.tsx`](src/routes/nuqs.tsx) – uses `removeTrailingSlash` in the Nuqs route, and showcasing bug.
- [`src/lib/utils.test.ts`](src/lib/utils.test.ts) – tests the behavior of `removeTrailingSlash`.

