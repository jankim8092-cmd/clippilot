# ClipPilot starter

A static front-end prototype for ClipPilot.

## Deploy to Cloudflare Pages using GitHub

1. Create a new **public or private** GitHub repository named `clippilot`.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the repository root.
3. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select the `clippilot` repository.
5. Framework preset: **None**.
6. Build command: leave blank.
7. Build output directory: `/` (if the UI rejects `/`, use `.`).
8. Save and deploy.

## Important

This is a front-end prototype only. The file picker currently selects a local video and displays its name and size. It does not upload, store, transcribe, analyze, or render video. Those features require a secure backend and processing service.

Never put private API keys in `app.js` or any browser-visible file.
