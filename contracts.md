# miscursions — API Contracts

The miscursions portfolio is largely a content-driven editorial site. All the portfolio copy (about, projects, education, experience, etc.) is static and **intentionally stays in `/app/frontend/src/mock.js`** to keep the site deploy-friendly and to keep editorial changes in-repo.

Backend responsibilities are limited to the **dynamic, cross-session features**:

## 1. Reader counter  (was mocked via localStorage)

Frontend file previously mocking this: `/app/frontend/src/components/magazine/ReaderCounter.jsx`

### Endpoints

**POST `/api/reader/visit`**
- Called once per browser session (guarded by `sessionStorage.mc-visited-session`) when `CoverPage` mounts.
- Request: no body, no auth.
- Server behavior: atomically increments a singleton counter document in Mongo, returns the updated count.
- Response:
  ```json
  { "count": 12849 }
  ```

**GET `/api/reader/count`**
- Called on page load to show the latest count without incrementing.
- Response:
  ```json
  { "count": 12849 }
  ```

### Mongo schema (collection: `reader_stats`)
```json
{
  "_id": "global",
  "count": 12847,
  "updated_at": "<iso>"
}
```
- Seed value: 12847 (matches the mock seed so visitors don't see a jarring jump).
- Use `find_one_and_update({_id: "global"}, {$inc: {count: 1}, $set: {updated_at: now}}, upsert=True, return_document=AFTER)`.

### Frontend change
Replace the localStorage seeding in `ReaderCounter.jsx` with:
1. `fetch(GET /api/reader/count)` on mount to show current total.
2. If `sessionStorage.mc-visited-session` is not set, `fetch(POST /api/reader/visit)` to increment and set the flag.

## 2. Contact/Notes drop (optional, mocked with toast for now)
- Not required in the MVP. The "Download Resume" button currently shows a toast. Can be upgraded later to serve a static PDF via the backend or a CDN link.

## 3. Easter egg Konami
- Pure frontend, no backend work.

## Non-API data
- All editorial content (about, projects, education, achievements, leadership, brand story, back cover, cover images, socials, issue meta) continues to live in `/app/frontend/src/mock.js` and is **not** moved to the database. This is intentional: treats the site as a versioned editorial asset.

## Integration plan
1. Add FastAPI endpoints above to `/app/backend/server.py`.
2. Replace `ReaderCounter.jsx` to call the API.
3. Verify with `deep_testing_backend_v2`.
4. No frontend routes change.
