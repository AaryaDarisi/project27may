import React from "react";
import { SectionWrapper } from "../hoc";

const Defxv = () => {
  return (
    <div className="containerdefxv h-full mx-auto w-full">
      <div className="left-content">
        <div className="defxvh1">
          <h1 className="text-white">
            Your H1 Text Here Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, assumenda.
          </h1>
        
        <div className="def-btn">
        <button className="learn-more-btn ">Learn More</button>
        </div>
        </div>
      </div>
      <div className="right-content">
        <img src="../public/glasses2.jpg" alt="alternative_text" />
      </div>
    </div>
  );
};
export default SectionWrapper(Defxv, "defxv");
// export default Defxv;
