# Maintenance Guide
All paths are in `src/main.js` unless stated.
1. **AI responses:** edit the `reply()` function. Each block is `if(match) return {text, card}`. Add new topics above the fallback at the bottom. Fallback wording is the list at the end of `reply()`.
2. **Services:** edit the `SERVICES` array: name, id (URL slug), search terms (space-separated synonyms), summary, extra sentence.
3. **Clinic info:** edit `CLINIC` (phone, WhatsApp, address, Maps link, hours, time zone). Hours are `{weekday: [openHour, closeHour]}` with 0 = Sunday.
4. **AI character:** the SVG inside `<div class="orb" id="orb">` in `index.html`. State looks (listening, thinking, speaking, muted, error) are `[data-st=...]` rules in `src/styles.css`.
5. **Avatars:** edit `avSvg(i)` (three inline SVGs) and the names in `AVN`.
6. **Colours:** CSS variables at the top of `src/styles.css` (`--navy`, `--blue`, `--glow`, `--red`).
7. **Connect to the real website:** set `WEBSITE_INTEGRATION.enabled = true` once the clinic authorizes it. Buttons then open real pages in a new tab. Remove the independent-prototype wording if appropriate.
8. **Run locally:** `npx serve .` or VS Code Live Server. Use Chrome/Edge for voice, over localhost or https.
9. **Build:** `npm run build` copies the site into `dist/`.
10. **Deploy on Vercel:** push to GitHub, import the repo, framework "Other". `vercel.json` already sets the build command and output folder.

## Profile, interruption and states (v3)
- **Profile:** `userProfile` (`displayName`, `avatarId`) in `src/main.js`. Name is sanitised by `cleanName()` and only ever rendered with `textContent`/SVG. "Remember my choice" uses `localStorage` key `avidProfile` (this device only, nothing sent anywhere). The ⚙ button edits or resets it.
- **Greetings:** helpers `nb()`/`nf()` add the name; edit the greeting block in `reply()`.
- **Interruption:** every submit increments `gen`; late timers check `gen` and stale speech callbacks check `spId`. `stopSpeech()` is the single place that cancels audio. The ✋ Interrupt button in Call mode stops speech and returns to listening.
- **States:** `setSt()` sets `data-st` on the orb, the call overlay and `<body>`; look is controlled by `[data-st=...]` CSS rules.
- **Desktop avatar size:** the `@media(min-width:900px)` rule at the end of `src/styles.css`.
