import React, { useState } from "react";
import styled from "styled-components";
import { CounterPage } from "./components/pages/counterPage/CounterPage";
import { SettingsPage } from "./components/pages/settingsPage/SettingsPage";

function Counter() {
  const [settings, setSettings] = useState(false);
  const [maxValue, setMaxValue] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [count, setCount] = useState(minValue);

  const setSettingsHandler = (settings: boolean) => setSettings(settings);
  const setCountHandler = (count: number) => setCount(count);
  const setMaxValueHandler = (maxValue: number) => setMaxValue(maxValue);
  const setMinValueHandler = (minValue: number) => setMinValue(minValue);

  return (
    <StyledCounter>
      <Container>
        {settings ? (
          <SettingsPage
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValueHandler}
            setMaxValue={setMaxValueHandler}
            setSettings={setSettingsHandler}
            setCount={setCountHandler}
          />
        ) : (
          <CounterPage
            count={count}
            setCount={setCountHandler}
            setSettings={setSettingsHandler}
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
