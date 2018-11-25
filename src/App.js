import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import Routes from "./Routes";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      userName: null
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUserName = name => {
    this.setState({ userName: name });
  }

  render(){
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      userName: this.userName,
      setUserName: this.setUserName
    };

    return (
      <div>
        <Menu fixed='top' inverted>
          {this.state.isAuthenticated && (
              <Container>
                <Dropdown item text={this.state.userName}>
                  <Dropdown.Menu>
                    <Dropdown.Item><Link to="/login">Log out</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as='a'><Link to="/buy">Buy</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/myflights">My flights</Link></Menu.Item>
              </Container>
          )}
          </Menu>
          
          <Container text style={{ marginTop: '7em' }}>
            <Routes childProps={childProps} />
          </Container>

          <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
              <Image centered size='small' src='/images/fairflight-logo.png' />
              <List horizontal inverted divided link>
                <List.Item as='a' href='#'>
                  Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                  Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                  Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                  Privacy Policy
                </List.Item>
              </List>
            </Container>
          </Segment>

        </div>
    );
  }
}

export default App