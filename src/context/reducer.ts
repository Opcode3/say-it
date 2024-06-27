import { Action, AppState } from './types';


// Define initial state
export const initialState: AppState = {
  modal: false
};

// Define the reducer function
const reducer = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {

    case 'MODAL_TOGGLE':
      return {
        ...state,
        modal: !state.modal
      };
    default:
      return state;
  }
};

export default reducer;
