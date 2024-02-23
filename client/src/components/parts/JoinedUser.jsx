import React, { useEffect, useState } from "react";
import { Manager } from "../pages";
import SessionList from "./SessionList";
import Api, { endpoints } from "../../configs/Api";

const JoinedUser = () => {
  const [listData, setListData] = useState(null);
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
      <SessionList listData={listData} />
    </Manager>
  );
};

export default JoinedUser;
