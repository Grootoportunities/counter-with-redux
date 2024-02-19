import React, { ChangeEvent } from "react";
import { S } from "./_styles";

type InputProps = {
  value: number;
  error: string | boolean;
  onChange: (value: number) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange, error }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(Number(e.currentTarget.value));

  return (
    <S.Input
      error={error}
      value={value}
      type={"number"}
      onChange={onChangeHandler}
    />
  );
};
