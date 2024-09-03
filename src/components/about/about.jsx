import React from "react";
import profilePic from '../home/profile_pic.jpg'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const About = () => {
    return (
        <div className=" ">

            <div className="  ">
                <img src={laptopImg} alt="laptop image" className=" " />
            </div>

            <div className=" ">
                <h1 className=" ">About <span className="text-skyBlue">Me</span></h1>
                <h2 className="  ">Software Developer!</h2>
                <br />
                <p className=" ">I am a final-year BE Computer Engineering student with a passion for building impactful software solutions. As a full-stack developer, I have hands-on experience with a diverse set of technologies, including React, Node.js, SQLite, Electron.js, PostgreSQL, HTML, CSS, and more.
                    <br />
                    <br />

                    Over the course of my studies, I've successfully completed two real-world projects. The first was for a dental clinic, where I developed a comprehensive system to manage patient records, appointments, and billing. The second project was for my institute, aimed at streamlining administrative tasks, making processes more efficient and user-friendly.
                    </p>
                <br />

                <h2 className="  ">Tech<span className="">Stack</span></h2>
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