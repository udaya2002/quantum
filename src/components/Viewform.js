import React from "react";
import Upload from "../images/Upload_black_24dp.svg";
export default function Form(){
    return(
        <div className="form">
            <p>Time Slots & Preferences</p><br/><br/>
            <label className="form-label">Select a Time Slot:</label><br/><br/>
            <div className="selection">
                <input type="radio" className="radio"></input>
                <label className="selection--discription">9:00 AM to 11:00 AM</label>
            </div><br/>
            <div className="selection">
                <input type="radio" className="radio"></input>
                <label className="selection--discription">1:00 PM to 3:00 PM</label>
            </div><br/>
            <hr/><br/>
            <label className="form-label">Select Your Preference:</label><br/><br/>
            <div className="selection">
                <input type="checkbox" className="radio"></input>
                <label className="selection--discription">Instructional Designer</label>
            </div><br/>
            <div className="selection">
                <input type="checkbox" className="radio"></input>
                <label className="selection--discription">Software Engineer</label>
            </div><br/>
            <div className="selection">
                <input type="checkbox" className="radio"></input>
                <label className="selection--discription">Software Quality Engineer</label>
            </div><br/>
            <hr/>
            <br/>
            <div className="upload">
                <img src={Upload} alt="upload"></img>
                <p className="resume">UPLOAD UPDATED RESUME</p>
            </div>
        </div>
    )
}