import React from "react";

export default function CustomerCare() {
  const links = [
    {
      id: 1,
      name: "Help Center",
      url: "#",
    },
    {
      id: 2,
      name: "How to Buy",
      url: "#",
    },
    {
      id: 3,
      name: "Shipping & Delivery",
      url: "#",
    },
    {
      id: 4,
      name: "International Product Policy",
      url: "#",
    },
    {
      id: 5,
      name: "How to Return",
      url: "#",
    },
    {
      id: 6,
      name: "FAQ",
      url: "#",
    },
  ];
  return (
    <ul className="customer-care">
      <h2>Customer Care</h2>
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
