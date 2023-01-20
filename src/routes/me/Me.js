import React from "react";
import "./Me.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function Me() {
  return (
    <div className="me--main--container">
      <Header />
      <div className="me--container">hello world</div>;
      <Footer />
    </div>
  );
}

export default Me;
