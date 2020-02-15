import {
  UPDATE_SELECTED_LESSONS_REQUEST,
  UPDATE_SELECTED_LESSONS_SUCCESS
} from "./updateSelectedLessons.action";

// add code to make reducer work in this file.

const selectedLessons = (
  state = { isLoading: false, data: [], hasBeenSaved: false },
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

export default selectedLessons;
