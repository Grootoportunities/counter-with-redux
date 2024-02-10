import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
}) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
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
