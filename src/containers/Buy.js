import React, { Component } from 'react';
import {
    Button,
    Form,
    Header,
    Label,
    Table,
} from 'semantic-ui-react'
const axios = require('axios')
const db = require('../mongoDB/flightlist.js')

class MyFlights extends Component {
    state = {
        flights: [],
        selectedFlight: null
    };

    componentDidMount() {
        axios.get('http://6c407f31.ngrok.io/blockchain/getBuyList',  {headers: {'Accept': 'application/json'}})
                .then(response => this.setState({flights: response.data}));
        this.props.userHasAuthenticated(true)
        this.props.setUserName("Alex")
    }

    handleSelect(flight) {
        this.setState({ selectedFlight: flight });
    }

    handleSubmit(event){
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <Header as='h1'>Available flights</Header>
                <p>Please, select your flight</p>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>From</Table.HeaderCell>
                            <Table.HeaderCell>To</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Departure</Table.HeaderCell>
                            <Table.HeaderCell>Arrival</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.flights.map(flight => {
                            return (
                                <Table.Row key={flight.id}
                                    onClick={() => this.handleSelect(flight)}
                                    className={flight === this.state.selectedFlight ? 'selected' : ''}
                                >
                                    <Table.Cell>{flight === this.state.selectedFlight && <Label ribbon>Buy</Label>}{flight.from}</Table.Cell>
                                    <Table.Cell>{flight.to}</Table.Cell>
                                    <Table.Cell>{flight.date}</Table.Cell>
                                    <Table.Cell>{flight.departure}</Table.Cell>
                                    <Table.Cell>{flight.arrival}</Table.Cell>
                                    <Table.Cell>${flight.price}</Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
                <Form onSubmit={this.handleSubmit}><Button >
                    <img alt="Visa Checkout" className="v-button" role="button" src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
                </Button></Form>
            </div >
        );
    }
}

export default MyFlights