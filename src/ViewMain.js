import React from "react";
import expand from "./expand_less_black_24dp.svg";
import instructionaldesigner from "./Instructional Designer.svg";
import softwareengineer from "./Software Engineer.svg";
import softwareQualityEngineer from "./Software Quality Engineer.svg";
import location from "./location_on_black_24dp.svg";
export default function ViewMain(props){
    return(

        <div className="card">
            <h3 className="card-heading">{props.title}</h3>
            <p className="label">Date & Time:</p>
            <div className="card-datetime-and-location">
                <p className="dates">{props.dates}</p>
                <p className="line">|</p>
                <img className="location-logo" src={location} alt="location-image"></img>
                <p className="label">{props.location}</p>
            </div>
            
            <p className="label">Job Roles:</p>
            <div className="job-roles">
                <div className="job-icon-and-role"> 
                    {props.role1 &&
                    <img className="job-icon-img" src={instructionaldesigner} alt="instructional designer"></img>}
                    <p className="role">{props.role1}</p>                
                </div>
                <div className="job-icon-and-role">
                    {props.role2 &&
                    <img className="job-icon-img" src={softwareengineer} alt="software engineer"></img>}
                    <p className="role">{props.role2}</p>
                </div>
                <div className="job-icon-and-role">
                    {props.role3 &&
                    <img className="job-icon-img" src={softwareQualityEngineer} alt="software Quality Engineer"></img>}
                    <p className="role">{props.role3}</p>
                </div>              
            </div>
            <div className="blue">
                <p>Pre-requisites & Application process</p>
                <img src={expand} alt="expand" className="expand"></img>
            </div>

        
    {/*<div className="form">
            <form>
                <title>Time Slots & Preferences</title>
                <label className="label">Select a Time Slot:</label>
                <input type="radio">9:00 AM to 11:00 AM</input>
                <input type="radio">1:00 PM to 3:00 PM</input>
                <label className="label">Select Your Preferences:</label>
                <input type="checkbox">Instructional Designer</input>
                <input type="checkbox">Software Engineer</input>
                <input type="checkbox">Software Quality Engineer</input>
            </form>
         </div> */}
        </div>
    )
}