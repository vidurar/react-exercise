import React from "react";
import styles from "./SelectedLessons.module.css";

const CheckboxListItem = ({ id, name, isChecked, onChange, isDisabled }) => {
  return (
    <div className={styles["checkbox-container"]}>
      <input
        checked={isChecked}
        disabled={isDisabled}
        type="checkbox"
        name={name}
        value={id}
        onChange={event => onChange(event)}
      />
      <label className={styles["checkbox-label"]} for={name}>
        {name}
      </label>
    </div>
  );
};

export default CheckboxListItem;
