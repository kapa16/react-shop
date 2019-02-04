import {CHOOSE_ITEM, NEXT_ITEM, PREV_ITEM} from "../actions/actionTypes";

const initialState = {
  currentItem: 1
};

function changeItem(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_ITEM:
      return {currentItem: action.payload};
    case NEXT_ITEM:
      return {currentItem: state.currentItem > action.payload - 1 ? 1 : state.currentItem + 1};
    case PREV_ITEM:
      return {currentItem: state.currentItem < 2 ? action.payload : state.currentItem - 1};
    default:
      return state;
  }
}

export default changeItem;