import React from "react";
import expandL from "./expand_less_black_24dp.svg";
import expandM from "./expand_more.jpg";
export default function ViewMain2(){
    const [isShown1, setIsShown1] = React.useState(false)
    function toggleShown1(){
        setIsShown1(prevShown => !prevShown)
    }
    const [isShown2, setIsShown2] = React.useState(false)
    function toggleShown2(){
        setIsShown2(prevShown => !prevShown)
    }
    const [isShown3, setIsShown3] = React.useState(false)
    function toggleShown3(){
        setIsShown3(prevShown => !prevShown)
    }
    return(
        <div className="job--discriptives">
            <div className="job-discriptive-cards">
                <div className="job-blue">
                    <p>Instructional Designer</p>
                    {isShown1 && <button onClick={toggleShown1} className="view--button">
                                    <img src={expandL} alt="expand" className="expand"></img>
                                </button>}
                    {!isShown1 && <button onClick={toggleShown1} className="view--button">
                                    <img src={expandM} alt="expand" className="expand"></img>
                                </button>}
                </div>
                <br/>
                <br/>
                {isShown1 &&
                <div className="description">
                    <p>this</p> 
                </div>}
            </div>

            {/* ----next job role discription-----*/}
            <div className="job-discriptive-cards">
                <div className="job-blue">
                    <p>Software Engineer</p>
                    {isShown2 && <button onClick={toggleShown2} className="view--button">
                                    <img src={expandL} alt="expand" className="expand"></img>
                                </button>}
                    {!isShown2 && <button onClick={toggleShown2} className="view--button">
                                    <img src={expandM} alt="expand" className="expand"></img>
                                </button>}
                </div>
                <br/>
                <br/>
                {isShown2 &&
                <div className="description">
                    <label className="label">Gross Compensation Package:</label><br/><br/>
                    <p>Rs. 5,00,000 lpa</p><br/>
                    <hr/><br/>
                    <label>Role Description:</label><br/><br/>
                    <p>-Generate highly interactive and innovative istructional strategies for e-learning solutions</p><br/>
                    <p>-Develop course structure and learning specifications addressing the requirements ofthe target audience</p><br/>
                    <p>-Construct appropriate testing strategies to ensure learners' understanding and performance</p><br/>
                    <p>-Address usability issues</p><br/>
                    <p>-Keep abreast of new trends in e-learning</p><br/>
                    <p>-Ensure that the instructinal strategies are as per global standards</p><br/>
                    <p>-Prepare instructional strategies are as per global standards</p><br/>
                    <p>-Check for quality assurance</p><br/>
                    <hr/><br/>
                    <label className="label">Requirements:</label><br/>
                    <p>-Experience in creating instructional plans and course maps.</p><br/>
                    <p>-Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction</p><br/>
                    <p>-Awareness of different instructional design models and familiarity with instructional and learning theories</p><br/>
                    <p>-Awareness of latest trends in e-learning and instructional design</p><br/>
                    <p>-Strong client consulting/interfacing skills.</p><br/>
                    <p>-Ability to guide clients to focus on specifics objectives and teaching points</p><br/>
                    <p>-Strong meeting facilitation, presentation and interpersonal skills</p><br/>
                    <p>-A thorough understanding of the web as an instructional medium</p><br/>
                    <p>-Post graduate degree in Education, Instructional Design, Mass Communication or Journalism</p><br/>
                </div>}
            </div>
            {/* ----next job role discription-----*/}
            <div className="job-discriptive-cards">
                <div className="job-blue">
                    <p>Software Quality Engineer</p>
                    {isShown3 && <button onClick={toggleShown3} className="view--button">
                                    <img src={expandL} alt="expand" className="expand"></img>
                                </button>}
                    {!isShown3 && <button onClick={toggleShown3} className="view--button">
                                    <img src={expandM} alt="expand" className="expand"></img>
                                </button>}
                </div>
                <br/>
                <br/>
                {isShown3 &&
                <div className="description">
                    <p>this</p>
                </div>}
            </div>
        </div>
    )
}