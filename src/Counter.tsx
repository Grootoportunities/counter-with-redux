import React from "react";
import styled from "styled-components";
import { CounterPage } from "./components/pages/counterPage/CounterPage";
import { SettingsPage } from "./components/pages/settingsPage/SettingsPage";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountAC,
  setMaxValueAC,
  setMinValueAC,
} from "./redux/reducers/counterReducer";
import { RootStateType } from "./redux/store";
import { setSettingsAC } from "./redux/reducers/settingsReducer";

function Counter() {
  const isSettings = useSelector<RootStateType, boolean>(
    (state) => state.settings.settings,
  );
  const dispatch = useDispatch();

  const setCountHandler = (count: number) => dispatch(setCountAC(count));
  const setSettingsHandler = (settings: boolean) =>
    dispatch(setSettingsAC(settings));
  const setMaxValueHandler = (maxValue: number) =>
    dispatch(setMaxValueAC(maxValue));
  const setMinValueHandler = (minValue: number) =>
    dispatch(setMinValueAC(minValue));

  return (
    <StyledCounter>
      <Container>
        {isSettings ? (
          <SettingsPage
            setMinValue={setMinValueHandler}
            setMaxValue={setMaxValueHandler}
            setSettings={setSettingsHandler}
            setCount={setCountHandler}
          />
        ) : (
          <CounterPage
            setCount={setCountHandler}
            setSettings={setSettingsHandler}
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
