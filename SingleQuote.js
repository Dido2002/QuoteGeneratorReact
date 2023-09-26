import React from 'react';
import './SingleQuote.css';

const SingleQuote = ({ text, author }) => {
  return (
    <div className="quoteContainer">
      <p className="quote-text">{text}</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

export default SingleQuote;