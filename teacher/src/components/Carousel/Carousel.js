import React, { useEffect, useState } from "react";
import "./Carousel.css";
const Carousel = ({ reverse }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const mt = width < 900 ? "mt-30" : "mt-100";
  const isReverse = reverse == false ? true : false;
  const skills = [
    "MySql",
    "GitHub",
    "SwiftUI",
    "UIKit",
    "JavaScript",
    "TypeScript",
    "Java",
    "Spring",
    "Django",
    "Python",
    "Postgres",
    "React",
    "Vue",
    ".Net Core",
    "Figma",
    "Blender",
    "XCode",
  ];
  return (
    <>
    <div className="classCarousel">
      {isReverse ? (
        <div className="carousel">
          <div className={"skills " + `${mt}`}>
            <div className="scroll-container">
              {skills.concat(skills).map((skill, index) => (
                <button key={index} className="skills-btn">
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="skills mt-30">
          <div className="scrollRight-container">
            {skills.concat(skills).map((skill, index) => (
              <button key={index} className="skills-btn">
                {skill}
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Carousel;
