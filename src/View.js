import React from "react";
import Header from "./Header";
import "./Header.css";
import "./card.css";
import ViewMain from "./ViewMain";
import ViewMain2 from "./ViewMain2";
import ViewMainData from "./ViewMainData";
export default function View(){
    const cardelements=ViewMainData.map(item =>{
        return(
          <ViewMain
            key={item.id}
            title={item.title}
            dates={item.dates}
            location={item.location}
            role1={item.role1}
            role2={item.role2}
            role3={item.role3}
            daysleft={item.daysleft}
            internship={item.internship}
            />
        )
      })
    return(
        <div>
        <Header/>
        <div className="Main">
            {cardelements}</div>
        <ViewMain2/>      
        </div>
    )
}