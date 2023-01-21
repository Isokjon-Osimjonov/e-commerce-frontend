import React from "react";
import "./Cart.css";
import Book from "../assets/images/macpro2.jpg";
import { BsCartPlusFill, BsFillStarFill } from "react-icons/bs";
function Cart() {
  return (
    <div className="main--cart--container">
      <p className="cart--sale">20% Sale</p>
      <div className="cart--img">
        <img src={Book} alt="" className="product--img--cart" />
      </div>
      <h1 className="product-name--cart">Book</h1>
      <p className="product-des--cart">
        Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur,
      </p>
      <div className="price__rating">
        <h2 className="product--price">
          <span>UZS</span> 50.000
        </h2>
        <i>
          <BsFillStarFill className="cart--star" />
          5.0
        </i>
      </div>
      <h3 className="product--old--price">
        <span>UZS</span> 80.000
      </h3>
      <div className="buy-product--add-cart">
        <button className="buy--product-btn"> Buy product</button>
        <i>
          <BsCartPlusFill className="add-cart--icon" />
        </i>
      </div>
    </div>
  );
}

export default Cart;
