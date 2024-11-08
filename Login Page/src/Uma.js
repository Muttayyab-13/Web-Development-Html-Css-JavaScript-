import React, { useState } from "react";
import "./Uma.css";
import pass from "./backpack-fill.svg";
import user from "./person.svg";
import username from "./person-circle.svg";
import { Link } from "react-router-dom";

function Uma() {
  const [action, setAction] = useState("Sign Up");

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={username} alt="" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input">
            <img src={pass} alt="" />
            <input type="Password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            <span>
              <Link to="/forgot-pass">Click here !</Link>
            </span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submitgray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>

          <div
            className={action === "Login" ? "submitgray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
}
export default Uma;
