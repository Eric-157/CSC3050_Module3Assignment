const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.json());

// In-memory data store
const quotes = [
  { id: 1, quote: "A good plan today is better than a perfect plan tomorrow. Don't wait for an inspired ending to come to mind. Work your way to the ending and see what comes up.", author: "Andy Weir" },
  { id: 2, quote: "A story in your head isn't a story. It's just a daydream until you actually write it down. So write it down.", author: "Andy Weir" },
  { id: 3, quote: "If you look up every last detail on your subject, you'll never finish.", author: "Andy Weir" }
];

app.get('/api/quotes', (req, res) => {
  res.status(200).json(quotes);
});

app.get('/api/quotes/:id', (req, res) => {
  const quoteId = parseInt(req.params.id, 10);
  const quote = quotes.find(q => q.id === quoteId);

  if (!quote) {
    return res.status(404).json({
      error: "Not Found",
      message: `Quote with ID ${quoteId} does not exist.`
    });
  }

  res.status(200).json(quote);
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});