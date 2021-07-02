import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export default (props) => {
  const { history } = useSelector(state => state);
  return (
    <Row>
      <Col>
        <ListGroup horizontal="xl" key="title">
          <ListGroupItem><a href="#" onClick={() => props.history.goBack()}>Back</a> - List of user inputs</ListGroupItem>
        </ListGroup>
        {history && history.map((row, i) =>
          <ListGroup horizontal="sm" key={i}>
            <ListGroupItem>{row.number}</ListGroupItem>
            <ListGroupItem>{row.date}</ListGroupItem>
            <ListGroupItem><Link to={`/print-sequence/${row.number}`}>Print view sequence</Link></ListGroupItem>
          </ListGroup>
        )}

      </Col>
    </Row>
  );
}
