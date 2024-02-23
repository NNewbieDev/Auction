import React from "react";
import styles from "../../style/parts/search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className={`${styles.search}`}>
      <div className={`${styles.search_input}`}>
        <input type="text" name="" id="" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={`${styles.search_icon}`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
