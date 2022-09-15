import React from "react";
import ReactDOM from "react-dom";
import "./components/App";
import "./components/View";
import Page from "./pages";
import "./css/Header.css";
import "./css/card.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Page/>
  </BrowserRouter>
,document.getElementById("root"))
