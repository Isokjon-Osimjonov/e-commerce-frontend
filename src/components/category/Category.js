import React from "react";
import "./Category.css";
import { CATEGORY_STATIC } from "../../static/Category_Static";
import { Switch, Route, useRouteMatch, NavLink, Link } from "react-router-dom";
import Header from "../header/Header";
import CarouselBanner from "../carousel/Carousel";
import Footer from "../footer/Footer";
function Category() {
  const { url, path } = useRouteMatch();

  return (
    <div>
      {/* <Header />
      <CarouselBanner /> */}
      <div className="main-category--container">
        {/* {CATEGORY_STATIC?.map((category_item) => (
          <div className="block" key={category_item.id}>
            <img src={category_item.image} alt="" width="90%" />
            <Link to={`${url}/${category_item.route}`}>
              {category_item.title}
            </Link>
          </div>
        ))}
        <Switch>
          {CATEGORY_STATIC?.map((category_item) => (
            <Route
              key={category_item.id}
              path={`${path}/${category_item.route}`}
            >
              {category_item.component}
            </Route>
          ))}
        </Switch> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Category;
