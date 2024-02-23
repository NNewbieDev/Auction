import React, { useState } from "react";
import Manager from "../pages/Manager";
import DropDownBox from "./DropDownBox";
import styles from "../../style/parts/infoUser.module.scss";
import {
  faEnvelope,
  faLocationDot,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../../context/ContextProvider";

const InfoUser = () => {
  const { user } = useStateContext();
  return (
    <Manager>
      <div className={styles.info}>
        <DropDownBox
          info={"Tên người dùng"}
          icon={faUser}
          newInfo={"Tên người dùng mới..."}
          userInfo={user.username}
        />
        <DropDownBox
          info={"Mật khẩu"}
          icon={faLock}
          userInfo={"***********"}
          newInfo={"Mật khẩu mới..."}
        />
        <DropDownBox
          info={"Địa chỉ"}
          userInfo={user.address !== null ? user.address : "Chưa có thông tin"}
          icon={faLocationDot}
          newInfo={"Địa chỉ mới..."}
        />
        <DropDownBox
          info={"Email"}
          icon={faEnvelope}
          userInfo={user.email !== null ? user.email : "Chưa có thông tin"}
          newInfo={"Email mới..."}
        />
        <DropDownBox
          info={"Số điện thoại"}
          icon={faPhone}
          userInfo={user.phone !== null ? user.phone : "Chưa có thông tin"}
          newInfo={"Số điện thoại mới..."}
        />
      </div>
    </Manager>
  );
};

export default InfoUser;
