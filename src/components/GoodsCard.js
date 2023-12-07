import React from "react";
import Image from "./Image"

function GoodsCard({ title, image, price }) {
  return (
    <div className="container">
      <div className="goods-card">
        <div className="goods-img">
          <Image imageUrl={image} imageAlt={title} />
        </div>
        <div className="goods-content">
          <h2>{title}</h2>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;