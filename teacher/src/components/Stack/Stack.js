import React from "react";
import "./Stack.css";

const Stack = () => {
  return (
    <>
      <div className="stack">
        <div>Frontend</div>
        <div class="main">
          <div class="cardStack" id="c1"></div>
          <div class="cardStack" id="c2"></div>
          <div class="cardStack" id="c3"></div>
          <div class="cardStack" id="c4"></div>
        </div>
      </div>
    </>
  );
};

export default Stack;
