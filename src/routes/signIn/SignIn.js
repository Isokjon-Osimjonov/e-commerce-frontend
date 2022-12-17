import React from "react";
import "./SignIn.css";
import ShoppingImg from "../../assets/images/shopping.png";

function SignIn() {
  return (
    <div className="signIn--main--container">
      <img className="signin--img" src={ShoppingImg} alt="" />

      <div className="right--container">
        <h1 className="signup--title"> Sign In</h1>
        <p className="signup--description">
          Hey! There please sign in to continue with...
        </p>
        <div className="signin--data--collectin--container">
          <input
            className="input"
            type="text"
            required
            placeholder="Elektron pochta"
          />

          <input
            className="input"
            type="password"
            required
            placeholder="Xafsizlik paroli"
          />

          <button type="submit" className="add_btn">
            Sign In
          </button>

          <p className="signin--page--question">
            Do not have an account yet plaese
            <a className="link" href="/signup">
              Sign up.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
