'use client'
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    totalQuantity: localStorage.getItem("totalQuantity")
      ? JSON.parse(localStorage.getItem("totalQuantity"))
      : 0,
    totalPrice: localStorage.getItem("totalPrice")
      ? JSON.parse(localStorage.getItem("totalPrice"))
      : 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log("payload: ", action.payload);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.itemTotalPrice += existingItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          quantity: 1,
          price: newItem.price,
          itemTotalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    removeItemFromCart: (state, action) => {
      state.changed = true;
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.itemTotalPrice -= existingItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
