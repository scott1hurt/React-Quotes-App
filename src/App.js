import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import quotes from './quotes';



class App extends Component {

  //Setting up constructor functions so we can set our default state
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    }
  }

  //Create a function called getRandomQuote that returns a random quote from the array of quotes.  Hint: You'll need to generate a random number between  0 and 1 less than the length of the array. 
  getRandomQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
  }

  //Function that will be called when the new quote button on the QuoteBox component is pressed
  handleClick = () => {
    //Generate a random quote 
    const randomQuote = this.getRandomQuote();
    //Update our state with the info from that random quote
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  }

  //Function to generate a random color from R: 0-154, G: 0-154, B: 0-154
  getRandomColor(upperBound)  {
    const color = `rgb(
     ${Math.floor(Math.random() * upperBound)},
     ${Math.floor(Math.random() * upperBound)},
     ${Math.floor(Math.random() * upperBound)}
    )`;
    return color;

  }
  
  render() {
   return (

    
    <div>
      <QuoteBox 
      quote={this.state.quote}
      color={this.getRandomColor(155)}
      author={this.state.author}
      handleClick={this.handleClick}
      />
    </div>
  );
}
}

export default App;
