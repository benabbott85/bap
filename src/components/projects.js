import React from "react"
import {Container, Row, Col, Card, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Mod from '../assets/modps.jpg'
import Summit from '../assets/summitps.jpg'
function Projects (){
    return(
        <>
        <Container>
        <Row lg="3">
            <Col>
        <div>
            <div className="testing">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={Mod}
      style={{
        height: 270,
        // opacity: 0.4
      }}
    //   width="100%"
    />
    <CardImgOverlay>
      {/* <CardTitle tag="h5" className="ctitle"
     
      >
        Card Title
      </CardTitle> */}
      <div className="ctoverlay">
      <CardText className="ctitle">
      <h3>Mod Properties</h3>
      </CardText>
      <CardText className="ctitle">
        <small className="text-muted">
          <a href="https://modprop.info/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
        </small>
      </CardText>
      </div>
    </CardImgOverlay>
  </Card>
 </div>
</div>
</Col>
<Col></Col>
<Col >
        <div className="testing2">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={Summit}
      style={{
        height: 270
      }}
    //   width="100%"
    />
    <CardImgOverlay>
      {/* <CardTitle tag="h5">
        Card Title
      </CardTitle> */}
      <div className="ctoverlay">
      <CardText>
        <h3>Summit Junior Tour</h3>
      </CardText>
      <CardText>
        <small className="text-muted">
        <a href="https://summitjuniortour.com/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
        </small>
      </CardText>
      </div>
    </CardImgOverlay>
  </Card>
 
</div>
</Col>
</Row>
</Container>
        </>
    )
}

export default Projects