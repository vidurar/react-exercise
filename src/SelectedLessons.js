import React, { useState } from "react";
import CheckboxListItem from "./CheckboxListItem";
import { connect } from "react-redux";
import { updateSelectedLessons } from "./updateSelectedLessons.action";
import styles from "./SelectedLessons.module.css";

// in practice would normally use lodash.isEqual
// but want to avoid adding libraries in this circumstance
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let referenceObj = {};

  for (let entry of arr1) {
    referenceObj[entry]
      ? (referenceObj[entry] += 1)
      : (referenceObj[entry] = 1);
  }

  for (let entry of arr2) {
    if (referenceObj[entry]) referenceObj[entry] -= 1;
    else if (!referenceObj[entry]) return false;
  }

  return true;
};

const SelectedLessonsComponent = ({
  lessons,
  updateSelectedLessons,
  savedSelectedLessonIds,
  isFetching
}) => {
  const [selectedLessonIds, setSelectedLessonIds] = useState([]);
  console.log("STYLES", styles);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Lessons List:</div>
      {lessons.map(({ name, id }) => {
        const isChecked = selectedLessonIds.includes(String(id));
        return (
          <div>
            <CheckboxListItem
              id={id}
              name={name}
              isDisabled={isFetching}
              isChecked={isChecked}
              onChange={({ target: { value } }) => {
                if (isChecked) {
                  return setSelectedLessonIds(
                    selectedLessonIds.filter(id => id !== value)
                  );
                }
                return setSelectedLessonIds([...selectedLessonIds, value]);
              }}
            />
          </div>
        );
      })}
      <button
        className={styles.button}
        disabled={
          isFetching ||
          !selectedLessonIds.length ||
          arraysAreEqual(selectedLessonIds, savedSelectedLessonIds)
        }
        onClick={() => updateSelectedLessons(selectedLessonIds)}
      >
        Submit
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lessons: state.allLessons,
    isFetching: state.selectedLessons.isFetching,
    savedSelectedLessonIds: state.selectedLessons.values
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedLessons: lessonIds =>
      dispatch(updateSelectedLessons(lessonIds))
  };
};

const SelectedLessons = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedLessonsComponent);

export default SelectedLessons;
