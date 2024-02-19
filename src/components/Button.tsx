import React from "react";
import { S } from "./_styles";

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
  <S.Button disabled={disabled} onClick={onClick}>
    {children}
  </S.Button>
);
