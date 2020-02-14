import { combineReducers } from "redux";
import selectedLessons from "./selectedLessons.reducer";
import lessonItems from "./all-lessons";

// all lessons could have come from the API
// for ease, just use fixture data instead:
const allLessons = (state = lessonItems, action) => {
  console.log("ALL LESSONS", lessonItems);
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
