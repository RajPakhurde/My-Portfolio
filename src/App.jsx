import React from "react";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";

function App() {
  return (
    <main className="flex flex-col min-h-screen ml-40 mr-40">
      <Nav/>
      <div className="flex flex-col ">
        <section id="home" className="flex">
          <Home/>
        </section>
        <section id="about" className="">
   
        </section>
        <section id="portfolio"></section>
        <section id="contact"></section>
      </div>
    </main>
  )
}

export default App
