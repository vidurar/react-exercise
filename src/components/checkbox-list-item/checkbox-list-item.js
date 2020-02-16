import React from "react";
import PropTypes from "prop-types";
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

CheckboxListItem.displayName = "LessonsList";
CheckboxListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckboxListItem;
