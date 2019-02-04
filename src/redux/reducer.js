
const initialState = {
  currentItem: 1
};

function changeItem(state = initialState, action) {
  switch (action.type) {
    case 'NEXT_ITEM':
      return {currentItem: state.currentItem + 1};
    case 'PREV_ITEM':
      return {currentItem: state.currentItem + 1};
    default:
      return state;
  }
}

export default changeItem;