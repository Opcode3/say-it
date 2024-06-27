import { Action } from "./types";

// Define action creators
const toggleModal = (): Action => {
  return {
    type: "MODAL_TOGGLE",
  };
};

// const decrement = (): Action => {
//   return {
//     type: 'DECREMENT'
//   };
// };

export { toggleModal };
