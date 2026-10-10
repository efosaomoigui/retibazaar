# RetiBazaar independent website

This is the existing public frontend, independently served. It does not import or
call Retinaad's form API, admin, authentication or storage. Existing buyer briefs
remain browser-local, and platform handoffs use the configured external app URL.
The separate authenticated marketplace platform is outside this package.

From the shared source repository, configure `retibazaar/.env` using its own sample,
then run `npm install`, `npm run build:retibazaar`, and `npm run start:retibazaar`.
`npm run dev:retibazaar` is the independent development preview.
All `VITE_` variables are public build-time values. `PORT` defaults to 3002.
Do not copy Retinaad secrets/environment into this application.

Run `npm run package:retibazaar` for a standalone `release/retibazaar-*` folder.
On its own host: Node.js 22.12+, `npm install --omit=dev`, configure `.env`, then
`npm start`. Alternatively deploy just `dist/` to static hosting with SPA fallback.
Proxy only to this site's own process, with HTTPS; never to Retinaad's backend.
Stop Retinaad and verify `/`, `/buyers` and `/sellers` still load.

No storage, sessions or server secrets are shared with Retinaad. No new backend is
needed for the current public experience. Future platform functionality must own
its separate data/configuration/authentication. Parent-site links are normal links.
