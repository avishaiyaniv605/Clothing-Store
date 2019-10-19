import { createSelector } from "reselect";

const selectUser = state => state.user;
const selectCart = state => state.cart;

export const selectCurrenUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
