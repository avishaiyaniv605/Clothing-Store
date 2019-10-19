import { cartTypes } from "../../types";

export const toggleCartHidden = () => {
  return {
    type: cartTypes.TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: item
  };
};

export const clearOutItemFromCart = item => {
  return {
    type: cartTypes.CLEAR_OUT_ITEM_FROM_CART,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: cartTypes.REMOVE_ITEM_FROM_CART,
    payload: item
  };
};
