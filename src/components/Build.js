import React from "react";
import "./Build.css";

import { ReactComponent as Iconreact } from "../assets/react.svg";

const build = () => {
  return (
    <section className="container">
      <div className="build">
        <p>Build whit</p> <Iconreact />{" "}
        <p>
          by <b style={{ color: "#f4e000" }}>@ptrktodev</b>
        </p>
      </div>
    </section>
  );
};

export default build;
