import { createSelector } from "reselect";

const sumOfItemsReducer = (acc, currItem) => acc + currItem.quantity;
const sumOfPricesReducer = (acc, currItem) =>
  acc + currItem.price * currItem.quantity;

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(sumOfItemsReducer, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(sumOfPricesReducer, 0)
);
