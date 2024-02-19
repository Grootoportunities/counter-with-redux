import styled, { css } from "styled-components";

const Count = styled.span<{ maximum: boolean }>`
  color: white;

  text-align: center;

  padding: 10px 20px;
  background-color: #ff4275;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 50px;

  ${(props) =>
    props.maximum &&
    css<{ maximum: boolean }>`
      color: black;
    `}
`;

const CountPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const S = { Count, CountPage };
