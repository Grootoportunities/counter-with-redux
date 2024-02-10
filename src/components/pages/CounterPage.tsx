import React from "react";
import { Button } from "../Button";
import styled, { css } from "styled-components";

type CountPageProps = {
  count: number;
  minValue: number;
  maxValue: number;

  setCount: (count: number) => void;
  setSettings: (settings: boolean) => void;
};

export const CounterPage: React.FC<CountPageProps> = ({
  count,
  setCount,
  setSettings,
  minValue,
  maxValue,
}) => {
  const onIncrementClick = () => setCount(count + 1);
  const onResetClick = () => setCount(minValue);

  const onSetClick = () => setSettings(true);

  const maximunValueCondition = count === maxValue;
  const resetDisableCondition = count === minValue;

  return (
    <StyledCountPage>
      <Count maximum={maximunValueCondition}>{count}</Count>
      <div>
        <Button disabled={maximunValueCondition} onClick={onIncrementClick}>
          Increment
        </Button>
        <Button disabled={resetDisableCondition} onClick={onResetClick}>
          Reset
        </Button>
        <Button onClick={onSetClick}>Set</Button>
      </div>
    </StyledCountPage>
  );
};

const Count = styled.span<{ maximum: boolean }>`
  color: white;

  text-align: center;

  padding: 10px 20px;
  background-color: #ff4275;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 50px;

  ${(props) =>
    props.maximum &&
    css<{ maximum: boolean }>`
      color: black;
    `}
`;

const StyledCountPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
