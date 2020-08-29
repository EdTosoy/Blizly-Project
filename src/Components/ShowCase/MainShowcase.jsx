import React from "react";
import { useParams } from "react-router-dom";
import productdata from "./productdata.json";

import "./MainShowcase.scss";
export default function MainShowcase() {
  let params = useParams();
  const selectedCategory = params.category;
  const productDataOnSelectectedCategory = productdata[selectedCategory];
  return (
    <div className="main-showcase">
      {productDataOnSelectectedCategory.map(({ id, name, url, price }) => (
        <div
          className="card"
          key={id}
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className="product-info">
            <h2>{name}</h2>
            <p>${price}.00</p>
          </div>
        </div>
      ))}
    </div>
  );
}
