# iDeals GH

Pitch demo for iDeals GH, an online shop in Ghana dealing in cars, phones and PCs. Built with React, TypeScript and Vite, deployed on Cloudflare Workers.

Design reference: Wolevo's mobile app (top nav with search/cart/notifications/profile, fading hero banner, category shortcuts, product grid, dark footer, bottom nav).

## What's real vs placeholder

- All product images are placeholders ("Image coming soon"). Swap them in `src/data/products.ts` once real photos are available.
- All prices, stock counts and contact details are placeholder numbers for the demo.
- Only the Home page is fully built. Shop, Orders, About Us, Profile and Cart are placeholder pages ready to be filled in.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare Workers

Requires a Cloudflare account. Log in once with:

```bash
npx wrangler login
```

Then deploy:

```bash
npm run deploy
```

This builds the app and pushes the `dist` folder to Cloudflare Workers as static assets (configured in `wrangler.toml`).

## Project structure

```
src/
  components/   Reusable UI: TopNav, HeroBanner, CategoryCircles, ProductCard, NewDeals, Footer, BottomNav
  pages/        Route-level pages: Home is fully built, others are placeholders
  data/         Mock product and category data
  types.ts      Shared TypeScript types
```
