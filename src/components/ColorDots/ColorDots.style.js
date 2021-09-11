import styled, { css } from "styled-components";

export const ColorDot = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color && props.color};
`;
