import React from "react";

import one from "./delivery logo/1.png";
import two from "./delivery logo/2.png";
import three from "./delivery logo/3.png";
import four from "./delivery logo/4.png";
import five from "./delivery logo/6.png";
import six from "./delivery logo/7.png";

export default function Delivery() {
  const deliveryLogos = [
    {
      id: 1,
      logo: one,
      url: "https://tracker.lel.asia/",
    },
    {
      id: 2,
      logo: two,
      url: "https://www.entrego.com/",
    },
    {
      id: 3,
      logo: three,
      url: "https://www.xde.com",
    },
    {
      id: 4,
      logo: four,
      url: "https://www.ninjavan.co/",
    },
    {
      id: 5,
      logo: five,
      url: "https://www.jrmtexpress.com/",
    },
    {
      id: 6,
      logo: six,
      url: "https://www.quadx.xyz/",
    },
  ];
  return (
    <div className="delivery">
      <h2>Delivery Services</h2>
      <div className="logos">
        {deliveryLogos.map(({ id, logo, url }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="logo" />
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
