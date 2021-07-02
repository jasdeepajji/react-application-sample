import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { printNumber } from "../actions/history";

export default ({ history, match }) => {
  let [numbers, setNumber] = useState('');
  useEffect(() => {
    getNumbers();
  }, [])

  const getNumbers = async () => {
    for (let i = 1; i <= Number(match.params.number); i++) {
      const res = await printNumber(i);
      numbers += `<li>${res}</li>`;
      setNumber(numbers);
    }
  };

  return (
    <Row>
      <Col>
        <ListGroup horizontal="xl" key="title">
          <ListGroupItem><a href="#" onClick={() => history.goBack()}>Back</a> - Print view sequence</ListGroupItem>
        </ListGroup>
        <ul type="none" dangerouslySetInnerHTML={{ __html: numbers }} ></ul>
      </Col>
    </Row>
  );
}
