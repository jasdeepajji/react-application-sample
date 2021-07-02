import React from "react";
import { Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addHistory } from "../actions/history";


export default () => {
  const dispatch = useDispatch();

  const submit = (e) => {
    if (e.charCode === 13 && e.target.value) {
      dispatch(addHistory(e.target.value));
      e.target.value = ''
    }
  };

  return (
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="numberInput">Enter Number </Label>
          <Input
            type="number"
            name="Number"
            id="numberInput"
            placeholder="Enter a number"
            onKeyPress={submit}
          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <Link to="/input-history">Goto History Page</Link>
      </Col>
    </Row>
  );
}
