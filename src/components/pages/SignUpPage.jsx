import React, { useRef, useState } from "react";
import { CustomForm, CustomInput, Navigation } from "../parts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faLocation,
  faEnvelope,
  faPhone,
  faHome,
  faImage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../style/parts/signUp.module.scss";
import { useNavigate } from "react-router-dom";
import Api, { endpoints } from "../../configs/Api";

const navForSignUp = [
  {
    icon: faHome,
    label: "Trang Chủ",
    path: "/",
  },
  {
    icon: faUser,
    label: "Đăng Nhập",
    path: "/login/",
  },
];
const SignUpPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    address: "",
    phone: "",
    confirmPassword: "",
  });
  const avatar = useRef();
  const [avatarUrl, setAvatarUrl] = useState("");
  const nav = useNavigate();
  const signUp = (e) => {
    e.preventDefault();

    const process = async () => {
      let form = new FormData();

      for (let field in user) if (field !== "") form.append(field, user[field]);

      form.append("avatar", avatar.current.files[0]);

      let res = await Api.post(endpoints["register"], form);
      if (res.status === 201) {
        nav("/login");
        //         console.log(res.status);
      }
    };
    if (user.password === user.confirmPassword) process();
  };
  const change = (e, field) => {
    setUser((current) => {
      return { ...current, [field]: e.target.value };
    });
  };

  return (
    <div className="flex">
      <Navigation listNav={navForSignUp} />
      <CustomForm submit={signUp} title="Đăng Ký">
        <div className={styles.avatar}>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setAvatarUrl(URL.createObjectURL(e.target.files[0]));
              }
            }}
            ref={avatar}
            type="file"
            name="avatar"
            id="avatar"
          />
          <label htmlFor="avatar">
            <div className={styles.avatar_img}>
              {avatarUrl === "" ? (
                <FontAwesomeIcon icon={faImage} />
              ) : (
                <img src={avatarUrl} alt="Avatar của bạn" />
              )}
            </div>
          </label>
        </div>
        <CustomInput
          value={user.username}
          change={(e) => change(e, "username")}
          icon={faUser}
          placeholder="Tên tài khoản"
          type={"text"}
        />
        <CustomInput
          value={user.password}
          change={(e) => change(e, "password")}
          icon={faLock}
          placeholder="Mật khẩu"
          type={"password"}
        />
        <CustomInput
          value={user.confirmPassword}
          change={(e) => change(e, "confirmPassword")}
          icon={faLock}
          placeholder="Xác nhận mật khẩu"
          type={"password"}
        />
        <CustomInput
          value={user.email}
          change={(e) => change(e, "email")}
          icon={faEnvelope}
          placeholder="Địa chỉ email"
          type={"email"}
        />
        <CustomInput
          value={user.address}
          change={(e) => change(e, "address")}
          icon={faLocationDot}
          placeholder="Địa chỉ nơi sinh sống"
        />
        <CustomInput
          value={user.phone}
          change={(e) => change(e, "phone")}
          icon={faPhone}
          placeholder="Số điện thoại"
        />
        <div className={styles.block_handle}>
          <input
            type="submit"
            className={styles.btn_sign_up}
            value={"Đăng ký"}
          />
        </div>
      </CustomForm>
    </div>
  );
};

export default SignUpPage;
