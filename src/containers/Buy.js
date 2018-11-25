import React, { Component } from 'react';
import {
    Form,
    Header,
    Table,
} from 'semantic-ui-react'
import Flight from "../components/Flight";
const db = require('../mongoDB/flightlist.js')

class MyFlights extends Component {
    state = {
        flights: [],
        selectedFlight: null
    };

    componentDidMount() {
        //db.get().then(json => this.setState({ flights: json }));
    }

    handleSelect(flight) {
        this.setState({ selectedFlight: flight });
    }

    handleOnChange(event) {
        let selectedHero = this.state.selectedHero;
        selectedHero[event.target.name] = event.target.value;
        this.setState({ selectedHero: selectedHero });
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
                            <Table.HeaderCell>Departure</Table.HeaderCell>
                            <Table.HeaderCell>Arrival</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {/*this.state.data.map(flight => {
                            return (
                                <Flight
                                    key={flight.id}
                                    flight={flight}
                                    onSelect={this.handleSelect}
                                    selectedFlight={this.state.selectedFlight}
                                />
                            );
                        })*/}
                    </Table.Body>
                </Table>

                <Form>
                    <img alt="Visa Checkout" class="v-button" role="button" src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" align="right" />
                </Form>

            </div >
        );
    }
}

export default MyFlights