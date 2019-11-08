import React, { Component } from 'react';
import './QuoteBox.css';



class QuoteBox extends Component {
    render() {

        //Set the backgrouind color ofnthe HTML element to the random color that is passed in as a prop

        const html = document.documentElement;
        html.style.background = this.props.color;

        return (
            <div style={{ backgroundColor: 'blue' }} className='QuoteBox'>
                <h1 style={{ color: this.props.color }} className="QuoteBox-quote fadeIn">{this.props.quote}</h1>
                <h4 style={{ color: this.props.color }} className='QuoteBox-author fadeIn'>
                    -{this.props.author !== '' ? this.props.author : 'Unknown'}-
               </h4>
                <button
                    style={{ backgroundColor: this.props.color }}
                    onClick={this.props.handleClick}
                    className='QuoteBox-button'>New Quote</button>

            </div>


        );
    }

}



export default QuoteBox;