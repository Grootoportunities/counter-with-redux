import React from "react";
import { Button } from "../../Button";
import { S } from "./_styles";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import { CounterStateType } from "../../../redux/reducers/counterReducer";

type CountPageProps = {
  setCount: (count: number) => void;
  setSettings: (settings: boolean) => void;
};

export const CounterPage: React.FC<CountPageProps> = ({
  setCount,
  setSettings,
}) => {
  const values = useSelector<RootStateType, CounterStateType>(
    (state) => state.counter,
  );

  const onIncrementClick = () => setCount(values.count + 1);
  const onResetClick = () => setCount(values.minValue);

  const onSetClick = () => setSettings(true);

  const maximunValueCondition = values.count === values.maxValue;
  const resetDisableCondition = values.count === values.minValue;

  return (
    <S.CountPage>
      <S.Count maximum={maximunValueCondition}>{values.count}</S.Count>
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
