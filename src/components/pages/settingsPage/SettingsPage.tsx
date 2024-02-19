import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { S } from "./_styles";

type SettingsPageProps = {
  minValue: number;
  maxValue: number;

  setCount: (count: number) => void;

  setMinValue: (minValue: number) => void;
  setMaxValue: (maxValue: number) => void;

  setSettings: (settings: boolean) => void;
};

export const SettingsPage: React.FC<SettingsPageProps> = ({
  setSettings,
  minValue,
  maxValue,
  setMaxValue,
  setMinValue,
  setCount,
}) => {
  const onSetClickHandler = () => setSettings(false);
  const onMinValueChangeHandler = (value: number) => {
    setMinValue(value);
    setCount(value);
  };

  const errorMessage =
    minValue === maxValue
      ? "Values can't be equal!"
      : minValue >= maxValue
        ? "Min value can't be more than max value!"
        : minValue < 0
          ? "Min value can't be negative!"
          : "";

  const maxErrorCondition = minValue === maxValue || minValue >= maxValue;

  const setDisableCondition =
    minValue >= maxValue || minValue === maxValue || minValue < 0;

  return (
    <S.Settings>
      <S.InputsWrapper>
        <Input
          error={maxErrorCondition}
          onChange={setMaxValue}
          value={maxValue}
        />
        <Input
          error={errorMessage}
          onChange={onMinValueChangeHandler}
          value={minValue}
        />
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.InputsWrapper>
      <Button disabled={setDisableCondition} onClick={onSetClickHandler}>
        Set
      </Button>
    </S.Settings>
  );
};
