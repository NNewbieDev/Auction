import React, { useEffect, useState } from "react";
import styles from "../../style/parts/listSession.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faCalendar,
  faStore,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { generalData } from "../../fakeData";
import Pagination from "./Pagination";
import Auction from "./Auction";
import Api, { endpoints } from "../../configs/Api";
const SessionList = (props) => {
  const itemPerPage = 30;
  const [auction, setAuction] = useState({ state: false, id: null });
  const [indexPaginate, setIndexPaginate] = useState(0);

  if (props.listData === null) {
    return <div className="">Loading...</div>;
  }

  const formateTimeStamp = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1.
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
      day +
      "/" +
      month +
      "/" +
      year +
      "/ " +
      "Vào lúc " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  };

  if (props.listData.length === 0) {
    return <div className="">Chưa có thông tin</div>;
  } else {
    return (
      <div className={`${styles.block_list}`}>
        {props.listData
          .slice(
            indexPaginate * itemPerPage,
            indexPaginate * itemPerPage + itemPerPage
          )
          .map((item, index) => {
            return (
              <div key={index} className={styles.block_list_item}>
                <div className={styles.block_item_image}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.block_item_info}>
                  {/* Text */}
                  <div className={styles.item_info}>
                    <div className={styles.item_text}>
                      <div className={styles.item_subject}>{item.title}</div>
                      <div className="">
                        <div>
                          <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <div>{formateTimeStamp(item.startDate)}</div>
                      </div>
                      <div className="">
                        <div>
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div> {item.userId.username}</div>
                      </div>
                      <div className="">{item.content}</div>
                    </div>
                    {/* Reactions */}
                    <div className={styles.item_react}>
                      <div className="">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={styles.icon_react}
                        />
                        {/* <span className="">{item.favorites}</span> */}
                      </div>
                      <div className="">
                        <FontAwesomeIcon
                          icon={faComment}
                          className={styles.icon_react}
                        />
                        <span className=""></span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/detail/?id=${item.id}`}>
                    <div className={styles.btn_detail}>Chi tiết</div>
                  </Link>
                </div>
              </div>
            );
          })}
        {auction.state && <Auction id={auction.id} onClose={setAuction} />}
        <Pagination
          data={props.listData}
          onHandle={setIndexPaginate}
          itemPerPage={itemPerPage}
        />
      </div>
    );
  }
};

export default SessionList;
