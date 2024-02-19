import React from "react";
import { Button } from "../../Button";
import { S } from "./_styles";

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
    <S.CountPage>
      <S.Count maximum={maximunValueCondition}>{count}</S.Count>
      <div>
        <Button disabled={maximunValueCondition} onClick={onIncrementClick}>
          Increment
        </Button>
        <Button disabled={resetDisableCondition} onClick={onResetClick}>
          Reset
        </Button>
        <Button onClick={onSetClick}>Set</Button>
      </div>
    </S.CountPage>
  );
};
