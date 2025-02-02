import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const API_URL = process.env.REACT_APP_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const response = await fetch(`${API_URL}/shorten`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl }),
    });

    const data = await response.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4 text-center"
        style={{ width: "450px", borderRadius: "15px" }}
      >
        <h1 className="fw-bold text-primary">🚀 ZippyLink</h1>
        <p className="text-muted">Shorten your URLs in a snap! 🔗</p>

        <form onSubmit={handleSubmit} className="mt-3">
          <div className="input-group">
            <input
              type="url"
              className="form-control"
              placeholder="Enter long URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Shorten ✂️
            </button>
          </div>
        </form>

        {shortUrl && (
          <div className="alert alert-success mt-3">
            <p className="fw-bold">Your Shortened Link:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fw-bold text-decoration-none text-success"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
