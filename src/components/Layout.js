import React from "react";
import { Container } from "reactstrap";

export default function Layout({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
