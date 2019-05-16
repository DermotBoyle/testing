import React, { Component } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Container
} from "reactstrap";
import { FaMousePointer, FaPlay, FaPause } from "react-icons/fa";
import { MDBInput } from "mdbreact";
import Button from "./Button";
import FooterPage from "./footer";
import Quote from "./qs.js";
import Particles from "./Particles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      text: "",
      language: ""
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleChange = event => {
    // función dentro del text area
    console.log(event);
    const value = event.target.value;
    this.setState({ text: encodeURIComponent(value) });
  };

  onPlaying = () => {
    console.log("playing..."); //
    var audio = document.getElementById("audio");
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
    //this.setState({value: event.target.value});
  };

  onPause = () => {
    console.log("pause");
    var audio = document.getElementById("audio");
    audio.pause();
  };

  onlanguage = event => {
    // función dentro del text area
    console.log(event);
    const value = event.target.value;
    this.setState({ language: value });
  };

  changeLang = language => {
    console.log(language, this);
    // this.setState()
    this.setState({ language: language });
  };

  instructionsAlert = event => {
    alert(
      "You can change the language with the dropdown. Write into the textarea and press play!"
    );
  };

  render() {
    const key = "c72b3784423941dc9c71739cbbc51d41";
    const url = `http://api.voicerss.org/?key=${key}&hl=${
      this.state.language
    }&src=${this.state.text}`;
    console.log(url);
    return (
      <div className="App">
        <Particles />
        <Navbar color="Faded" light>
          <NavbarBrand href="/" className="Title">
            ii
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="Mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink onClick={this.instructionsAlert}>Instructions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div className="Input">
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Limbiio</h1>
              <p className="lead">
                An application to synthesize your text to speech in a click
                <FaMousePointer />
              </p>
            </Container>
          </Jumbotron>
        </div>

        <Quote />
        <div className="langbtn">
          <Button className="lang" changeLang={this.changeLang} />
        </div>
        <audio id="audio">
          <source id="mp3Source" src={url} type="audio/mp3" />
          Your browser does not support the audio format.
        </audio>

        <div className="flexbox-container float-center">
          {" "}
          <MDBInput
            onChange={this.handleChange}
            type="textarea"
            label="write here..."
            rows="5"
            icon="pencil-alt"
          />
        </div>
        <div className="playpause">
          <button onClick={this.onPlaying} className="primary">
            <FaPlay />
          </button>
          <button onClick={this.onPause} className="pause">
            <FaPause />
          </button>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default App;
