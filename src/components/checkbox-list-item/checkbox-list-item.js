import React from "react";
import styles from "./checkbox-list-item.module.css";

const CheckboxListItem = ({ id, name, isChecked, onChange, isDisabled }) => {
  return (
    <div
      className={styles["checkbox-container"]}
      data-testid="checkbox-list-item"
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
        onChange={onChange}
      />
      <label className={styles["checkbox-label"]}>{name}</label>
    </div>
  );
};

export default CheckboxListItem;
