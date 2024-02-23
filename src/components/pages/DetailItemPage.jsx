import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Auction, CustomInput, FormatCurrency, Navigation } from "../parts";
import {
  faHome,
  faFlag,
  faThumbsUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { generalData } from "../../fakeData";
import styles from "../../style/parts/detailItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Api, { endpoints } from "../../configs/Api";
import { useStateContext } from "../../context/ContextProvider";
const listDetailItemNav = [{ icon: faHome, label: "Trang Chủ", path: "/" }];

const DetailItemPage = () => {
  const [params] = useSearchParams();
  const [auction, setAuction] = useState({ state: false, id: null });
  const [listData, setListData] = useState(null);
  const [currentProd, setCurrentProd] = useState(0);
  const [message, setMessage] = useState();
  const [comment, setComment] = useState({
    message: "",
    productID: "",
  });
  const { fakeListComment, setFakeListComment, user } = useStateContext();
  useEffect(() => {
    let id = params.get("id");
    const load = async () => {
      const { data } = await Api.get(endpoints["details"](id));
      setListData(data);
    };
    load();
  }, []);

  const change = (e) => {
    setMessage(e.target.value);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1.
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (
      day + "/" + month + "/" + year + "/ " + " - " + hours + ":" + minutes
    );
  };

  if (listData === null) {
    return <div className="">Loading...</div>;
  } else {
    console.log(listData);
    return (
      <div className="flex">
        <Navigation listNav={listDetailItemNav} />
        <div className="flex layout_80">
          <div className={styles.item}>
            <h2 className="">Phiên: {listData[currentProd].postId.title}</h2>
            <div className={styles.item_img}>
              <div className="">
                <img src={listData[currentProd].imageUrl} alt="" />
              </div>
              <div className="">
                <img src={listData[currentProd].imageUrl} alt="" />
              </div>
            </div>
            <div className={styles.item_reaction}>
              <div className="">
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>
              <div className="">
                <FontAwesomeIcon icon={faFlag} />
              </div>
            </div>
            <div className={styles.item_shop}>
              <div className={styles.item_shop_avatar}>
                <img
                  src={
                    listData[currentProd].postId.userId.avatarUrl === null
                      ? "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      : listData[currentProd].postId.userId.avatarUrl
                  }
                  alt=""
                />
              </div>
              <div className={styles.item_shop_seller}>
                <div className={styles.item_shop_name}>
                  {listData[currentProd].postId.userId.username}
                </div>
              </div>
            </div>
            <div className={styles.item_descript}>
              <h3>Tên Sản Phẩm</h3>
              <div className=""> {listData[currentProd].name} </div>
              <h3>Mô Tả</h3>
              <div className="">{listData[currentProd].description}</div>
            </div>
            <div className={styles.item_comment}>
              <div className={styles.item_comment_avatar}>
                <img src={user.avatar} alt="avatar" />
              </div>
              <div className="">
                <CustomInput
                  change={change}
                  type={"text"}
                  placeholder={"Viết bình luận..."}
                  icon={""}
                  value={message}
                />
              </div>
              <button type="submit" className="" onClick={() => setComment()}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
            {/* display comment */}
            <div className="">
              {fakeListComment.map((item, index) => {
                return (
                  <div className={styles.comment_list} key={index}>
                    <div className="">
                      <div className={styles.user_comment_avatar}>
                        <img src={user.avatar} alt="avatar" />
                      </div>
                      <div className="">{user.username}</div>
                    </div>
                    <div className="">{item}</div>
                    <div className="">
                      <div className="">
                        <FontAwesomeIcon icon={faThumbsUp} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <h2 className="">Các sản phẩm khác trong phiên</h2>
            <div className={styles.item_relative}>
              {listData.map((item, index) => {
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
          <div className={styles.block_bid}>
            <div className="">
              <div className="">Thời gian bắt đầu</div>
              <div className="">
                {formatTime(listData[currentProd].postId.startDate)}
              </div>
            </div>
            <div className="">
              <div className="">Giá hiện tại</div>
              <FormatCurrency money={listData[currentProd].price} />
            </div>
            <div
              className=""
              onClick={() =>
                setAuction((prev) => {
                  console.log(prev);
                  return { state: true, id: currentProd };
                })
              }
            >
              Vào đấu giá
            </div>
          </div>
        </div>
        {auction.state && (
          <Auction data={listData} id={auction.id} onClose={setAuction} />
        )}
      </div>
    );
  }
};

export default DetailItemPage;
