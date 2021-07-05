import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecord } from "../redux/history/action";
import List from "../views/history/List";

export default (props) => {
  const { history } = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteRecords = (i) => {
    dispatch(deleteRecord(i));
  }
  return (
    <Row className="mt-4">
      <Col>
        <ListGroup horizontal="xl" key="title">
          <ListGroupItem><a href="#" onClick={() => props.history.goBack()}>Back</a> - List of user inputs</ListGroupItem>
        </ListGroup>
        <List historyList={history} deleteRecord={deleteRecords.bind(null)}/>
      </Col>
    </Row>
  );
}
