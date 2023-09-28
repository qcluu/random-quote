import './App.css';
import React, { useState } from 'react';

const quotes = [
  {
    text: "BOINKE 1",
    author: "BOINKIE"
  },
  {
    text: "BOINKE 2",
    author: "BOINKIE"
  },
  {
    text: "BOINKE 3",
    author: "BOINKIE"
  },
  {
    text: "BOINKE 4",
    author: "BOINKIE"
  },
  {
    text: "BOINKE 5",
    author: "BOINKIE"
  },
]

function App() {

  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const getRandomQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }
  return (
    <div className="App">
      <div id="quote-box">
        <p id='text'>{quote.text}</p>
        <p id='author'>{quote.author}</p>
        <button id='new-quote' onClick={getRandomQuote}>
          New Quote
        </button>
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.text}" - ${quote.author}`} target='_top'>
          TWEET
        </a>
      </div>
    </div>
  );
}

export default App;