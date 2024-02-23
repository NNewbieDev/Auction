import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../style/parts/infoUser.module.scss";
import CustomInput from "./CustomInput";
import {
  faCheck,
  faUser,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

const DropDownBox = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.info_user}>{props.userInfo}</div>
      <div className={styles.box_info}>{props.info}</div>
      <div
        className={styles.box_icon}
        onClick={() => setActive((prev) => !prev)}
      >
        {active ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </div>
      {active && (
        <div className={styles.box_drop_down}>
          <CustomInput
            type={"text"}
            placeholder={props.newInfo}
            icon={props.icon}
          />
          <div className="">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownBox;
