import React from "react"
import {Container, Row, Col, Card, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Mod from '../assets/modps.jpg'
import Summit from '../assets/summitps.jpg'
import Evo from '../assets/evops.jpg'
import Max from '../assets/maxps.jpg'
import Tool from '../assets/tool.jpg'
import Central from '../assets/central2.jpg'
function Projects (){
    return(
        <>
<h2 className="design">My Design Work</h2>

        <Container>
        <Row >
            <Col lg={4}>
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
{/* <Col></Col> */}
<Col lg={4}>
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
<Col lg={4}>
        <div>
            <div className="testing3">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={Evo}
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
      <h3>Evolution Landscape</h3>
      </CardText>
      <CardText className="ctitle">
        <small className="text-muted">
          <a href="https://www.evolution-landscape.com/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
        </small>
      </CardText>
      </div>
    </CardImgOverlay>
  </Card>
 </div>
</div>
</Col>
</Row>
<div className="break"></div>
<Row >
            <Col lg={4}>
        <div>
            <div className="testing">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={Tool}
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
      <h3>Tool Country</h3>
      </CardText>
      <CardText className="ctitle">
        <small className="text-muted">
          <a href="https://www.tool-country.com/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
        </small>
      </CardText>
      </div>
    </CardImgOverlay>
  </Card>
 </div>
</div>
</Col>

<Col lg={4}>
        <div className="testing2">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={Max}
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
        <h3>MaxFund</h3>
      </CardText>
      <CardText>
        <small className="text-muted">
        <a href="https://www.maxfund.org/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
        </small>
      </CardText>
      </div>
    </CardImgOverlay>
  </Card>
 
</div>
</Col>
<Col lg={4}>
        <div className="testing3">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src={Central}
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
        <h3>Central Auto Parts</h3>
      </CardText>
      <CardText>
        <small className="text-muted">
        <a href="https://www.usedautopartsdenver.co/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
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