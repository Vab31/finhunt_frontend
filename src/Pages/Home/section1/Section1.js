import React from "react";
import "./section1.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Section1 = () => {
  return (
    <Carousel className="main-slide">
      <div
        className="c1"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <img src="../../c3.jpg" />
        <button
          style={{
            position: "absolute",
            top: "70%",
            left: "5%",
            padding: "10px 40px",
            borderRadius: "20px",
            fontSize: "16px",
            backgroundColor:"grey",
            marginRight:"10px"
          }}
        >
          Start Your Financial Journey Today
        </button>
        {/* <p className="legend"></p>   */}
      </div>
      <div>
        <img src="" />
        {/* <p className="legend"></p> */}
        {/* <h1 className='c1_text'>It is impossible to understand the markets without understanding human behaviour</h1> */}
      </div>
      <div>
        <img src="../../bg.jpg" />
        {/* <p className="legend"></p> */}
        <h1 className="c1_text">Eat Sleep Trade Repeat...</h1>
        {/* <h1 className='c1_text'>The hardest thing to judge is what level of risk is safe</h1> */}
      </div>
    </Carousel>
  );
};

export default Section1;
