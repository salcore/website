# Salcore AI

Minimal Next.js App Router + React + TypeScript

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Run `pnpm build` to verify a production build, then `pnpm start` to serve it.

## Structure

- `app/page.tsx`: server-rendered sections and small reusable presentation components.
- `app/data.ts`: navigation and content, including domain definitions.
- `app/components/Header.tsx` and `DomainTabs.tsx`: isolated client-side interactions. `HeroCarousel.tsx` provides manual previous/next controls, keyboard navigation, and touch swiping. Additional carousel slides reuse existing page copy pending final content.
- `app/globals.css`: responsive styling, no styling framework.
