import React from "react"
import {Row} from "reactstrap"
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
// import Resume from '../assets/Ben Abbott.pdf'
// import Resume from '../components/pdf'
const style = { color: "white", fontSize: "2.5rem" }
function Footer (){
    return(
        
        <>
        
        <Row>
        <div class="footalign">
        <a href="https://drive.google.com/file/d/1Xq2eH-aQgW8J4s60Dywfq1fVFERLkfqB/view?usp=sharing" target="_blank" rel="noreferrer"><h3><strong>Resume</strong></h3></a>
        <a href="mailto:babbott85@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className='envelope' style={style} /></a>
        <a href="https://www.linkedin.com/in/ben-abbott-51394421/" target="_blank" rel="noreferrer" ><FaLinkedin style={style} className="linkedin"/></a>
        </div>
        </Row>
        </>
    )
}
export default Footer