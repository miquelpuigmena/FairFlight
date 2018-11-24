import React from 'react'
import {
  Container,
  Dropdown,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import MyFlights from './components/MyFlights.js'

const App = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Dropdown item text='UserName'>
          <Dropdown.Menu>
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as='wwww.google.com'>Buy</Menu.Item>
        <Menu.Item as='a'>My flights</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <MyFlights user="prova" />
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
)

export default App