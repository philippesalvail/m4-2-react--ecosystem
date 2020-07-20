import React from "react";
import styling from "styled-components";
import styled from "styled-components";

function About(props) {
  return (
    <div>
      <CategoryTitle>
        Fruit emporium is founded on a very simple principle:{" "}
        <strong>Fruit is good.</strong>
      </CategoryTitle>
      <CategorySubTitle>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </CategorySubTitle>
    </div>
  );
}

const CategoryTitle = styled.div`
  font-family: Sans-serif;
  font-size: 1.25em;
`;

const CategorySubTitle = styled(CategoryTitle)`
  margin-top: 3%;
`;

export default About;
