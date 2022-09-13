import React from "react";
import ReactDOM from "react-dom";
import "./App";
import "./View";
import Page from "./pages";
import "./Header.css";
import "./card.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Page/>
  </BrowserRouter>
,document.getElementById("root"))
