import {CHOOSE_ITEM, NEXT_ITEM, PREV_ITEM} from "./actionTypes";

export const nextItem = (maxItemNumber) => {
  return {
    type: NEXT_ITEM,
    payload: maxItemNumber
  }
};

export const prevItem = (maxItemNumber) => {
  return {
    type: PREV_ITEM,
    payload: maxItemNumber
  }
};

export const chooseItem = (maxItemNumber) => {
  return {
    type: CHOOSE_ITEM,
    payload: maxItemNumber
  }
};
