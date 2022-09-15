import React from "react";
import expandL from "../images/expand_less_black_24dp.svg";
import expandM from "../images/expand_more.jpg";
import instructionaldesigner from "../images/Instructional Designer.svg";
import softwareengineer from "../images/Software Engineer.svg";
import softwareQualityEngineer from "../images/Software Quality Engineer.svg";
import location from "../images/location_on_black_24dp.svg";
export default function ViewMain(props){
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return(
        
        <div className="card-page2">
            <div className="heading--apply">
            <h3 className="heading--1">{props.title}</h3>
            <div className="button-span2">
                <button type="button" className="applybutton">APPLY</button>
            </div>
            </div>
            <p className="page2-label">Date & Time:</p>
            <div className="card-datetime-and-location">
                <p className="page2-dates">{props.dates}</p>
                <p className="line">|</p>
                    <img className="location-logo" src={location} alt="location-image"></img>
                <p className="label">{props.location}</p>
            </div>
            
            <p className="page2-label">Job Roles:</p>
            <div className="job-roles">
                <div className="job-icon-and-role"> 
                    {props.role1 &&
                    <img className="job-icon-img-page2" src={instructionaldesigner} alt="instructional designer"></img>}
                    <p className="page2-role">{props.role1}</p>                
                </div>
                <div className="job-icon-and-role">
                    {props.role2 &&
                    <img className="job-icon-img-page2" src={softwareengineer} alt="software engineer"></img>}
                    <p className="page2-role">{props.role2}</p>
                </div>
                <div className="job-icon-and-role">
                    {props.role3 &&
                    <img className="job-icon-img-page2" src={softwareQualityEngineer} alt="software Quality Engineer"></img>}
                    <p className="page2-role">{props.role3}</p>
                </div>              
            </div>
            <div className="blue">
                <p>Pre-requisites & Application process</p>
                <div className="vertical"></div>
                {isShown && <button onClick={toggleShown} className="view--button">
                    <img src={expandL} alt="expand" className="expand"></img>
                </button>}
                {!isShown && <button onClick={toggleShown} className="view--button">
                    <img src={expandM} alt="expand" className="expand"></img>
                </button>}
            </div>
            {isShown &&
            <div className="description">
            <label className="label">General Instructions:</label><br/><br/>
            <p>-We have a two-year indemnity for permanent candidate. We will provide training to the selected candidates.</p><br/>
            <p>-Candidates who have appeared fro any test held by Zeus Learning in the past 12 months will not be allowed to appear fro this recruitment test.</p><br/>
             <hr/><br/>
            <label className="label">Instructions for the Exam:</label><br/><br/>
            <p>-Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera.</p><br/>
            <p>By taking this test, you are permitting the examination system to capture your video for invigilation purposes.</p><br/>
            <p>-Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.</p><br/>
            <p>The web camera of your system must be enabled and must remaain swtiched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void.</p><br/>
            <p>-Candidate's audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.</p><br/>
            <p>-Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam.</p><br/>
            <p>-Candidate cannot use an iOS system/device for this exam.</p><br/>
            <hr/><br/>
            <label className="label">Minimum System Requirements:</label><br/><br/>
            <p>-Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).</p><br/>
            <p>-The latest version of Google Chrome Browser only. </p><br/>
            <p>-Please note that internet speed should be minimum 1 Mbps.</p><br/>
            <p>-Do not use a MacBook or iPad for the proctored exam.</p><br/>
            <hr/><br/>
            <label className="label">Process:</label><br/><br/>
            <p>-Every round is an elimination round. Candidates need to clear all rounds to get selected.</p>
            <br/>
            <br/>
            <p>Round 1: 4th August,2018</p><br/>
            <p>Aptitude Test: 25 Questions</p>
            <br/>
            <br/>
            <p>Round 2 (Interview): 4th August, 2018 </p>  
            </div>  
            }       
        

        
    
             
        </div>
    )
}