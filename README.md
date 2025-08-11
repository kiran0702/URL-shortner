# URL Shortener (MERN)

A full-stack URL shortener built with Node.js, Express, MongoDB, React, and Vite.

## Deployment on Render

This project can be easily deployed on [Render](https://render.com) using the included `render.yaml` configuration file.

### Automatic Deployment with Blueprint

1. Fork or clone this repository to your GitHub account
2. Sign up for a Render account
3. Connect your GitHub account to Render
4. Create a new "Blueprint" on Render and select your repository
5. Render will automatically detect the `render.yaml` file and create the services
6. Add the required environment variables:
   - `MONGO_URI`: Your MongoDB connection string

### Manual Deployment

#### Backend API Service

1. Create a new Web Service on Render
2. Link to your GitHub repository
3. Configure the service:
   - **Name**: urlshortener-api
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: npm install
   - **Start Command**: npm start
   - **Environment Variables**:
     - NODE_ENV: production
     - PORT: 10000 (Render will automatically set this)
     - MONGO_URI: (your MongoDB connection string)
     - BASE_URL: (your frontend URL)
     - CORS_ORIGIN: (your frontend URL)

#### Frontend Static Site

1. Create a new Static Site on Render
2. Link to your GitHub repository
3. Configure the service:
   - **Name**: urlshortener-frontend
   - **Root Directory**: frontend
   - **Build Command**: npm install && npm run build
   - **Publish Directory**: dist
   - **Environment Variables**:
     - VITE_API_URL: (your backend API URL)

## Features

- Shorten long URLs to short codes
- Redirect short URLs to original URLs
- Track visit counts, last visited, and referrer (bonus)
- Admin panel to view all URLs and stats
- Responsive, minimal UI

## Project Structure

```
/backend    # Express + MongoDB API
/frontend   # React + Vite frontend
```

## Local Development

1. **Clone the repo**
2. **Backend:**
   - Copy `/backend/.env.example` to `/backend/.env` and set your MongoDB URI and BASE_URL.
   - Install dependencies:
     ```sh
     cd backend
     npm install
     npm run dev
     ```
3. **Frontend:**
   - Copy `/frontend/.env.example` to `/frontend/.env` and set VITE_API_URL to your backend URL (default: http://localhost:5000).
   - Install dependencies:
     ```sh
     cd frontend
     npm install
     npm run dev
     ```

- Open [http://localhost:5173](http://localhost:5173) in your browser.

### Optional: Run both with `concurrently`

- Install [concurrently](https://www.npmjs.com/package/concurrently) in the root and add a script:
  ```sh
  npm install -D concurrently
  # In package.json:
  # "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\""
  ```

## Production Build & Deployment

1. Build frontend:
   ```sh
   cd frontend
   npm run build
   ```
2. Serve static files from Express:
   - The backend is already set up to serve `/frontend/dist` in production mode.
   - Set `NODE_ENV=production` in `/backend/.env` and run `npm start` in `/backend`.

## API Endpoints

- `POST /api/shorten` — Shorten a URL
- `GET /:shortcode` — Redirect to original URL
- `GET /api/admin` — List all URLs (admin)

## Security & Notes

- **CORS**: Backend allows frontend origin (see `.env`).
- **Admin route**: Not protected by default. To add basic auth:
  - Use [express-basic-auth](https://www.npmjs.com/package/express-basic-auth) or JWT middleware in `/backend/routes/adminRoutes.js`.
- **Rate limiting**: Add [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) to `/backend/server.js` for abuse prevention.
- **Testing**: Add [Jest](https://jestjs.io/) and [supertest](https://www.npmjs.com/package/supertest) for backend tests.

## Submission Checklist

- [ ] All code and .env.example files included
- [ ] Root, backend, and frontend README files present
- [ ] GitHub repo link
- [ ] (Optional) Demo video link
- [ ] (Optional) Hosted URL

---

**Happy coding!**
