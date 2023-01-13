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
        <Carousel.Item>
          <div className="destination-card">
            <p className="destination-p1">paris,france</p>
            <img src="/places/paris.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="destination-card">
            <p className="destination-p1">dubai,uae</p>
            <img src="/places/dubai.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="destination-card">
            <p className="destination-p1">swiss alps,switzerland</p>
            <img src="/places/switzerland.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="destination-card">
            <p className="destination-p1">machu pichu,peru</p>
            <img src="/places/peru.jpg" alt="" className="destination-image" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Destination;
