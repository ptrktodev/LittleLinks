import React from "react";
import "./Cards.css";

const Cards = ({ text, bg, Svg, link }) => {
  return (
    <section className="container">
      <div className="card" style={{ backgroundColor: bg }}>
        <a href={link} target="_blank" className="tagA">
          <Svg />
          <p>{text}</p>
        </a>
      </div>
    </section>
  );
};

export default Cards;
