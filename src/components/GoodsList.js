import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsList({ goods }) {
  return (
    <div className="goods-list">
      {goods.map((product, index) => (
        <GoodsCard key={index} {...product} />
      ))}
    </div>
  );
}

export default GoodsList;