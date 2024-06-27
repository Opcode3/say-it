export interface AppState {
  modal: boolean;
}

// Define the types of actions that can be dispatched
export type Action = { type: "MODAL_TOGGLE" }
