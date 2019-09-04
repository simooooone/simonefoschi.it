import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/style.scss"
import Particles from "react-particles-js"

const Layout = props => {
  return (
    <div>
      {/* 
        width 	string 	The width of the canvas.
        height 	string 	The height of the canvas.
        params 	object 	The parameters of the particles instance.
        style 	object 	The style of the canvas element.
        className 	string 	The class name of the canvas wrapper.
        canvasClassName 	string 	the class name of the canvas. 
      */}
      <Particles
        className="canavas-container"
        canavasClassName="canavas-content"
        params={{
          particles: {
            number: { value: 105, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="container">
        <div className="content">
          <Header myimg={props.myimg} />
          <div className="barra-sx"></div>
          <div className="content">{props.children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
