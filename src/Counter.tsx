import React, { useState } from "react";
import styled from "styled-components";
import { CounterPage } from "./components/pages/CounterPage";

function Counter() {
  const [count, setCount] = useState(0);
  const [settings, setSettings] = useState(false);

  return (
    <StyledCounter>
      <Container>
        {!settings && (
          <CounterPage
            count={count}
            setCount={setCount}
            setSettings={setSettings}
          />
        )}
      </Container>
    </StyledCounter>
  );
}

export default Counter;

const StyledCounter = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;
