import React from "react";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import SmoothScroll from "./smoothscroll";

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  
  return (
    <SmoothScroll>
      <main className="flex flex-col min-h-screen container">
        <div className="top-nav-bar w-full h-20 bg-backgroundColor">
          <Nav/>
        </div>
        <div className="main-section view flex flex-col"  >
          <section id="home" className="flex home">
            <Home/>
          </section>
          <section id="about" className="">
            <About/>
          </section>
          <section id="portfolio">
            <Portfolio/>
          </section>
          <section id="contact"></section>
        </div>
      </main>
    </SmoothScroll>
  )
}

export default App
