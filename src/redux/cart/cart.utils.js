export const addItemToCart = (cartItems, cartItemToAdd) => {
  // find() will return the 1st item it finds
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // map() returns a new array, in order to return new state
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}