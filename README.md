# Shine by Bloom

Site vitrine de Shine by Bloom (bouquets personnalisés, Orléans). Static, bilingual:
French at `/` (default), English at `/en/`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Photos and videos

Originals live in `media/` and are **git-ignored**. Only the optimised copies in
`public/media/` are published.

```bash
pip install pillow pillow-heif   # once
npm run media
```

- Photos: the list of photos used (slug -> source file) is at the top of
  `scripts/prepare-media.py`.
- Videos: drop `.mp4` / `.mov` files in `media/` and run `npm run media`. The audio
  track is removed, the video is compressed, and the first three replace the photo
  windows at the top of the page; any others appear in a video section.

## Copy

All text lives in `src/i18n/ui.ts` (`fr` and `en`). Change both.

## Deploy (Cloudflare)

Same setup as the El Zubaidi site: static assets Worker (`wrangler.jsonc`).
Build command `npm run build`, output `dist`. Or from this machine:
`npx wrangler deploy` after a build.
