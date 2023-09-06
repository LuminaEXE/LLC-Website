import { LegacyRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, useSprings } from "@react-spring/web";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import "./index.css";
import "./App.css";
import "./Nav";
import Nav from "./Nav";
import React from "react";

class txtP extends React.Component {
  myRef: LegacyRef<HTMLParagraphElement> | undefined;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.myRef = React.createRef();
  } 
  render() {
    return <p ref={this.myRef}></p>;
  }
}

function opacity(delay: number = 0, duration: number = 1000) {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: delay,
    config: { duration: duration },
  });
  return springs;
}
function scale(delay: number = 0, duration: number = 1000) {
  const springs = useSpring({
    from: { scale: 1 },
    to: { scale: 0 },
    delay: delay,
    config: { duration: duration },
  });
  return springs;
}




function App() {
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={1} speed={0.5} sticky={{ start: 0, end: 2 }}>
          <Nav />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <animated.div>

            <animated.div className="TXTdiv">

              <h1 className="TXT">
                <animated.span style={opacity(1000)}> Hey,</animated.span>{" "}
                <animated.span style={opacity(2300, 2000)}>
                  {" "}
                  I'm <span className="gradient">Sachman</span>{" "}
                </animated.span>
              </h1>


              <h1 className="TXT blur">
                <animated.span style={opacity(1000)}> Hey,</animated.span>{" "}
                <animated.span style={opacity(2300, 2000)}>
                  {" "}
                  I'm <span className="gradient">Sachman</span>{" "}
                </animated.span>

              </h1>

            </animated.div>

          </animated.div>

        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> 
          <animated.div>
            <p className="gay-balls" ></p>
          </animated.div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
