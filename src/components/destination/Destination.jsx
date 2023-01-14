import React from "react";
import { Carousel } from "react-bootstrap";

import "./destination.css";

function Destination() {
  return (
    <div>
      <h1 className="destination-h1">
        Explore new worlds with exotic natural scene
      </h1>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}> 
          <div className="destination-card">
            <p className="destination-p1">Paris,France</p>
            <img src="/places/paris.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="destination-card">
            <p className="destination-p1">Dubai,Uae</p>
            <img src="/places/dubai.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="destination-card">
            <p className="destination-p1">Swiss alps,Switzerland</p>
            <img src="/places/switzerland.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="destination-card">
            <p className="destination-p1">Machu pichu,Peru</p>
            <img src="/places/peru.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Destination;
