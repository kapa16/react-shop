
const initialState = {
  hasError: false
};

function hasError(state = initialState, action) {
  switch (action.type) {
    case 'error':
      return true;
    default:
      return state;
  }
}