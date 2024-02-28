import React from "react";
// import "./styles.css";
import FlipCard from "./flipcard";
import Mod from '../assets/modps.jpg'
import Summit from '../assets/summitps.jpg'
import Evo from '../assets/evops.jpg'
import Max from '../assets/maxps.jpg'
import Tool from '../assets/tool.jpg'
import Central from '../assets/central2.jpg'
const cars = [
  {
    index:1,
    img: Mod,
    name: "Mod Properties",
    description: "Visit site",
    url: "https://modprop.info/"
  },
  {
    index:2,
    img: Summit,
    name: "Summit Junior Tour",
    description: "Visit site",
    url:"https://summitjuniortour.com/"
  },
  {
    index:3,
   img: Evo,
    name: "Evolution Landscape",
    description: "Visit site",
    url:"https://www.evolution-landscape.com/"
  },
  {
    index:4,
    img: Max,
     name: "Max Fund",
     description: "Visit site",
     url:"https://www.maxfund.org/"
   },
   {
    index:5,
    img: Tool,
     name: "Tool Country",
     description: "Visit site",
     url:"https://www.tool-country.com/"
   },
   {
    index:6,
    img: Central,
     name: "Central Auto Parts",
     description: "Visit site",
     url:"https://www.usedautopartsdenver.co/"
   }
];

function MultipleFlipCards() {
  return (
    <div className="app">
      <h1>My Professional Design Work</h1>
      <div className="car-container">
        {cars.map((car, index) => (
          <FlipCard
            key={index}
            img={car.img}
            name={car.name}
            url={car.url}
            description={car.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MultipleFlipCards;