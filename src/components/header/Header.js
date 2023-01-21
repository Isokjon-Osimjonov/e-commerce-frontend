import React, { useState } from "react";
import "./Heaedr.css";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
// import { FiSearch } from "react-icons/fi";
// import { TiTimes } from "react-icons/ti";
function Header() {
  // const [search, setSearch] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="header--main--container">
        <div className="header--logo">
          <h1>LOGO</h1>
        </div>
        <div className="header--components">
          <div className="header--search">
            <input type="text" placeholder="Search" />
            <i>
              <BiSearch className="search--icon" />
            </i>
          </div>
          <Link to="/signup">
            <FiShoppingCart className="cart--icon" />
          </Link>
          <div className="user--info">
            <Link to="/me">
              <HiOutlineUserCircle className="user--icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
