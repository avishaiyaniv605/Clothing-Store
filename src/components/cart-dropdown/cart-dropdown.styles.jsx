import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  font-weight: lighter;
  overflow: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
  font-size: 1vw;
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  letter-spacing: 1.3px;
  font-size: 18px;
  margin: 50px 0;
  align-self: center;
`;

export const CartItemsContainer = styled.div`
  height: 330px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;
