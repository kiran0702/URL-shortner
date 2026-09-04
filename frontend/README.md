# URL Shortener Frontend

## Features

- Shorten URLs via backend API
- View and copy shortened URLs
- Dashboard page to view all URLs and stats
- Responsive, minimal UI

## Setup & Run

1. Copy `.env.example` to `.env` and set `VITE_API_URL` to your backend URL.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start development server:
   ```sh
   npm run dev
   ```

## Build for Production

```sh
npm run build
```

- Output will be in `dist/`. Serve with backend Express for production (see root README).

## Notes

- Uses [Vite](https://vitejs.dev/) for fast dev/build.
- To use Tailwind CSS, see [Tailwind setup guide](https://tailwindcss.com/docs/guides/vite).
- API base URL is set via `VITE_API_URL` in `.env`.
