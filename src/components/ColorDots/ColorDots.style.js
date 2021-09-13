import styled from "styled-components";

export const ColorDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color && props.color};
  margin: 5px;
  cursor: pointer;
`;
