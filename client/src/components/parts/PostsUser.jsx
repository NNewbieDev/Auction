import React, { useEffect, useState } from "react";
import { Manager } from "../pages";
import SessionList from "./SessionList";
import Api, { endpoints } from "../../configs/Api";
import { useStateContext } from "../../context/ContextProvider";

const PostsUser = () => {
  const [listData, setListData] = useState(null);
  const { user } = useStateContext();
  useEffect(() => {
    const load = async () => {
      const res = await Api.get(endpoints["posts"]);
      const json = res.data;
      setListData(json);
    };
    load();
  }, []);
  return (
    <Manager>
      <SessionList
        listData={
          listData === null
            ? []
            : listData.filter((item) => item.userId.id === user.id)
        }
      />
    </Manager>
  );
};

export default PostsUser;
