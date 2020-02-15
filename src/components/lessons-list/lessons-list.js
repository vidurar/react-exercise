import React, { useState } from "react";
import CheckboxListItem from "../checkbox-list-item";
import { connect } from "react-redux";
import { arraysAreEqual } from "../../utils";
import { updateSelectedLessons } from "../../redux/actions";
import styles from "./lessons-list.module.css";

const LessonsList = ({
  lessons,
  updateSelectedLessons,
  savedSelectedLessonIds,
  isLoading
}) => {
  const [selectedLessonIds, setSelectedLessonIds] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Lessons List:</div>
      {lessons.map(({ name, id }) => {
        const isChecked = selectedLessonIds.includes(String(id));
        return (
          <div key={id}>
            <CheckboxListItem
              id={id}
              name={name}
              isDisabled={isLoading}
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
          isLoading ||
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
    isLoading: state.selectedLessons.isLoading,
    savedSelectedLessonIds: state.selectedLessons.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedLessons: lessonIds =>
      dispatch(updateSelectedLessons(lessonIds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonsList);
