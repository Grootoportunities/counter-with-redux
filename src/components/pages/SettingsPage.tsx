import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input";

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
  const [error, setError] = useState<string | null>("");

  const onSetClickHandler = () => setSettings(false);
  const onMinValueChangeHandler = (value: number) => {
    setMinValue(value);
    setCount(value);
  };

  // const errorCondition =

  const setDisableCondition =
    minValue >= maxValue || maxValue <= minValue || minValue < 0;

  return (
    <StyledSettings>
      <InputsWrapper>
        <Input onChange={setMaxValue} value={maxValue} />
        <Input onChange={onMinValueChangeHandler} value={minValue} />
      </InputsWrapper>
      <Button disabled={setDisableCondition} onClick={onSetClickHandler}>
        Set
      </Button>
    </StyledSettings>
  );
};

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
