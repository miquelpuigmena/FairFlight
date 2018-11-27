import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
     };

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      if (this.state.email === this.state.password){
        this.props.userHasAuthenticated(true);
        this.props.setUserName(this.state.email);
        this.props.history.push('/buy')
      } else {
        //manera cutre d'esborrar el que hi havia escrit
        //el Miquel vol que fagi shake
        this.setState({
            email: "",
            password: ""
          });
        this.props.history.push('/login')
      }
    }

    render () {
        return (
        <div className='login-form'>
            <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
                height: 100%;
            }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Image centered size='medium' src='/images/fairflight-logo.png' />
                {/*size -> mini < tiny < small < medium < large < big < huge < massive */}
                <Header as='h2' color='blue' textAlign='center'>
                Log-in to your account
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                    <Form.Input
                    fluid
                    name='email'
                    icon='user'
                    iconPosition='left'
                    onChange={this.onChange}
                    value={this.state.email}
                    placeholder='E-mail address'
                    />
                    <Form.Input
                    fluid
                    name='password'
                    icon='lock'
                    iconPosition='left'
                    onChange={this.onChange}
                    value={this.state.password}
                    placeholder='Password'
                    type='password'
                    />

                    <Button color='blue' fluid size='large' type="submit">
                    Login
                    </Button>
                </Segment>
                </Form>
                <Message>
                New to us? <a href='/login'>Sign Up</a>
                </Message>
            </Grid.Column>
            </Grid>
        </div>
        );
    }
}