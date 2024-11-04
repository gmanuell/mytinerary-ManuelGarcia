import { createAction } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const removeFromCart = createAction("REMOVE_FROM_CART")
const clearCart = createAction("CLEAR_CART")


export { addToCart, removeFromCart, clearCart }