import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "../../style/layout/layout.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const contextUser = [
  { name: "Đăng nhập", icon: faUser, path: "/login/" },
  { name: "Đăng ký", icon: faUser, path: "/sign-up/" },
];

const contextUserLogin = [
  { name: "Quản lý tài khoản", icon: faUser, path: "/account/info/" },
  //   { name: "Đăng xuất", icon: faUser, path: "/" },
];

const Header = () => {
  const [sessionTime, setSessionTime] = useState("");
  const [active, setActive] = useState(false);

  const { isLogin, setIsLogin, dispatch, user } = useStateContext();
  const time = useRef();
  const nav = useNavigate();
  const logout = () => {
    dispatch({
      type: "logout",
    });

    setIsLogin(false);
    nav("/");
  };

  const currentTime = () => {
    let d = new Date();
    let day =
      d.getDay() === 0 ? "Chủ nhật / " : "Thứ " + (d.getDay() + 1) + " / ";
    let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    let seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    let time = day + hour + " : " + minutes + " : " + seconds;

    setSessionTime(time);
  };

  useEffect(() => {
    time.current = setInterval(currentTime, 1000);
    return () => {
      clearInterval(time.current);
    };
  }, [sessionTime]);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };
  const toggleChangeMode = (e) => {
    let body = document.body;
    if (e.target.checked) {
      body.classList.add("dark");
    } else {
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
      }
    }
  };

  return (
    <div className={`${styles.block_header}`}>
      <div className={styles.next_time_session}>
        <div className="">Phiên tiếp theo sẽ diễn ra</div>
        <div className={styles.next_time}>{sessionTime}</div>
      </div>
      <div className="">
        <div className={styles.icon_user}>
          {isLogin ? (
            <div onClick={toggleActive} className={styles.avatar}>
              <img src={user.avatar} alt="" />
            </div>
          ) : (
            <FontAwesomeIcon onClick={toggleActive} icon={faUser} />
          )}
          {active && (
            <div className={styles.context_user}>
              {isLogin ? (
                <>
                  {contextUserLogin.map((item, index) => {
                    return (
                      <Link key={index} to={item.path}>
                        <div className={`${styles.context_item} flex`}>
                          <div className={styles.context_item_icon}>
                            <FontAwesomeIcon icon={item.icon} />
                          </div>
                          <div className={styles.context_item_name}>
                            {item.name}
                          </div>
                        </div>
                      </Link>
                    );
                  })}

                  <div
                    onClick={logout}
                    className={`${styles.context_item} flex`}
                  >
                    <div className={styles.context_item_icon}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={styles.context_item_name}>
                      {"Đăng xuất"}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {contextUser.map((item, index) => {
                    return (
                      <Link key={index} to={item.path}>
                        <div className={`${styles.context_item} flex`}>
                          <div className={styles.context_item_icon}>
                            <FontAwesomeIcon icon={item.icon} />
                          </div>
                          <div className={styles.context_item_name}>
                            {item.name}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </>
              )}
              <div className={styles.switch_mode}>
                <input
                  onChange={(e) => toggleChangeMode(e)}
                  type="checkbox"
                  id="switch"
                ></input>
                <label htmlFor="switch"></label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
