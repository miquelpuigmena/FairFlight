import React, { Component } from 'react';
import {
    Header,
    Table,
} from 'semantic-ui-react'

class MyFlights extends Component {
    state = {
        flights: [{
            "_id" : "JI5362",
            "userId" : "Sergi Sanchez",
            "departure" : "16:00",
            "arrival" : "20:50",
            "from" : "VIENA",
            "to" : "LONDON LUTON",
            "date" : "23-11-18",
            "price" : 120,
            "airline" : "Easyjet",
            "blockchainId" : "0x345cA3e014Aaf5dcA488057592ee47305D9B3e10",
            "__v" : 0,
            "delay" : 60,
            "percentRefund" : 10,
            "totalRefund" : 12
        }, { '_id': 'UX4673', 'departure': '15:00', 'arrival': '22:50', 'from': 'MANCHESTER', 'to': 'BCN', 'date': '23-11-18', 'price': 58, 'airline': 'Iberia', 'id': '08d29926-36ef-31c5-fda9-e6a166305735' }],
    };

    componentDidMount() {
        axios.get('https://localhost:5000/taula_compres',  {headers: {'Accept': 'application/json'}})
                .then(response => this.setState({flights: response.data}));
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
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Departure</Table.HeaderCell>
                            <Table.HeaderCell>Expected arrival</Table.HeaderCell>
                            <Table.HeaderCell>Delay</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Refund</Table.HeaderCell>
                            <Table.HeaderCell>Fair price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.flights.map(flight => {
                            return (
                                <Table.Row key={flight.id}>
                                    <Table.Cell>{flight.from}</Table.Cell>
                                    <Table.Cell>{flight.to}</Table.Cell>
                                    <Table.Cell>{flight.date}</Table.Cell>
                                    <Table.Cell>{flight.departure}</Table.Cell>
                                    <Table.Cell>{flight.arrival}</Table.Cell>
                                    <Table.Cell>{flight.delay && flight.delay + "'"}</Table.Cell>
                                    <Table.Cell>${flight.price}</Table.Cell>
                                    <Table.Cell>{flight.percentRefund && flight.percentRefund + "%"}</Table.Cell>
                                    <Table.Cell>{flight.totalRefund && "$" + (flight.price - flight.totalRefund)}</Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default MyFlights