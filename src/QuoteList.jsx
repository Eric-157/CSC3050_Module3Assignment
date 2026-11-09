import { useState, useEffect } from 'react';

export default function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TEMPORARY ERROR PROOF: Change URL to '/api/quotes-invalid' to test error handling
    fetch('/api/quotes')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="state-loading">Loading quotes...</div>;
  }

  if (error) {
    return <div className="state-error">Error: {error}</div>;
  }

  return (
    <div className="state-success">
      <h2>Quotes List</h2>
      <ul>
        {quotes.map((item) => (
          <li key={item.id}>
            &ldquo;{item.quote}&rdquo; &mdash; <strong>{item.author}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}