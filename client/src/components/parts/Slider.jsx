import React, { useEffect, useRef, useState } from "react";
import styles from "../../style/parts/slider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { generalData } from "../../fakeData";
import { Link } from "react-router-dom";

const Slider = (props) => {
  const [position, setPosition] = useState(0);
  const timeChecker = useRef();
  useEffect(() => {
    timeChecker.current = setInterval(nextPos, 5000);
    return () => {
      clearInterval(timeChecker.current);
    };
  }, []);

  const nextPos = () => {
    setPosition((prev) => {
      if (prev < 2) {
        return ++prev;
      } else {
        return 0;
      }
    });
  };

  const prevPos = () => {
    setPosition((prev) => {
      if (prev < 1) {
        return generalData.length - 1;
      } else return --prev;
    });
  };

  const formatTime = (time) => {
    const datetime = new Date(time);
    const date = datetime.getDate();
    const month = datetime.getMonth() + 1;
    const year = datetime.getFullYear();
    return `${date}/${month}/${year}`;
  };

  if (props.listData === null) {
    return <div className="">Loading...</div>;
  }
  return (
    <div className={`${styles.block_slider}`}>
      <div className={styles.screen}>
        <div className={styles.screen_item}>
          <img src={props.listData[position].image} alt="" />
          <div className={styles.screen_item_date}>
            {formatTime(props.listData[position].startDate)}
          </div>
          <div className={styles.screen_item_subject}>
            {props.listData[position].title}
          </div>
          <Link to={`/detail/?id=${props.listData[position].id}`}>
            <div className={styles.screen_item_detail}>Xem chi tiết phiên</div>
          </Link>
        </div>
      </div>
      <div className={`${styles.btn_prev}`} onClick={prevPos}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div className={`${styles.btn_next}`} onClick={nextPos}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Slider;
