import React from 'react';
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from 'react-router-dom';

export default ({historyList, deleteRecord}) => {
    return historyList && historyList.map((row, i) =>
    <ListGroup horizontal="sm" key={i} className="mt-2">
      <ListGroupItem>{row.number}</ListGroupItem>
      <ListGroupItem>{row.date}</ListGroupItem>
      <ListGroupItem><Link to={`/print-sequence/${row.number}`}>Print view sequence</Link></ListGroupItem>
      <ListGroupItem><Button color="danger" className="ml-2" onClick={()=>deleteRecord(i)}>Delete</Button></ListGroupItem>
    </ListGroup>
  )
};