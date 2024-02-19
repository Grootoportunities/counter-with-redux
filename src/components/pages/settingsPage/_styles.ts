import styled from "styled-components";

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Error = styled.span`
  text-align: center;
  color: red;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
`;

export const S = { Settings, InputsWrapper, Error };
