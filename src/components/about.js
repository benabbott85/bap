import React from "react"
import Me from "../assets/Ben.jpg"
import {Container, Row, Col} from "reactstrap"
function About(){
    return(
        <>
        <Container>
            <div className="break">
            <Row>
                <Col lg={4}> <img className="mypic" src={Me} alt=""></img></Col>
                <Col lg={8}><h4 className="abouttext">Hi my name is Ben Abbott and I am a web designer. I have 2 years of web design experience. I have worked on a wide range of projects from simple portfolio websites to more complex, data integrated websites. I also have a history of project management for website projects and integrating them with tools such as AWS. </h4>
                <br/>
                <h4>I am confident that I can bring the skills I have honed over these past few years and be a valued contributor to any team I may have the opportunity to join. </h4>
                </Col>
        
            </Row>
            </div>
        </Container>
        
        </>
    )
}


export default About