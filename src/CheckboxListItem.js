import React from "react";
import styles from "./SelectedLessons.module.css";

const CheckboxListItem = ({ id, name, isChecked, onClick, isDisabled }) => {
  return (
    <div
      className={styles["checkbox-container"]}
      data-testid="checkbox-list-item"
      onClick={onClick}
    >
      <input
        data-testid={`checkbox-list-item-input-${id}`}
        checked={isChecked}
        disabled={isDisabled}
        readOnly
        type="checkbox"
        name={name}
        id={id}
        value={id}
      />
      <label className={styles["checkbox-label"]}>{name}</label>
    </div>
  );
};

export default CheckboxListItem;
