# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Revamped portfolio

## Contact form backend

The contact form posts to the Node.js API at `/api/contact`. The API sends
messages to `CONTACT_TO` using SMTP; it does not store submissions.

1. Copy `.env.example` to `.env` (`cp .env.example .env`) and enter your SMTP
   host, port, credentials, and recipient email address. `.env.example` is only
   a template; the API reads `.env`. Never commit `.env`.
2. Install dependencies with `npm install`.
3. Run `npm run dev`. This starts both the API on port `3001` and Vite.

Without SMTP settings, the API still starts so you can work on the site, but
contact form submissions return a setup error until the settings are added.

The Vite development server proxies `/api` requests to port `3001`. For
production, configure your hosting provider to route `/api` requests to this
Node server, and set the same environment variables in the server environment.