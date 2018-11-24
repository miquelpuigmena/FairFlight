import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'  


class MyFlights extends Component {
    state = { data: [] };

    /*componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        fetch(URL_TO_FETCH)
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(data => this.setState({ data }));
    }*/


    render() {
        return (
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
                    { this.state.data.map(function(flight){
                        return (
                            <Table.Row key={flight.id}>
                                <Table.Cell>{flight.from}</Table.Cell>
                                <Table.Cell>{flight.to}</Table.Cell>
                                <Table.Cell>{flight.departure}</Table.Cell>
                                <Table.Cell>{flight.expectedArrival}</Table.Cell>
                                <Table.Cell>{flight.arrival}</Table.Cell>
                                <Table.Cell>{flight.price}</Table.Cell>
                                <Table.Cell>{flight.refund}</Table.Cell>
                                <Table.Cell>{flight.fairPrice}</Table.Cell>
                            </Table.Row>);
                    }) }
                </Table.Body>
            </Table>
        );
    }
}

export default MyFlights