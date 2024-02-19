import React from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { S } from "./_styles";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../redux/store";
import { CounterStateType } from "../../../redux/reducers/counterReducer";

type SettingsPageProps = {
  setCount: (count: number) => void;
  setMinValue: (minValue: number) => void;
  setMaxValue: (maxValue: number) => void;
  setSettings: (settings: boolean) => void;
};

export const SettingsPage: React.FC<SettingsPageProps> = ({
  setSettings,
  setMaxValue,
  setMinValue,
  setCount,
}) => {
  const values = useSelector<RootStateType, CounterStateType>(
    (state) => state.counter,
  );

  const onSetClickHandler = () => setSettings(false);
  const onMinValueChangeHandler = (value: number) => {
    setMinValue(value);
    setCount(value);
  };

  const errorMessage =
    values.minValue === values.maxValue
      ? "Values can't be equal!"
      : values.minValue >= values.maxValue
        ? "Min value can't be more than max value!"
        : values.minValue < 0
          ? "Min value can't be negative!"
          : "";

  const maxErrorCondition =
    values.minValue === values.maxValue || values.minValue >= values.maxValue;

  const setDisableCondition =
    values.minValue >= values.maxValue ||
    values.minValue === values.maxValue ||
    values.minValue < 0;

  return (
    <S.Settings>
      <S.InputsWrapper>
        <Input
          error={maxErrorCondition}
          onChange={setMaxValue}
          value={values.maxValue}
        />
        <Input
          error={errorMessage}
          onChange={onMinValueChangeHandler}
          value={values.minValue}
        />
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.InputsWrapper>
      <Button disabled={setDisableCondition} onClick={onSetClickHandler}>
        Set
      </Button>
    </S.Settings>
  );
};
