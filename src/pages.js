import React from "react";
import { Route,Routes } from "react-router-dom";
import App from "./App";
import View from "./View";
export default function Page(){
    return(
        <Routes>
            <Route  index element={<App/>}/>
            <Route  path="/View" element={<View/>}/>
        </Routes>
    )
}