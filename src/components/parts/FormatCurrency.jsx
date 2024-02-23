import React, { useEffect } from "react";

const FormatCurrency = ({ money }) => {
  const format = (money) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "VND",
    }).format(money);
  };
  return <div>{format(money)}</div>;
};

export default FormatCurrency;
