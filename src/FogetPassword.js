import React from "react";
import { useHistory } from "react-router-dom";

export function FogetPassword() {
  const history = useHistory();
  return (
    <div className="Router-Page">
      <div className="text-center">
        <h2>Forgot Your Password?</h2>
        <p>
          We get it, stuff happens. Just enter your email address below and
          we'll send you a link to reset your password
        </p>
      </div>
      <form className="user">
        <div className=" text-center">
          <input
            type="email"
            className="input-tag"
            placeholder="Enter Email Address..."
          />
        </div>

        <div className="text-center ">
          <button className="form-button nav-color">Reset Password</button>
        </div>
      </form>
      <hr />

      <div className="text-center">
        <a
          className="nav-link"
          onClick={() => {
            history.push("/Register");
          }}
        >
          Create an Account!
        </a>
      </div>
      <div className="text-center">
        <a
          className="nav-link"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login-Page!
        </a>
      </div>
    </div>
  );
}
