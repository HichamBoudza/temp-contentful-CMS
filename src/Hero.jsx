import React from "react";
import heroImg from "./assets/hero_2.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quae voluptatum blanditiis ut, doloribus accusamus labore officiis.
            Necessitatibus mollitia voluptas obcaecati soluta totam voluptate
            nostrum est, itaque, molestias quos inventore.
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="" className="img" />
      </div>
    </section>
  );
};

export default Hero;
