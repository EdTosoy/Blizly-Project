import React from "react";

import "./CopyRight.scss";

export default function CopyRight() {
  const socialAccounts = [
    {
      id: 1,
      name: "facebook",
      url: "#",
    },
    {
      id: 2,
      name: "twitter",
      url: "#",
    },
    {
      id: 3,
      name: "instagram",
      url: "#",
    },
    {
      id: 4,
      name: "tumbler",
      url: "#",
    },
    {
      id: 5,
      name: "pinterst",
      url: "#",
    },
    {
      id: 6,
      name: "reddit",
      url: "#",
    },
  ];
  return (
    <div className="copy-right">
      <div className="copy-right-content">
        <ul className="social">
          {socialAccounts.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <p>&copy;CopyRight 2020 Blizly, all rights reserved.</p>
      </div>
    </div>
  );
}
