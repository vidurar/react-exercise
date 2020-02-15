import {
  UPDATE_SELECTED_LESSONS_REQUEST,
  UPDATE_SELECTED_LESSONS_SUCCESS
} from "./constants";
import { combineReducers } from "redux";
import lessonItems from "../fixtures/all-lessons";

export const selectedLessons = (
  state = { isLoading: false, data: [] },
  action
) => {
  switch (action.type) {
    case UPDATE_SELECTED_LESSONS_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_SELECTED_LESSONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    default:
      return state;
  }
};

const allLessons = (state = lessonItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const appReducers = combineReducers({
  allLessons: allLessons,
  selectedLessons
});

export default appReducers;
