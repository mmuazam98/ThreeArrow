import React, { useEffect } from "react";
import Container from "./Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Body = () => {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  );
};

export default Body;
