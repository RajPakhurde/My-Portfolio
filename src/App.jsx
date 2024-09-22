import React, { useState, useEffect } from "react";
// import sendmail from 'sendmail'
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const sendmail = require('sendmail')();

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Zoom from '@mui/material/Zoom';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import pdf from './Raj-Pakhurde-Resume-final.pdf'
import profilePic from './profile_pic.jpg'
import laptopImg from './laptop-img.jpg'

import htmlLogo from './assets/html-5.png'
import cssLogo from './assets/css-3.png'
import bootstrapLogo from './assets/bootstrap.png'
import expressLogo from './assets/express-js.png'
import jsLogo from './assets/js.png'
import nodejsLogo from './assets/nodejs.png'
import reactLogo from './assets/physics.png'
import postgresLogo from './assets/postgre.png'
import sqlLogo from './assets/sql-server.png'
import tailwindLogo from './assets/tailwind.png'

import Chip from '@mui/material/Chip';
import Portfolio from "./components/portfolio/portfolio";

function App() {
  const [animation, setAnimation] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const hoverColor = {
    color: "#00EEFF",
  };

  const hideNav = {
    display: 'none',
  }


  useEffect(() => {
    setAnimation(false)
  }, [animation])

 console.log(window.innerWidth);

 const [fullName, setFullName] = useState();

 const sendEmail = ()=> {
  console.log("send email function");
  
    sendmail({
      from: 'pakhurderaj@gmail.com',
      to: 'pakhurderaj12@gmail.com',
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
}
 
 
  return (

    <main className="text-slate-700">
      {/* Nav bar */}
      <div className="flex justify-between items-center   p-4 h-[60px] lg:h-[80px] sticky top-0 header">
        <h1 className="text-2xl font-bold">R@J.dev</h1>
        <nav
          // style={hideNav}
          className={`flex gap-12 font-semibold ${window.innerWidth <= 600 ? 'hidden' : null}`}>
          <a
            style={activeNav === "home" ? hoverColor : null}
            href="#home"
            onClick={() => {
              setActiveNav("home")
              props.setAnimation(true)
            }

            }
            className="hover:text-skyBlue"
          >
            Home
          </a>
          <a
            style={activeNav === "about" ? hoverColor : null}
            href="#about"
            onClick={() => setActiveNav("about")}
            className="hover:text-skyBlue"
          >
            About
          </a>
          <a
            style={activeNav === "portfolio" ? hoverColor : null}
            href="#portfolio"
            onClick={() => setActiveNav("portfolio")}
            className="hover:text-skyBlue"
          >
            Portfolio
          </a>
          <a
            style={activeNav === "contact" ? hoverColor : null}
            href="#contact"
            onClick={() => setActiveNav("contact")}
            className="hover:text-skyBlue"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className=" flex flex-col justify-center items-center h-[100%] "  >
        <section id="home" className="flex lg:w-[70%] h-[calc(100vh-60px)] lg:h-[calc(100vh-80px)]">
          <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-between  p-4 gap-4 ">

            <div className="lg:w-[50%] flex flex-col gap-1">
              <h2 className="font-bold text-2xl md:text-3xl">Hello, It's Me 👋</h2>

              <h1 className="font-bold text-4xl md:text-5xl">Raj Pakhurde</h1>
              <h2 className="font-bold text-2xl md:text-3xl">And I'm a <span className="text-skyBlue">Software Developer</span></h2>
              <br />
              <p className="font-semibold ">Passionate Software Developer with a knack for creating innovative solutions and a commitment to delivering high-quality, user-centric applications.</p>
              <br />
              <div className="flex gap-4">
                <a href="https://github.com/RajPakhurde" target="blank" className="icon text-skyBlue ">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/raj-pakhurde/" target="blank" className="icon text-skyBlue">
                  <LinkedInIcon />
                </a>

              </div>
              <br />
              <a href={pdf} download className="download-btn bg-skyBlue w-fit p-2 pr-6 pl-6 lg:p-3 font-medium md:font-bold lg:font-semibold text-backgroundColor rounded-full border-skyBlue shadow-[0_0_10px_2px_rgba(56,189,248,0.75)]">Download CV</a>
            </div>

            <Zoom in={true}>
              <div className="w-full flex justify-center lg:w-[40%]">

                <img src={profilePic} alt="profile image" className="h-60 md:h-60 lg:h-80 rounded-full " />
              </div>
            </Zoom>
          </div>
        </section>

        <section id="about" className="flex lg:w-[70%] h-fit lg:h-[calc(100vh-80px)] ">
          <div className="flex flex-wrap w-full lg:flex-nowrap items-center justify-between  p-4 gap-4 ">


            <div className="w-full flex justify-center lg:w-[30%] ">
              <img src={laptopImg} alt="laptop image" className="rounded h-60 md:h-60 lg:h-80" />
            </div>

            <div className="lg:w-[60%]">
              <h1 className="font-bold text-4xl md:text-5xl">About <span className="text-skyBlue">Me</span></h1>
              <h2 className="font-bold text-2xl md:text-3xl ">Software Developer!</h2>
              <br />
              <p className="font-semibold text-grey">I am a final-year BE Computer Engineering student with a passion for building impactful software solutions. As a full-stack developer, I have hands-on experience with a diverse set of technologies, including React, Node.js, SQLite, Electron.js, PostgreSQL, HTML, CSS, and more.
                <br />
                <br />

                Over the course of my studies, I've successfully completed two real-world projects. The first was for a dental clinic, where I developed a comprehensive system to manage patient records, appointments, and billing. The second project was for my institute, aimed at streamlining administrative tasks, making processes more efficient and user-friendly.
              </p>
              <br />
              <br />

              <h2 className="font-bold text-2xl md:text-3xl">Tech<span className="text-skyBlue">Stack</span></h2>
              <br />

              <div className="flex flex-wrap gap-7">
                <img src={htmlLogo} alt="laptop image" className="h-10" />
                <img src={cssLogo} alt="laptop image" className="h-10" />
                <img src={jsLogo} alt="laptop image" className="h-10" />
                <img src={reactLogo} alt="laptop image" className="h-10" />
                <img src={tailwindLogo} alt="laptop image" className="h-10" />
                <img src={bootstrapLogo} alt="laptop image" className="h-10" />
                <img src={nodejsLogo} alt="laptop image" className="h-10" />
                <img src={expressLogo} alt="laptop image" className="h-10 " />
                <img src={sqlLogo} alt="laptop image" className="h-10" />
                <img src={postgresLogo} alt="laptop image" className="h-10" />
              </div>
            </div>

          </div>
        </section>

        <section id="portfolio" className="flex lg:w-[70%] min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-80px)]  pt-20">
          <div className="flex flex-col w-full   p-4 gap-4 ">
            <h1 className="font-bold text-[15px] md:text-xl text-skyBlue ">PORTFOLIO</h1>
            <h2 className="font-bold text-xl md:text-2xl">Each project is a unique piece of development 🧩</h2>

            <div className="w-[100%] flex justify-center mt-10">
               <Portfolio/>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 flex flex-col items-center gap-20 lg:w-[70%] min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-80px)]  pt-20 ">
            <h1 className="font-bold text-4xl md:text-5xl">Contact <span className="text-skyBlue">Me</span></h1>

            <form action="" className="w-[100%] p-5 md:w-[70%] flex flex-col gap-5 md:gap-10">
              <div className=" flex flex-col md:flex-row gap-10">
                <input type="text" placeholder="Full Name" className="w-full md:w-[50%] p-2 md:p-4 rounded-md font-bold border-2"/>
                <input type="email" placeholder="Email Address" className="w-full md:w-[50%] p-2 md:p-4 rounded-md font-bold border-2" />
              </div>
              <div className="flex flex-col md:flex-row gap-10">
                <input type="number" placeholder="Mobile Number" className="w-full md:w-[50%] p-2 md:p-4 rounded-md font-bold border-2"/>
                <input type="text" placeholder="Email Subject" className="w-full md:w-[50%] p-2 md:p-4 rounded-md font-bold border-2"/>
              </div>
              <div className="">
                <textarea name="paragraph_text" cols="50" rows="5" placeholder="Your Message" className="w-[100%] p-4 border-2 rounded-md font-bold"></textarea>
              </div>
              <div className="flex justify-center">
                <button className="  text-xl bg-skyBlue w-fit p-2 pr-6 pl-6 lg:p-3 font-medium md:font-bold lg:font-semibold text-white rounded-full border-skyBlue shadow-[0_0_10px_2px_rgba(56,189,248,0.75)]" onClick={sendEmail}>Send Message</button>
              </div>

            </form>
        </section>
      </div>
    </main>

  )
}

export default App
