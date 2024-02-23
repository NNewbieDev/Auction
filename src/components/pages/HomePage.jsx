import React, { useEffect, useState } from "react";
import styles from "../../style/layout/layout.module.scss";
import { faHome, faClock } from "@fortawesome/free-solid-svg-icons";
import { Navigation, SearchBar, SessionList, Slider } from "../parts";
import Api, { endpoints } from "../../configs/Api";

const HomePage = () => {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    const load = async () => {
      const res = await Api.get(endpoints["posts"]);
      const json = res.data;
      setListData(json);
    };
    load();
  }, []);
  if (listData === null) {
    <div className="">Loading</div>;
  }
  return (
    <div>
      <div className="flex">
        <Navigation listNav={[]} />
        <div className="layout_80">
          <Slider listData={listData} />
          <SearchBar />
          <SessionList listData={listData} setListData={setListData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
