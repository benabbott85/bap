// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";
// import Mod from '../assets/modps.jpg'
// import Summit from '../assets/summitps.jpg'
// import Evo from '../assets/evops.jpg'
// import Max from '../assets/maxps.jpg'
// import Tool from '../assets/tool.jpg'
// import Central from '../assets/central2.jpg'
// import {Container, Row, Col, Card, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap'
// const FlipCard = () => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleMouseEnter = () => {
//     setIsFlipped(true);
//   };

//   const handleMouseLeave = () => {
//     setIsFlipped(false);
//   };

//   return (
//     <Container>
//         <Row>
//         <Col lg={4}>
//     <div className="flip-card-container">
//       <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
//         <div
//           className="front"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             <img src={Mod}/>
//          {/* <h1> This is the front card </h1> */}
//         </div>
//         <div
//           className="back"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h1> Mod Properties </h1>
//           <a href="https://modprop.info/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
//         </div>
//       </ReactCardFlip>
//     </div>
//     </Col>
    
//     <Col lg={4} className="column2">
//     <div className="flip-card-container">
//       <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
//         <div
//           className="front"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             <img src={Summit}/>
//          {/* <h1> This is the front card </h1> */}
//         </div>
//         <div
//           className="back"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h1> Summit Junior Tour </h1>
//           <a href="https://summitjuniortour.com/" target='_blank' rel="noreferrer"> <button className='sitebtn'>Visit Site</button></a>
//         </div>
//       </ReactCardFlip>
//     </div>
//     </Col>
//     </Row>
//     </Container>
//   );
// };

// export default FlipCard;

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {Container, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
const FlipCard = ({ img, name, description, url }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="car-card">
        <Container><Row><Col lg={4}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
      >
        {/* Front side */}
        <div
          className="card-front"
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src={img}
            alt={name}
          />
        </div>
        {/* Back side */}
        <div className="card-back" onClick={handleClick}>
          <h2>{name}</h2>
          {/* <p>{description}</p> */}
          <a href={url} target='_blank' rel="noreferrer"><button>{description}</button></a>
        </div>
      </ReactCardFlip>
      </Col></Row></Container>
    </div>
  );
};

export default FlipCard;