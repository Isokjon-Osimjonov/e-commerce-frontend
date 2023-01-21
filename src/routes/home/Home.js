import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import Category from "../../components/category/Category";

// import Me from "../../routes/me/Me";
// import Cart from "../../cart/Cart";
import { CATEGORY_STATIC } from "../../static/Category_Static";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

function Home() {
  const { path } = useRouteMatch();

  return (
    <div className="home--main--container">
      <Header />
      <Carousel />
      <Category />
      <div className="div">
        <Link to="/books"> Books</Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
