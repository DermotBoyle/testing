import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Lang extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Language</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.props.changeLang("en-gb")}>
            English
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => this.props.changeLang("fr-fr")}>
            French
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => this.props.changeLang("pt-br")}>
            Portuguese
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => this.props.changeLang("ja-jp")}>
            Japanese
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => this.props.changeLang("nl-nl")}>
            Dutch
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
