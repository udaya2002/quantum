import React from "react";
import navlogo from "./Zeus-LMS-logo.svg";
import logo from "./logo.svg";

export default function Nav(){
    return(
        <header>
            <nav className="nav">
                 <img src={navlogo} alt="logo" className="nav-logo"/>
                 <img src={logo}></img>


            </nav>
        </header>
    )

}