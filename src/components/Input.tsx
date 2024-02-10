import React, { ChangeEvent } from "react";
import styled from "styled-components";

type InputProps = {
  value: number;

  onChange: (value: number) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(Number(e.currentTarget.value));

  return (
    <>
      <StyledInput value={value} type={"number"} onChange={onChangeHandler} />
      {}
    </>
  );
};

const StyledInput = styled.input`
  padding: 8px 0;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 3px black;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;
`;
