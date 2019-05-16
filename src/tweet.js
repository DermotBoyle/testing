import React, { Component } from "react";
import { Button } from "reactstrap";
import { FaTwitter } from "react-icons/fa";

export default class TweetBtn extends Component {
  tweetBtn = () => {
    console.log("Tweet me");
  };
  render() {
    return (
      <a
        href={`https://twitter.com/intent/tweet?text= ${this.props.quote} ${
          this.props.author
        }`}
        target=" "
      >
        <Button color="#38A1F3" onClick={this.tweetBtn}>
          Tweet
          <FaTwitter />
        </Button>
      </a>
    );
  }
}
