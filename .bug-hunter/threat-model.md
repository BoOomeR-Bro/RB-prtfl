# Threat Model for ruslan-babinov-portfolio

**Generated:** 2026-10-18T12:00:00+05:00  
**Version:** 1.0.0  
**Methodology:** STRIDE

## 1. System Overview

Static public portfolio built with React 18, TypeScript and Vite. It has no backend, authentication, database, or server-side user data; the browser loads bundled assets and public profile content.

### Key Components

| Component | Purpose | Security Criticality | Entry Points |
|---|---|---|---|
| Vite static application | Render portfolio and links | LOW | `/`, bundled JS/CSS |
| Public resume and profile | Publish contact details and PDF | MEDIUM | `/files/resume.pdf`, external links |
| Nginx container | Optional static hosting | MEDIUM | HTTP port 80 |
| Cloudflare Pages | Production static hosting | MEDIUM | Public HTTPS site |

### Data Flow

Profile data is compiled into public JavaScript and rendered in the visitor's browser. There is no server-side persistence or privileged API; contact links lead to mail, telephone, Telegram, and a downloadable resume.

## 2. Trust Boundaries

**Zone 1 — Public:** All static routes, compiled assets, public resume, and external links.  
**Zone 2 — Authenticated:** Not present.  
**Zone 3 — Internal:** Build/deploy environment and optional Nginx container; no runtime internal APIs.

**Auth mechanism:** None; this is an intentionally public static site.

## 3. STRIDE Threat Analysis

### S — Spoofing Identity
- **Threat:** Impersonated external contact destination. **Components:** `src/data/profile.ts`. **Attack vector:** change a published external URL or compromise a linked account. **Severity:** LOW. **Existing mitigations:** explicit HTTPS links. **Gaps:** verify destinations before publishing.

### T — Tampering with Data
- **Threat:** Malicious script injection through future dynamic profile content. **Components:** React rendering in `src/`. **Attack vector:** introduce untrusted HTML and render it unsafely. **Severity:** MEDIUM. **Existing mitigations:** React text escaping; no `dangerouslySetInnerHTML` found. **Gaps:** retain escaping if remote content is added.

### R — Repudiation
- **Threat:** No audit trail for static content or deployments. **Components:** build/deploy pipeline. **Attack vector:** alter deployment content without retained CI logs. **Severity:** LOW. **Existing mitigations:** Git history. **Gaps:** deployment audit depends on host settings.

### I — Information Disclosure
- **Threat:** Secrets accidentally bundled into public assets or Git. **Components:** repository, Vite build. **Attack vector:** add a credential to source or `VITE_*` configuration; it becomes public. **Severity:** HIGH if a real credential is exposed. **Existing mitigations:** no env/credential files or secret-like values found in the current tree/history scan. **Gaps:** add secret scanning in CI and maintain ignore rules.

### D — Denial of Service
- **Threat:** Dependency vulnerability or expensive client animation degrades availability. **Components:** `package-lock.json`, browser components. **Attack vector:** exploit a vulnerable build dependency or load the page on constrained devices. **Severity:** MEDIUM. **Existing mitigations:** static hosting; animation work is client-side. **Gaps:** npm audit currently reports vulnerable packages; see dependency findings.

### E — Elevation of Privilege
- **Threat:** Not applicable to the current public static client: no accounts, roles, or privileged server operations. **Components:** N/A. **Attack vector:** would require adding a privileged backend or credentials. **Severity:** LOW. **Existing mitigations:** no backend/auth surface. **Gaps:** re-model if server features are introduced.

## 4. Vulnerability Pattern Library

### React + Vite static site

**Vulnerable:** `element.innerHTML = profileValue` or React `dangerouslySetInnerHTML` with untrusted content.  
**Safe:** render values as React text: `<p>{profileValue}</p>`.

**Vulnerable:** commit credentials or treat `VITE_SECRET` as private.  
**Safe:** keep secrets out of client builds; use server-side secret storage for future backend services.

**Vulnerable:** `window.open(url)` without restricting untrusted destinations.  
**Safe:** use fixed/validated HTTPS URLs and `rel="noopener noreferrer"` for new tabs.

**Deployment headers:** configure Cloudflare Pages with `public/_headers`; `nginx.conf` headers apply only to the optional Nginx deployment.

## 5. Assumptions & Accepted Risks

1. All public profile details and the resume are intended for publication.
2. Cloudflare Pages serves only the generated `dist` directory and build secrets are not embedded.
3. No authentication or backend means authorization, database injection, and server-side request risks are outside the current runtime scope.
