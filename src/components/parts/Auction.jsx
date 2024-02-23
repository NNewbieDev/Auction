import React, { useState } from "react";
import styles from "../../style/parts/auction.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { generalData } from "../../fakeData";
import { useStateContext } from "../../context/ContextProvider";
const Auction = ({ data, id, onClose }) => {
  const [currentProd, setCurrentProd] = useState(0);
  const { user } = useStateContext();

  return (
    <div className={styles.auction}>
      <div className={styles.auction_board}>
        <div className={styles.auction_close}>
          <div
            className=""
            onClick={() =>
              onClose((prev) => {
                console.log(prev);
                return { state: false };
              })
            }
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className={styles.auction_item}>
          <div className={styles.item_image}>
            <div className="">
              <img src={data[currentProd].imageUrl} alt="" />
            </div>
            <div className="">{data[currentProd].name}</div>
          </div>
          <div className="">
            <div className={styles.item_function}>
              <div className={styles.display_bid}>
                <div className="">
                  <div className="">Mức giá của các người dùng</div>
                  <div className="">
                    <div className="">Thời gian còn lại</div>
                    <div className="">02:00:00</div>
                  </div>
                </div>
                <div className=""></div>
              </div>
              <div className={styles.user_bid}>
                <div className={styles.user}>
                  <div className={styles.user_avatar}>
                    <img src={user.avatar} alt="" />
                  </div>
                  <div className="">{user.username}</div>
                </div>
                <div className="">
                  <input type="text" placeholder="Mức giá bạn muốn..." />
                </div>
                <div className="">Đặt giá</div>
              </div>
            </div>
            <div className={styles.current_bid}>
              <div className="">Mức giá hiện tại:</div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className={styles.auction_list_item}>
          {data.map((item, index) => {
            return (
              <>
                <input
                  key={index}
                  onChange={() => {
                    setCurrentProd(() => {
                      return index;
                    });
                  }}
                  checked={index === currentProd}
                  type="radio"
                  name="prod-id"
                  id={`${index}`}
                />
                <label htmlFor={`${index}`}>
                  <div className={styles.list_item}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                </label>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Auction;
