import React, { Component } from 'react';
import {
    Header,
    Table,
  } from 'semantic-ui-react'
import Flight from "../components/Flight";

class MyFlights extends Component {
    state = {
        flights: [],
    };

    componentDidMount() {
        //api.get().then(json => this.setState({ flights: json }));
    }

    render() {
        return (
            <div>
                <Header as='h1'>My flights</Header>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>From</Table.HeaderCell>
                            <Table.HeaderCell>To</Table.HeaderCell>
                            <Table.HeaderCell>Departure</Table.HeaderCell>
                            <Table.HeaderCell>Expected arrival</Table.HeaderCell>
                            <Table.HeaderCell>Arrival</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Refund</Table.HeaderCell>
                            <Table.HeaderCell>Fair price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { this.state.data.map(flight => {
                            return (
                                <Flight
                                    key={flight.id}
                                    flight={flight}
                                />
                            );
                        }) }
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default MyFlights