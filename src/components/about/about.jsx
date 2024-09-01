import React from "react";
import profilePic from '../home/profile_pic.jpg'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const About = () => {
    return (
        <div className="flex justify-between mt-50 h-screen  animated-block pl-20 pr-20 ">


            <div className=" flex justify-center h-fit img-info mt-10 sec-h2">
                <img src={profilePic} alt="profile image" className="w-3/5 rounded-full hover:opacity-30 transition ease-in-out duration-300 border-skyBlue shadow-[0_0_10px_2px_rgba(56,189,248,0.75)]" />
            </div>

            <div className="home-div text-white flex flex-col gap-4 about-me-sec">

                <h1 className="text-6xl font-bold about-me-text">About <span className="text-skyBlue">Me</span></h1>
                <h2 className="text-4xl font-bold ">Software Developer!</h2>
                <br />
                <p className="text-xl ">I am a final-year BE Computer Engineering student with a passion for building impactful software solutions. As a full-stack developer, I have hands-on experience with a diverse set of technologies, including React, Node.js, SQLite, Electron.js, PostgreSQL, HTML, CSS, and more.
                    <br />
                    <br />

                    Over the course of my studies, I've successfully completed two real-world projects. The first was for a dental clinic, where I developed a comprehensive system to manage patient records, appointments, and billing. The second project was for my institute, aimed at streamlining administrative tasks, making processes more efficient and user-friendly.
                    <br />
                    <br />

                    I thrive on solving complex problems and am always eager to learn and implement new technologies. My goal is to continue growing as a developer, contributing to projects that make a difference.
                    </p>
                <br />

                <h2 className="text-4xl font-bold ">Tech<span className="text-skyBlue">Stack</span></h2>
                <br />

                <div className="flex flex-wrap gap-4">
                    <Chip label="React.js" variant="outlined" color="primary" />
                    <Chip label="TailwindCss" variant="outlined" color="primary" />
                    <Chip label="Node.js" variant="outlined" color="primary" />
                    <Chip label="Express.js" variant="outlined" color="primary" />
                    <Chip label="Sql" variant="outlined" color="primary" />
                    <Chip label="PostgreSQL" variant="outlined" color="primary" />
                    <Chip label="SQLite" variant="outlined" color="primary" />
                    <Chip label="Electron.js" variant="outlined" color="primary" />
                    <Chip label="C++" variant="outlined" color="primary" />
                    <Chip label="Git" variant="outlined" color="primary" />
                    <Chip label="Github" variant="outlined" color="primary" />
                    <Chip label="Vercel" variant="outlined" color="primary" />
                    
                </div>
            </div>


        </div>
    )
}

export default About;