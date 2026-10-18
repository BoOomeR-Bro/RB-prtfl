# Security review

**Date:** 2026-10-18  
**Scope:** full repository, tracked files and searched Git history, npm dependency audit, Cloudflare Pages and Nginx deployment configuration.

## Summary

- No recognized API keys, tokens, private-key blocks, `.env` files, or credential files were found in tracked working-tree files or searched Git history. No values were exposed during scanning.
- `npm audit` reports **9 vulnerabilities: 6 high and 3 moderate**. These are in dev/build dependencies; the static production site does not ship Vite or Tailwind runtime tooling.
- Production Pages was missing response security headers because `nginx.conf` only affects the optional Docker/Nginx host. Added `public/_headers` for Cloudflare Pages.
- No `eval`, `new Function`, `child_process`, or `dangerouslySetInnerHTML` patterns were found. The only localStorage use stores the display theme.

## Findings

### SEC-001 — Missing Cloudflare Pages security headers — MEDIUM — FIXED

Added a Pages `_headers` file with CSP, HSTS, frame protection, MIME sniffing protection, referrer policy, and a restrictive permissions policy. CSP allows inline styles because current React components use style attributes and a scoped inline style block; scripts are same-origin only. Verify the actual response headers after deployment.

### DEP-001 — Tailwind CSS 3 dependency advisories — HIGH — OPEN, build-time scope

Locked Tailwind CSS 3.4.19 pulls vulnerable transitive dependencies including `braces`, `micromatch`, and `postcss-selector-parser`. Current npm audit reports the available Tailwind remediation as a major migration to v4. The vulnerable code is build/development tooling, not part of the deployed static browser application. It still matters when processing untrusted patterns during builds.

### DEP-002 — Vite development server advisories — HIGH — OPEN, development-time scope

Locked Vite 5.4.21 / esbuild 0.21.5 have npm audit advisories. `vite.config.ts` sets `server.host: true`, which exposes the dev server on network interfaces while it is running. Production Cloudflare Pages serves static output and is not running Vite. npm audit identifies Vite 8 as the available major-version fix.

## Dependency audit

`npm audit` completed successfully against the npm registry. The 9 audit entries aggregate to 6 high and 3 moderate vulnerabilities, with no critical findings. The dependency findings and reachability analysis are in `dep-findings.json`.

## Scope limits

The resume PDF contains intentionally public personal/contact information. This review does not assess Cloudflare account settings, CI secrets not present in the repository, or live HTTP response headers. Check the deployed Pages response after the next deployment.
