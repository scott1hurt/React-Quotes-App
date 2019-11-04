import React, { Component } from 'react';
import './App.css';

class QuoteBox extends Component {
    render() {
        return (
            <div> 
               <h1>Hi</h1>
            </div>
        );
    }
}
export default QuoteBox;

    //Setting up our Initial State 
    //The constructor function gets called whenever we make a new CowClicker Component
    
        //Super refers to the class we are extending - in this case -, we also want to call the constructor for Component so that any additional setup gets done
        super (props);
        //Set up our state object
        this.state = { clicks: 0 };
   

   

        //Don't Do this 
        //this.state = { clicks: this.state.clicks + 1 }; 

    }

    import React, { Component } from 'react';

    class CowClicker extends Component {
    
        //Setting up our Initial State 
        //The constructor function gets called whenever we make a new CowClicker Component
        constructor(props) {
            //Super refers to the class we are extending - in this case -, we also want to call the constructor for Component so that any additional setup gets done
            super (props);
            //Set up our state object
            this.state = { clicks: 0 };
       
    
        }
        onCowClick = () => {
            console.log("Cow Clicked");
            this.setState({
                clicks: this.state.clicks + 1
    
            });
    
            //Don't Do this 
            //this.state = { clicks: this.state.clicks + 1 }; 
    
        }
    
        componentWillMount() {
            console.log ("Component is getting ready to mount");
    
        }
        componentDidMount(){
            console.log ("Component has finished mounting");
        }
    
        componentWillUpdate() {
            console.log ("Component is finished mounting");
    
        }
        componentDidUpdate() {
            console.log("Component has finished updating");
        }
        render() {
            console.log("Render Called");
            return (
                <div>
                <div> Clicks: {this.state.clicks}</div>
                <img src= 'http://s3.bypaulshen.com.s3-us-west-2.amazonaws.com/buildwithreact/cow.png' onClick= {this.onCowClick} alt="Cow" />
                <p> Click the cow</p>
                </div>
            );
        }
    }
    export default CowClicker;