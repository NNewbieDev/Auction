import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../style/parts/navigation.module.scss";
import { Link } from "react-router-dom";
import { faBars, faGear } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ listNav }) => {
  const [display, setDisplay] = useState(false);

  const changeColor = (nameClass) => {
    let body = document.body;
    if (body.classList.contains("main_blue")) {
      body.classList.remove("main_blue");
      body.classList.add(nameClass);
    } else if (body.classList.contains("main_green")) {
      body.classList.remove("main_green");
      body.classList.add(nameClass);
    } else {
      body.classList.add(nameClass);
    }
  };

  return (
    <div className={`${styles.nav} layout_20`}>
      {display ? (
        <div className="">
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={`${styles.block_nav}`}>
            <div className="">
              {listNav.map((item, index) => {
                return (
                  <div key={index}>
                    <Link to={item.path} className={`${styles.nav_item} flex`}>
                      <div className="">
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <div className="">{item.label}</div>
                    </Link>
                  </div>
                );
              })}
              <div className={styles.pallete_color}>
                <div
                  onClick={() => changeColor("main_blue")}
                  className={styles.pallete_color_blue}
                ></div>
                <div
                  onClick={() => changeColor("main_green")}
                  className={styles.pallete_color_green}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.block_nav}`}>
          <div className="">
            {listNav.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.path} className={`${styles.nav_item} flex`}>
                    <div className="">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="">{item.label}</div>
                  </Link>
                </div>
              );
            })}
            <div className={styles.pallete_color}>
              <div
                onClick={() => changeColor("main_blue")}
                className={styles.pallete_color_blue}
              ></div>
              <div
                onClick={() => changeColor("main_green")}
                className={styles.pallete_color_green}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
