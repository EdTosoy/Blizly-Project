import React from "react";

import CategoriesFigure from "./CategoriesFigure";
import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import "./Home.scss";
import SampleShowcase from "./SampleShowcase";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <NewArrivals />
      <CategoriesFigure />
      <SampleShowcase />
    </div>
  );
}
