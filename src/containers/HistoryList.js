import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { deleteRecord } from "../redux/history/action";

export default (props) => {
  const { history } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <Row className="mt-4">
      <Col>
        <ListGroup horizontal="xl" key="title">
          <ListGroupItem><a href="#" onClick={() => props.history.goBack()}>Back</a> - List of user inputs</ListGroupItem>
        </ListGroup>
        {history && history.map((row, i) =>
          <ListGroup horizontal="sm" key={i} className="mt-2">
            <ListGroupItem>{row.number}</ListGroupItem>
            <ListGroupItem>{row.date}</ListGroupItem>
            <ListGroupItem><Link to={`/print-sequence/${row.number}`}>Print view sequence</Link></ListGroupItem>
            <ListGroupItem><Button color="danger" className="ml-2" onClick={()=>dispatch(deleteRecord(i))}>Delete</Button></ListGroupItem>
          </ListGroup>
        )}

      </Col>
    </Row>
  );
}
