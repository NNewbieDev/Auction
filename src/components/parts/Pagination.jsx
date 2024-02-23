import React, { useEffect, useRef, useState, memo } from "react";
import styles from "../../style/parts/paginate.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
  const [arr, setArr] = useState([]);
  const amount = Math.ceil(props.data.length / props.itemPerPage);
  const enterPage = useRef();
  useEffect(() => {
    for (let i = 0; i < amount; i++) {
      setArr((prev) => [...prev, i]);
    }
  }, [amount]);

  const nextIndex = () => {
    props.onHandle((prev) => {
      if (prev < amount - 1) {
        return ++prev;
      } else {
        return 0;
      }
    });
  };

  const prevIndex = () => {
    props.onHandle((prev) => {
      if (prev === 0) {
        return amount - 1;
      } else {
        return --prev;
      }
    });
  };

  return (
    <div>
      <div className={styles.index}>
        <div className={styles.index_prev} onClick={prevIndex}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        {arr.map((item, index) => {
          return (
            <div
              className={styles.index_page}
              key={index}
              onClick={() =>
                props.onHandle(() => {
                  console.log(index);
                  return index;
                })
              }
            >
              <div className="">{item + 1}</div>
            </div>
          );
        })}
        <div className={styles.index_next} onClick={nextIndex}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className={styles.enter_page}>
        <label htmlFor="enter_page">Trang</label>
        <input ref={enterPage} type="text" id="enter_page" />
        <div
          className=""
          onClick={() => {
            props.onHandle(enterPage.current.value - 1);
          }}
        >
          Ok
        </div>
      </div>
    </div>
  );
};

export default memo(Pagination);
