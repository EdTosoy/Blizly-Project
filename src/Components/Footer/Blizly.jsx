import React from "react";

export default function Blizly() {
  const links = [
    {
      id: 1,
      name: "About Blizly",
      url: "#",
    },
    {
      id: 2,
      name: "Afﬁliate Program",
      url: "#",
    },
    {
      id: 3,
      name: "Blizly Influencer Program",
      url: "#",
    },
    {
      id: 4,
      name: "Careers",
      url: "#",
    },
    {
      id: 5,
      name: "Terms & Conditions",
      url: "#",
    },
    {
      id: 6,
      name: "Privacy Policy",
      url: "#",
    },
    {
      id: 7,
      name: "Press & Media",
      url: "#",
    },
    {
      id: 8,
      name: "Campaign Terms & Conditions",
      url: "#",
    },
    {
      id: 9,
      name: "Intellectual Property Protection",
      url: "#",
    },
  ];
  return (
    <ul className="blizly">
      <h2>Learn More</h2>
      {links.map(({ id, name, url }) => (
        <li key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
