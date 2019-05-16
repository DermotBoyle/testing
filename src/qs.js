import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import TweetBtn from "./tweet";
import "./qs.css";

class Quote extends Component {
  state = {
    quote: "",
    author: ""
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then(res => {
      let randomQuote = Math.floor(Math.random() * res.data.quotes.length);

      this.setState({
        quote: res.data.quotes[randomQuote]["quote"],
        author: res.data.quotes[randomQuote]["author"]
      });
    });
  }

  getNewQuote = () => {
    this.getQuote();
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">Quote :</div>
          <div className="card-body">
            <Display quote={this.state.quote} author={this.state.author} />
          </div>
        </div>
        <div id="buttons">
          <NewQuoteBtn changeQuote={this.getNewQuote} />
          <TweetBtn quote={this.state.quote} author={this.state.author} />
        </div>
      </div>
    );
  }
}

const NewQuoteBtn = props => {
  return (
    <Button className="quotebtn" onClick={props.changeQuote}>
      New Quote
    </Button>
  );
};

const Display = props => {
  return (
    <div className="display">
      <p>{props.quote}</p>
      <h5>{props.author}</h5>
    </div>
  );
};

export default Quote;
