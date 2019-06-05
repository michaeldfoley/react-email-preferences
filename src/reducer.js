export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_UNSUBSCRIBE":
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.unsubscribes.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        unsubscribes: [...state.unsubscribes, action.payload]
      };
    case "REMOVE_UNSUBSCRIBE":
      return {
        ...state,
        unsubscribes: state.unsubscribes.filter(t => t !== action.payload)
      };
    case "UPDATE_UNSUBSCRIBEALL":
      if (typeof action.payload !== "boolean") {
        return state;
      }
      return {
        ...state,
        unsubscribe_all: action.payload
      };
    case "UPDATE_EMAIL":
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
}
