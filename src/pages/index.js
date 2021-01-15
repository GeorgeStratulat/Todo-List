import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import TodoApp from "../components/Todo";

const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
`;

export default function Home() {
  return (
    <StyledContainer>
      <TodoApp />
    </StyledContainer>
  );
}
