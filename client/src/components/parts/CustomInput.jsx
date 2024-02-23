import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../style/parts/form_global.module.scss";

const CustomInput = (props) => {
  return (
    <div className={styles.form_input}>
      <input
        onChange={(e) => {
          props.change(e);
        }}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value || ""}
      />
      {props.icon !== "" && (
        <div className={styles.form_icon}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
      )}
    </div>
  );
};

export default CustomInput;
