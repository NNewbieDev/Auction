import React from "react";
import { Navigation } from "../parts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faCircleArrowUp,
  faCircleUp,
  faCoins,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../style/parts/manager.module.scss";
import { generalData } from "../../fakeData";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const navManager = [
  {
    label: "Trang Chủ",
    path: "/",
    icon: faHome,
  },
  {
    label: "Tài Khoản",
    path: "/account/info/",
    icon: faUser,
  },
  {
    label: "Đăng bài",
    path: "/account/create-post/",
    icon: faCircleUp,
  },
];

const navManagerAd = [
  {
    label: "Trang Chủ",
    path: "/",
    icon: faHome,
  },
  {
    label: "Tài Khoản",
    path: "/account/info/",
    icon: faUser,
  },
  {
    label: "Đăng bài",
    path: "/account/create-post/",
    icon: faCircleUp,
  },
  {
    label: "Quản lý",
    path: "/account/manage/",
    icon: faBarsProgress,
  },
];
const listFeature = [
  { label: "Thông tin", path: "/account/info/" },
  { label: "Các phiên đã tham gia", path: "/account/auction-joined/" },
  { label: "Các vài viết", path: "/account/post/" },
];

export const BlockUser = ({ user }) => {
  return (
    <div className={styles.block_user}>
      <div className={styles.user_avatar}>
        <img src={user.avatar} alt="" />
      </div>
      <div className={styles.info_system}>
        <div className="">
          <div className="">Tên người dùng: {user.username}</div>
          <div className="">
            Số tiền trên hệ thống: 0
            <span>
              <FontAwesomeIcon icon={faCoins} />
            </span>
          </div>
        </div>
        <div className="">
          <div className="">Vai trò: {user.roleId.name}</div>
          <div className="">Số lần đấu giá thành công: 0</div>
        </div>
      </div>
    </div>
  );
};

const Manager = ({ children }) => {
  const { checked, setChecked } = useStateContext();
  const { user } = useStateContext();
  return (
    <div className={styles.manager}>
      <Navigation
        listNav={user.roleId.name === "ADMIN" ? navManagerAd : navManager}
      />
      <div className={styles.manager_block}>
        <BlockUser user={user} />
        {/* feature */}
        <div className={styles.features}>
          {listFeature.map((item, index) => {
            return (
              <div key={index} onClick={() => setChecked(index)}>
                <input
                  type="radio"
                  checked={index === checked && true}
                  name="feature"
                  onChange={() => {}}
                  id={`feature${index}`}
                />

                <Link className={styles.features_item} to={item.path}>
                  <label htmlFor={`feature${index}`}>
                    <div>{item.label}</div>
                  </label>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.info}>{children}</div>
      </div>
    </div>
  );
};

export default Manager;
