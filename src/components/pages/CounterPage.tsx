import React from "react";
import { Button } from "../Button";
import styled from "styled-components";

type CountPageProps = {
  count: number;

  setCount: (count: number) => void;
  setSettings: (settings: boolean) => void;
};

export const CounterPage: React.FC<CountPageProps> = ({
  count,
  setCount,
  setSettings,
}) => {
  const onIncrementClick = () => setCount(count + 1);
  const onResetClick = () => setCount(0);

  const onSetClick = () => setSettings(true);

  return (
    <StyledCountPage>
      <Count>{count}</Count>
      <div>
        <Button onClick={onIncrementClick}>Increment</Button>
        <Button onClick={onResetClick}>Reset</Button>
        <Button onClick={onSetClick}>Set</Button>
      </div>
    </StyledCountPage>
  );
};

const Count = styled.span`
  color: white;

  text-align: center;

  padding: 10px 20px;
  background-color: #ff4275;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 50px;
`;

const StyledCountPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
