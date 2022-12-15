import React from "react";
import "./SignUp.css";
import ShoppingImg from "../../assets/images/shopping.png";
function SignUp() {
  return (
    <div className="signUp--main--container">
      <img className="signup--img" src={ShoppingImg} alt="" />

      <div className="right--container">
        <h1 className="signup--title"> Sign Up</h1>
        <p className="signup--description">
          Hey! There please sign up to join to...
        </p>
        <form className="signup--data--collectin--container">
          <input className="input" type="text" required placeholder="Ism " />

          <input
            className="input"
            type="email"
            required
            placeholder="Elektron pochta"
          />

          <input
            className="input"
            type="number"
            required
            placeholder="Tel: +998-00-000-00-00"
            maxlength="11"
          />

          <input
            className="input"
            type="password"
            required
            placeholder="Xafsizlik paroli"
            minLength="8"
            maxLength="1024"
          />

          <input
            className="input"
            type="password"
            required
            placeholder="Parolni qayta kiriting"
            minLength="8"
            maxLength="1024"
          />

          <button type="submit" className="add_btn">
            Sign Up{" "}
          </button>

          <p className="signup--page--question">
            {" "}
            If you have an account please{" "}
            <a className="link" href="/signin">
              Sign In.
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
