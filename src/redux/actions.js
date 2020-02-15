import {
  UPDATE_SELECTED_LESSONS_REQUEST,
  UPDATE_SELECTED_LESSONS_SUCCESS
} from "./constants";

export const updateSelectedLessonsRequest = data => {
  return {
    type: UPDATE_SELECTED_LESSONS_REQUEST
  };
};

export const updateSelectedLessonsSuccess = data => {
  return {
    type: UPDATE_SELECTED_LESSONS_SUCCESS,
    data: data
  };
};

export function updateSelectedLessons(data) {
  return async function(dispatch) {
    dispatch(updateSelectedLessonsRequest(data));
    try {
      const response = await fetch("https://admin.circusstreet.com/fake", {
        method: "POST",
        body: data
      });

      // dummy logic of what would be done in the case of a succesful request
      const results = response.json();
      dispatch(updateSelectedLessonsSuccess(results));
    } catch {
      setTimeout(function() {
        dispatch(updateSelectedLessonsSuccess(data));
        alert("Successfully saved selected lessons!");
      }, 2000);
    }
  };
}
