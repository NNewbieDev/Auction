import React, { useEffect, useRef, useState } from "react";
import styles from "../../style/parts/manager.module.scss";
import { BlockUser } from "../pages/Manager";
import Navigation from "./Navigation";
import {
  faCircleUp,
  faHome,
  faUser,
  faPlus,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Api, { endpoints } from "../../configs/Api";
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
const CreatePost = () => {
  const [review, setReview] = useState("");
  const [cate, setCate] = useState();

  const { user } = useStateContext();
  const [active, setActive] = useState(false);
  const [post, setPost] = useState({
    title: "",
    content: "",
    startDate: "",
    username: user.username,
  });
  const image = useRef();

  useEffect(() => {
    const load = async () => {
      const res = await Api.get(endpoints["cate"]);
      setCate(res.data);
    };
    load();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const process = async () => {
      let form = new FormData();
      for (let field in post) if (field !== "") form.append(field, post[field]);

      form.append("image", image.current.files[0]);
      let res = await Api.post(endpoints["createPost"], form);
      console.log(res.status);
    };
    process();
  };

  const change = (e, field) => {
    setPost((current) => {
      return { ...current, [field]: e.target.value };
    });
  };
  if (cate === undefined) {
    <div className="">Loading...</div>;
  } else {
    return (
      <div className="flex">
        <Navigation
          listNav={user.roleId.name === "ADMIN" ? navManagerAd : navManager}
        />
        <div className={styles.manager_block}>
          <BlockUser user={user} />
          <form
            onSubmit={(e) => {
              submit(e);
            }}
            className={styles.create}
          >
            <h2>Bài viết của bạn</h2>
            <div className={styles.create_title}>
              <label htmlFor="title">Tiêu đề bài viết</label>
              <input
                onChange={(e) => change(e, "title")}
                type="text"
                id="title"
                name="title"
                required
              />
            </div>
            <div className={styles.create_content}>
              <label htmlFor="content">Nội dung bài viết</label>
              <textarea
                onChange={(e) => change(e, "content")}
                type="text"
                id="content"
                name="content"
              />
            </div>
            <div className={styles.create_date}>
              <label htmlFor="date">Nội dung bài viết</label>
              <input
                onChange={(e) => {
                  change(e, "startDate");
                }}
                type="datetime-local"
                name="date"
                id="date"
              />
            </div>
            <div className={styles.create_image}>
              <label htmlFor="image_post">Hình ảnh kèm theo</label>
              <input
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setReview(URL.createObjectURL(e.target.files[0]));
                  }
                }}
                ref={image}
                type="file"
                id="image_post"
                name="image-post"
              />
              <div className="">
                <img src={review} alt="Hình ảnh cho bài viết" />
              </div>
            </div>
            <h2>Sản phẩm</h2>
            <div onClick={() => setActive(true)} className={styles.create_prod}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className=""></div>
            <div className={styles.create_post}>
              <input type="submit" value={"Tạo"} />
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default CreatePost;
