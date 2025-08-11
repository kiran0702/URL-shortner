# URL Shortener Backend

## Features

- Shorten URLs with unique codes
- Redirect short URLs to original URLs
- Track visit counts
- Admin endpoint to list all URLs

## Setup & Run

1. Copy `.env.example` to `.env` and set your MongoDB URI and BASE_URL.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start development server:
   ```sh
   npm run dev
   ```

## API Endpoints

### POST `/api/shorten`

- **Body:** `{ "originalUrl": "https://example.com" }`
- **Response:** `{ "shortUrl": "http://localhost:3000/abc123", "shortCode": "abc123" }`

### GET `/:shortcode`

- Redirects to original URL if found, else 404 JSON error.

### GET `/api/admin`

- Returns all shortened URLs with stats (for admin panel).

## Example Requests

**Shorten a URL:**

```sh
curl -X POST http://localhost:5000/api/shorten -H "Content-Type: application/json" -d '{"originalUrl":"https://github.com"}'
```

**Get all URLs (admin):**

```sh
curl http://localhost:5000/api/admin
```

## Notes

- CORS is enabled for the frontend origin (see `.env`).
- To serve frontend in production, build frontend and use Express static middleware (see root README).
- For rate limiting, see [express-rate-limit](https://www.npmjs.com/package/express-rate-limit).
- For tests, see [Jest](https://jestjs.io/) and [supertest](https://www.npmjs.com/package/supertest).
- To protect admin route, add basic auth or JWT (see root README for notes).
