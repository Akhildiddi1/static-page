import React from "react";

const HeroSection = () => {
  return (
    <div className="container text-start py-5">
      {/* Main Heading */}
      <h1 className="fw-bold">
        Your <span className="fst-italic" style={{color:"#8064A2"}}>Hobby</span>, Your{" "}
        <span className="fw-semibold" style={{color:"#8064A2"}}>Community...</span>
      </h1>

      {/* Get Started Button */}
      <button className="btn mt-3" style={{backgroundColor: "#8064A2", borderColor: "#8064A2"}}>Get started</button>

      {/* Images Section */}
      <div className="mt-4">
        <img
          src={require('../assets/images/Group 99.png')}
          alt="Hobby Community"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HeroSection;