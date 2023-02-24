import React from "react";
import Image from "../assets/me.jpg";
import "./Me.css";

const Me = () => {
  return (
    <section className="container">
      <div className="Me">
        <img src={Image} />
        <h1>Patrick Rodriguez</h1>
        <p>
          {" "}
          LittleLink is a small project based on and
          <a
            id="mya"
            href="https://www.figma.com/community/file/846568099968305613"
            target="_blank"
          >
            {" "}
            <u>inspired</u>
          </a>{" "}
          by another Figma UI Project. LittleLink was built using{" "}
          <strong>REACTJS & CSS</strong>, a simple and responsive boilerplate.
        </p>
      </div>
    </section>
  );
};

export default Me;
