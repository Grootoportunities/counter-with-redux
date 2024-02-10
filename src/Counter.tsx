import React, { useState } from "react";
import styled from "styled-components";
import { CounterPage } from "./components/pages/CounterPage";
import { SettingsPage } from "./components/pages/SettingsPage";

function Counter() {
  const [settings, setSettings] = useState(false);
  const [maxValue, setMaxValue] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [count, setCount] = useState(minValue);

  return (
    <StyledCounter>
      <Container>
        {settings ? (
          <SettingsPage
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            setSettings={setSettings}
            setCount={setCount}
          />
        ) : (
          <CounterPage
            count={count}
            setCount={setCount}
            setSettings={setSettings}
            minValue={minValue}
            maxValue={maxValue}
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
