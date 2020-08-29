import React from "react";

import visa from "./payment logo/Visa.png";
import paypal from "./payment logo/Paypal.png";
import mastercard from "./payment logo/Mastercard.png";
import americanExpress from "./payment logo/American-express.png";
import westernUnion from "./payment logo/Western-union.png";

export default function Payment() {
  const paymentLogos = [
    {
      id: 1,
      logo: visa,
      url: "https://www.visa.com.ph/",
    },
    {
      id: 2,
      logo: paypal,
      url: "https://www.paypal.com/",
    },
    {
      id: 3,
      logo: mastercard,
      url: "https://www.mastercard.us/en-us.html",
    },
    {
      id: 4,
      logo: americanExpress,
      url: "https://www.americanexpress.com/",
    },
    {
      id: 5,
      logo: westernUnion,
      url: "https://www.westernunion.com/ph/en/home.html",
    },
  ];
  return (
    <div className="payment">
      <h2>Payment Methods</h2>
      <div className="logos">
        {paymentLogos.map(({ id, logo, url }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="card" />
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
