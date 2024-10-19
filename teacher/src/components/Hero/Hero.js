import React, { useEffect, useState } from "react";
import "./Hero.css";
import ReactIcon from "../svg/React";
import SwiftIcon from "../svg/Swift";
import JavaScriptIcon from "../svg/JavaScript";
import PythonIcon from "../svg/Python";
import Carousel from "../Carousel/Carousel";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const height = width < 900 ? "3vh" : "3vw";
  return (
    <>
      <div className="hero">
        <div className="heroText">Что хотите изучить ?</div>
        <Carousel reverse={false} />
        <div className="card">
          <div class="container">
            <div data-text="Swift" style={{ "--r": -15 }} className="glass">
              <SwiftIcon height={height} color="white"></SwiftIcon>
            </div>
            <div data-text="React" style={{ "--r": -10 }} className="glass">
              <ReactIcon height={height} />
            </div>
            <div data-text="Python" style={{ "--r": 5 }} className="glass">
              <PythonIcon height={height} />
            </div>
            <div data-text="JavaScript" style={{ "--r": 25 }} className="glass">
              <JavaScriptIcon height={height} />
            </div>
          </div>
        </div>

        <Carousel />
        <div className="heroText fr">В поисках нового ?</div>
      </div>
    </>
  );
};

export default Hero;
