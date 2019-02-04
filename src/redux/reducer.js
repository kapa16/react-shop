
const initialState = {
  currentItem: 1
};

function changeItem(state = initialState, action) {
  let currentItem;
  switch (action.type) {
    case 'NEXT_ITEM':
      currentItem = state.currentItem + 1;
      break;
    case 'PREV_ITEM':
      currentItem = state.currentItem - 1;
      break;
    default:
      return state;

  if (currentItem < 1) {

  }
  }
}

export default changeItem;