import React from 'react';
import { Table } from 'semantic-ui-react'

const Flight = props => {
  return (
    <Table.Row key={props.flight.id}
                onClick={() => props.onSelect(props.flight)}
                className={props.flight === props.selectedFlight ? 'selected' : ''}
                >
        <Table.Cell>{props.flight.from}</Table.Cell>
        <Table.Cell>{props.flight.to}</Table.Cell>
        <Table.Cell>{props.flight.departure}</Table.Cell>
        <Table.Cell>{props.flight.expectedArrival}</Table.Cell>
        <Table.Cell>{props.flight.arrival}</Table.Cell>
        <Table.Cell>{props.flight.price}</Table.Cell>
        <Table.Cell>{props.flight.refund}</Table.Cell>
        <Table.Cell>{props.flight.fairPrice}</Table.Cell>
    </Table.Row>
  );
};

export default Flight;
