import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faUser, faLock, faHome } from "@fortawesome/free-solid-svg-icons";
import { CustomInput, CustomForm, Navigation } from "../parts";
import styles from "../../style/parts/signIn.module.scss";
import { Link, useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import Api, { authApi, endpoints } from "../../configs/Api";
import { useStateContext } from "../../context/ContextProvider";

const navForLogin = [
  {
    icon: faHome,
    label: "Trang Chủ",
    path: "/",
  },
  {
    icon: faUser,
    label: "Đăng Ký",
    path: "/sign-up/",
  },
];

const SignInPage = () => {
  const { user, dispatch, setIsLogin } = useStateContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const submit = (e) => {
    e.preventDefault();

    const process = async () => {
      try {
        let res = await Api.post(endpoints["login"], {
          username: username,
          password: password,
        });
        cookie.save("token", res.data);

        let { data } = await authApi().get(endpoints["current-user"]);
        cookie.save("user", data);

        dispatch({
          type: "login",
          payload: data,
        });
        setIsLogin(true);
        nav("/");
      } catch (err) {
        console.error(err);
      }
    };

    process();
  };
  return (
    <div className="flex">
      <Navigation listNav={navForLogin} />
      <CustomForm submit={(e) => submit(e)} title={"Đăng Nhập"}>
        <CustomInput
          change={(e) => {
            setUsername(e.target.value);
          }}
          icon={faUser}
          placeholder={"Tên tài khoản"}
          type={"text"}
          value={username}
        />
        <CustomInput
          change={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          icon={faLock}
          placeholder={"Mật khẩu"}
          type={"password"}
        />
        <div className={styles.block_handle}>
          <Link to={"/sign-up/"}>
            <div className={styles.come_sign_up}>Bạn chưa tạo tài khoản?</div>
          </Link>
          <input
            type="submit"
            className={styles.btn_login}
            value={"Đăng Nhập"}
          />
        </div>
      </CustomForm>
    </div>
  );
};
export default SignInPage;
