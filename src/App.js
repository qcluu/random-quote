import './App.css';
import React, { useState } from 'react';

const quotes = [
  {
    text: "Sometimes you have to rethink the things you thought you thought though",
    author: "Winnie the Pooh"
  },
  {
    text: "We'll be friends forever. Won't we Pooh?",
    author: "Piglet"
  },
  {
    text: "It never hurts to keep looking for sunshine",
    author: "Eeyore"
  },
  {
    text: "As soon as I saw you, I knew an adventure was going to happen",
    author: "Winnie the Pooh"
  },
  {
    text: "Wait a minute!",
    author: "Owl"
  },
  {
    text: "The most wonderful thing about Tiggers is I'm the only one",
    author: "Tigger"
  },
  {
    text: "How about something nice, like a warm hug",
    author: "Kanga"
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