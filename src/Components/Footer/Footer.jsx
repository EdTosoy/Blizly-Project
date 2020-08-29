import React from "react";

import "./Footer.scss";
import CustomerCare from "./CustomerCare";
import Blizly from "./Blizly";
import Payment from "./Payment";
import Delivery from "./Delivery";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <CustomerCare />
        <Blizly />
        <Payment />
        <Delivery />
      </div>
    </footer>
  );
}
