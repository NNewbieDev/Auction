import React from "react";
import styles from "../../style/parts/form_global.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CustomForm = ({ children, title, submit }) => {
  return (
    <div className="layout_full">
      <div className={styles.title}>{title}</div>
      <form onSubmit={submit} className={styles.form_frame}>
        {children}
      </form>
    </div>
  );
};

export default CustomForm;
