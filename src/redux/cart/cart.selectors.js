import { createSelector } from "reselect";

// Input selector
const selectCart = state => state.cart;

// Output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Output selector
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// Output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity
    , 0)
);

// Output selector
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.price
      , 0)
);