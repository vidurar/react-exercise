
export const UPDATE_SELECTED_LESSONS_REQUEST = 'UPDATE_SELECTED_LESSONS_REQUEST'

export const UPDATE_SELECTED_LESSONS_SUCCESS = 'UPDATE_SELECTED_LESSONS_SUCCESS'

export const updateSelectedLessonsRequest = data => {
  return {
    type: UPDATE_SELECTED_LESSONS_REQUEST
  }
}

export const updateSelectedLessonsSuccess = data => {
  return {
    type: UPDATE_SELECTED_LESSONS_SUCCESS,
    data: data
  }
}

// fake an async request to API here:
