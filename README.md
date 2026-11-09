# Full-Stack Vertical Slice Mini-Lab

## How to Run
1. **Start Backend:** Run `node server.js` in a terminal opened at the root folder, it will run on port 5001.
2. **Start Frontend:** Run `npm run dev` in a 2nd terminal also opened at the root folder, it will run on port 5173 and proxies `/api` calls to port 5001.

## Proving the Error Path
In `src/QuoteList.jsx`, temporarily replace `fetch('/api/quotes')` with `fetch('/api/nonexistent')`. Saving and viewing the page will confirm that the UI renders the error message state instead of hanging or remaining blank.