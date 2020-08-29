import React from "react";

import "./ShoppingCart.scss";

export default function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-content">
        <div className="cart-items">
          <h2>Your Cart</h2>
          <div className="cart-center">
            <h2>There's no item in this Cart</h2>
            <p>Try to login your account.</p>
          </div>
        </div>
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          <div className="row">
            <input type="text" placeholder="Shop Voucher" />
            <button>Submit</button>
          </div>
          <div className="row">
            <p>Quantity : 0 items</p>
            <p>Total : $0 </p>
          </div>
          <button className="btn-primary">
            <a href="/auth">Proceed to Payment</a>
          </button>
        </div>
      </div>
    </div>
  );
}
