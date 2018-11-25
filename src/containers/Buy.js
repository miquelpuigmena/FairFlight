import React, { Component } from 'react';
import {
    Form,
    Header,
    Label,
    Table,
} from 'semantic-ui-react'
const axios = require('axios')
const db = require('../mongoDB/flightlist.js')

class MyFlights extends Component {
    state = {
        flights: [{ '_id': 'EJ4567', 'departure': '16:00', 'arrival': '20:50', 'from': 'VIENA', 'to': 'LONDON GATWICK', 'date': '23-11-18', 'price': 120, 'airline': 'Easyjet', 'id': 'adf0da4e-1270-5855-cc3d-f87b2a6adde8' }, { '_id': 'UX4673', 'departure': '15:00', 'arrival': '22:50', 'from': 'MANCHESTER', 'to': 'BCN', 'date': '23-11-18', 'price': 58, 'airline': 'Iberia', 'id': '08d29926-36ef-31c5-fda9-e6a166305735' }],
        selectedFlight: null
    };

    componentDidMount() {
        axios.get('http://6c407f31.ngrok.io/blockchain/getBuyList',  {headers: {'Accept': 'application/json'}})
                .then(response => this.setState({flights: response.data}));
    }

    handleSelect(flight) {
        this.setState({ selectedFlight: flight });
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
                <Form>
                    <img alt="Visa Checkout" className="v-button" role="button" src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
                </Form>
            </div >
        );
    }
}

export default MyFlights