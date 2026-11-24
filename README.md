# Avid Dental AI Prototype (independent, not officially integrated or endorsed)

Plain HTML/CSS/JS. No build step and no dependencies.

## Run locally
- VS Code: install the "Live Server" extension, right-click `index.html` and choose "Open with Live Server".
- Or run `npx serve .` and open the address it prints.
- Use Chrome or Edge for voice. The microphone needs http://localhost or https.

## Deploy
1. Push this folder to GitHub.
2. In Vercel choose "Add New Project", import the repo, framework "Other", no build command, output directory blank (root).

## Edit
Everything editable is at the top of `src/main.js`:
- `CLINIC`: phone, WhatsApp, address, Maps link, hours.
- `WEBSITE_INTEGRATION`: set `enabled: true` once the clinic authorizes it. Buttons then open real pages on aviddental.com.ng in a new tab.
- `SERVICES`: the 15 services, their search terms and summaries.
- Reply logic lives in the `reply()` function. Appearance is in `src/styles.css`.

## Notes
- The assistant is rule-based and offline. It uses no external AI model and no API keys.
- Call transcripts are kept in memory only and cleared when the call ends.
- Not yet done: logo image (add `public/logo` and place it in `index.html`), sampled brand colours, automated tests.
