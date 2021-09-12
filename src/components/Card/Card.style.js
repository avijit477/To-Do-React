import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 180px;
  width: 180px;
  background-color: ${(props) => props.item && props.item.color};
  border-radius: 10px;
  margin: 8px;
  padding: 20px;
  position: relative;
`;

export const CardInput = styled.textarea`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  display: inline-block;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.item && props.item.color};
  color: black;
  font-weight: lighter;
  letter-spacing: 1.1px;
  pointer-events: ${(props) => (props.item.editState ? "none" : "visible")};
`;

export const BookMarkIcon = styled.div`
  position: absolute;
  font-size: 18px;
  top: 8px;
  right: 8px;
  color: ${(props) => (props.item.bookmarked ? "gold" : "white")};
  cursor: pointer;
`;

export const EditIcon = styled.div`
  position: absolute;
  font-size: 19px;
  right: 10px;
  bottom: 10px;
  color: black;
  cursor: pointer;
`;
