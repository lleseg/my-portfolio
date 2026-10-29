# Franco De Nardo — Portfolio

Personal developer portfolio built with Next.js.

Live site: https://fdenardo.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via `next/font`

## Pages

- `/` — Hero / About
- `/experience` — Work history, with highlights per role
- `/skills` — Tech stack and spoken languages
- `/contact` — Contact links
- Custom 404 page for unknown routes

The site follows the system light or dark mode.

## Content

The work history and skills live in `data/experience.ts` and `data/skills.ts`. Edit those files to update the content; the pages render whatever they contain.

## TODO

- [ ] `/projects` — Projects listing page (pending)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build  # Production build
npm run lint   # Run ESLint
```

## Deploy

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers a production deploy.
