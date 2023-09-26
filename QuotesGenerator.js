import React, { Component } from 'react';
import SingleQuote from './SingleQuote';
import Quotes from './Quotes';
import './QuotesGenerator.css';

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: {},
    };
  }

  generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const randomQuote = Quotes[randomIndex];
    this.setState({ currentQuote: randomQuote });
  };

  render() {
    const { currentQuote } = this.state;

    return (
      <div className="quote-generator">
        <h1 className='header-generator'>Random Quote Generator</h1>
        <button className='btn-generator' onClick={this.generateRandomQuote}>Generate Quote</button>
        <div className='generator-component'>
          <SingleQuote text={currentQuote.text} author={currentQuote.author} />
        </div>        
      </div>
    );
  }
}

export default QuoteGenerator;