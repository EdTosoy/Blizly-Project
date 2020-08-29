import React from "react";

import ShowCase from "../../Components/ShowCase/ShowCase";
import Hero from "../Home/Hero";
import "./Shopping.scss";
export default function Shopping() {
  return (
    <div className="shopping">
      <Hero />
      <ShowCase />
    </div>
  );
}
