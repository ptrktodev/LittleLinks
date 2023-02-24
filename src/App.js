import "./App.css";
import Cards from "./components/Cards";
import Me from "./components/Me";
import Build from "./components/Build";

import { ReactComponent as Hand } from "./assets/hand.svg";
import { ReactComponent as Git } from "./assets/TikTok.svg";
import { ReactComponent as Linkedin } from "./assets/Link.svg";
import { ReactComponent as GR } from "./assets/gr.svg";
import React from "react";

function App() {
  React.useEffect(() => {
    document.title = "Little Links";
  }, []);

  return (
    <main>
      <section>
        <Me />
        <Cards
          bg="#f40000"
          text="See my Project"
          Svg={Hand}
          link="https://cinemagic.bohr.io/"
        />
        <Cards
          bg="#0077B5"
          text="Linkedin"
          Svg={Linkedin}
          link="https://linkedin.com/in/patrick-rodriguez-tech"
        />
        <Cards
          bg="#222222"
          text="Github"
          Svg={Git}
          link="https://github.com/ptrktodev"
        />
        <Cards
          bg="#795649"
          text="Goodreads"
          Svg={GR}
          link="https://www.goodreads.com/user/show/162119584-patrick-rodriguez"
        />
        <Build />
      </section>
    </main>
  );
}

export default App;
