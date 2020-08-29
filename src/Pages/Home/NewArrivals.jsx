import React from "react";

import "./NewArrivals.scss";

export default function NewArrivals() {
  return (
    <div className="new-arrivals">
      <h2>New Arrive Items</h2>
      <div className="cards-container">
        <div className="card">
          <a href="/shopping/shoes">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blizly-22554.appspot.com/o/shoes%2F20.jpg?alt=media&token=2fe8a616-a03c-41e9-a73e-c78ca08bcff8"
              alt="new Arrive item"
            />
          </a>
        </div>
        <div className="card">
          <a href="/shopping/shoes">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blizly-22554.appspot.com/o/shoes%2F14.jpg?alt=media&token=7e2bfb5c-982f-4887-9484-ca29754046a3"
              alt="new Arrive item"
            />
          </a>
        </div>
        <div className="card">
          <a href="/shopping/shoes">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blizly-22554.appspot.com/o/shoes%2F18.jpg?alt=media&token=9f11aa64-4a62-4983-a3ce-6188aa7aa708"
              alt="new Arrive item"
            />
          </a>
        </div>
        <div className="card">
          <a href="/shopping/watches">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blizly-22554.appspot.com/o/watches%2F5.jpg?alt=media&token=91c5ecc9-f4d4-42f9-87e9-704fe5ba75cb"
              alt="new Arrive item"
            />
          </a>
        </div>
        <div className="card">
          <a href="/shopping/bags">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blizly-22554.appspot.com/o/bags%2F7.jpg?alt=media&token=a0e6233c-d7c3-4476-8a6c-3d7402f61a15"
              alt="new Arrive item"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
