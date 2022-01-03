import "./App.css";
import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { FogetPassword } from "./FogetPassword";
import { Page404 } from "./Page404";
import { Colors } from "./Colors";
import { Border } from "./Border";
import { Button } from "./Button";
import { Cards } from "./Cards";
import { Dashboard } from "./Dashboard";
import { Tabledata } from "./Tabledata";

export default function App() {
  return (
    <div className="Main-Container">
      {<Sidebar />}
      
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/buttons">
            <Button />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/colors">
            <Colors />
          </Route>
          <Route path="/Borders">
            <Border />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/Register">
            <RegisterPage />
          </Route>
          <Route path="/password">
            <FogetPassword />
          </Route>
          <Route path="/404">
            <Page404 />
          </Route>
          <Route path="/BlankPage">
            <BlankPage />
          </Route>
          <Route path="/charts">
            <Charts/>
          </Route>
          <Route path="/Table">
            <Tabledata/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Sidebar() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const history = useHistory();

  return (
    <div>
      <div className="side-bar-container">
        <button
          className="side-bar-btn"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Dashboard
        </button>

        <p className="side-bar-sub">INTERFACE</p>

        <button className="side-bar-btn" onClick={() => setShow(!show)}>
          Components {show ? "🔼" : "🔽"}
        </button>

        {show ? (
          <div className="comp-container">
            <p className="side-bar-sub">CUSTOM-COMPONENT:</p>
            <button
              className="ins-btn"
              onClick={() => {
                history.push("/buttons");
              }}
            >
              Buttons
            </button>
            <button
              className="ins-btn"
              onClick={() => {
                history.push("/cards");
              }}
            >
              Cards
            </button>
          </div>
        ) : (
          ""
        )}

        <button className="side-bar-btn" onClick={() => setShow1(!show1)}>
          Utilities {show1 ? "🔼" : "🔽"}
        </button>
        {show1 ? (
          <div className="comp-container">
            <p className="side-bar-sub">CUSTOM-UTILITIES:</p>
            <button
              className="ins-btn"
              onClick={() => {
                history.push("/colors");
              }}
            >
              Colors
            </button>
            <button
              className="ins-btn"
              onClick={() => {
                history.push("/Borders");
              }}
            >
              Borders
            </button>
          </div>
        ) : (
          ""
        )}
        <p className="side-bar-sub">ADDONS</p>
        <button className="side-bar-btn" onClick={() => setShow2(!show2)}>
          Pages {show2 ? "🔼" : "🔽"}
        </button>
        {show2 ? (
          <div className="comp-container">
            <p className="side-bar-sub">LOGIN-SCREENS:</p>

            <button
              className="ins-btn"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </button>

            <button
              className="ins-btn"
              onClick={() => {
                history.push("/Register");
              }}
            >
              Register
            </button>
            <button
              className="ins-btn"
              onClick={() => {
                history.push("/Password");
              }}
            >
              Forget Password
            </button>
            <button
              className="ins-btn"
              onClick={() => {
                history.push("/404");
              }}
            >
              404
            </button>
            <button
              className="ins-btn"
              onClick={() => {
                history.push("/Blankpage");
              }}
            >
              Blank Page
            </button>
          </div>
        ) : (
          ""
        )}
        <button
          className="side-bar-btn"
          onClick={() => {
            history.push("/charts");
          }}
        >
          Charts
        </button>

        <button
          className="side-bar-btn"
          onClick={() => {
            history.push("/Table");
          }}
        >
          Tables
        </button>
      </div>
    </div>
  );
}

function BlankPage() {
  return (
    <div className="text-center">
      <h1>Blank page</h1>
    </div>
  );
}


function Charts(){
  return (
    <div className="text-center">
      <h1>Charts</h1>
    </div>
  );
}

