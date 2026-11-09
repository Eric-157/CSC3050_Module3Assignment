# Full-Stack Vertical Slice Mini-Lab

## How to Run
1. **Start Backend:** Run `node server.js` in the server directory (runs on port 5000).
2. **Start Frontend:** Run `npm run dev` in the Vite React project directory (runs on port 5173 and proxies `/api` calls to port 5000).

## Proving the Error Path
In `src/QuoteList.jsx`, temporarily replace `fetch('/api/quotes')` with `fetch('/api/nonexistent')`. Saving and viewing the page will confirm that the UI renders the error message state instead of hanging or remaining blank.