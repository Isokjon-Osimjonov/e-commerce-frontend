import React, { useState } from "react";
import "./SignUp.css";
import api from "../../auth/api";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPpasswordConfirm] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    await api
      .post("users/signup", {
        name,
        email,
        phoneNumber,
        password,
        passwordConfirm,
        // name: name,
        // email: email,
        // phoneNumber: phoneNumber,
        // password: password,
        // passwordConfirm: passwordConfirm,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signUp--main--container">
      {/* <img className="signup--img" src={ShoppingImg} alt="" /> */}

      <div className="right--container">
        <h1 className="signup--title"> Sign Up</h1>
        <p className="signup--description">
          Hey! There please sign up to join to...
        </p>

        <form className="signup--data--collectin--container">
          <input
            className="input"
            type="text"
            required
            placeholder="Ism "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input"
            type="email"
            required
            placeholder="Elektron pochta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="number"
            required
            placeholder="Tel: +998-00-000-00-00"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            className="input"
            type="password"
            required
            placeholder="Xafsizlik paroli"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="input"
            type="password"
            required
            placeholder="Parolni qayta kiriting"
            value={passwordConfirm}
            onChange={(e) => setPpasswordConfirm(e.target.value)}
          />

          <button type="submit" className="add_btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
        <p className="signup--page--question">
          {" "}
          If you have an account please
          <a className="link" href="/signin">
            Sign In.
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUp;
