// import { cartActions } from "./cart-slice";
// import { uiActions } from "./ui-slice";

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://app-prac-f0ffa-default-rtdb.firebaseio.com/cart.json"
//       );

//       if (!response.ok) {
//         throw Error("Fetching cart data failed!");
//       }

//       const data = response.json();
//       return data;
//     };

//     try {
//       const cartData = await fetchData();
//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantity: cartData.totalQuantity,
//           totalPrice: cartData.totalPrice,
//         })
//       );
//     } catch (error) {
//       uiActions.showNotification({
//         status: "error",
//         title: "Error!",
//         message: "Sending cart data failed!",
//       });
//     }
//   };
// };

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://app-prac-f0ffa-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//             totalPrice: cart.totalPrice,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw Error("Sending data failed!");
//       }
//     };

//     try {
//       await sendRequest();
//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Cart data sent successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed!",
//         })
//       );
//     }
//   };
// };
