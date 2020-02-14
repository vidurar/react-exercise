import {
  UPDATE_SELECTED_LESSONS_REQUEST,
  UPDATE_SELECTED_LESSONS_SUCCESS
} from "./updateSelectedLessons.action";

// add code to make reducer work in this file.

const selectedLessons = (
  state = { isFetching: false, values: [], hasBeenSaved: false },
  action
) => {
  switch (action.type) {
    case UPDATE_SELECTED_LESSONS_REQUEST:
      return { ...state, isFetching: true };
    case UPDATE_SELECTED_LESSONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        values: action.data
      };
    default:
      return state;
  }
};

export default selectedLessons;
