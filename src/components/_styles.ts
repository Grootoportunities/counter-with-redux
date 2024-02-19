import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 10px;
  margin: 0 10px;

  background-color: #ff4275;
  color: white;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;

  border-radius: 5px;
  border: none;

  box-shadow: 0 0 10px #d33660;

  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background-color: #ff0046;
  }

  &:active {
    transform: translateY(-3px);
    transition: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Input = styled.input<{ error: string | boolean }>`
  padding: 8px 0;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 3px black;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;

  ${(props) =>
    props.error &&
    css<{ error: string | boolean }>`
      border: 1px solid red;
      box-shadow: 0 0 3px red;
    `}
`;

export const S = { Button, Input };
