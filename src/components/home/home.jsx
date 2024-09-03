import React, {useState} from "react"; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Zoom from '@mui/material/Zoom';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
 
import pdf from './Raj-Pakhurde-Resume-final.pdf'
import profilePic from './profile_pic.jpg'

const Home = (props) => {
 
    
    return (
        <div className="">
    
                <div className="">
               
                    <h2 className="">Hello, It's Me</h2>
                     
                    <h1 className="">Raj Pakhurde</h1>
                    <h2 className="">And I'm a <span className="text-skyBlue">Software Developer</span></h2>
                    <br />
                    <p className="">Passionate Software Developer with a knack for creating innovative solutions and a commitment to delivering high-quality, user-centric applications.</p>
                    <br />
                    <div className=" ">
                        <a href="https://github.com/RajPakhurde" target="blank" className="icon text-skyBlue">
                            <GitHubIcon/>
                        </a>
                        <a href="https://www.linkedin.com/in/raj-pakhurde/" target="blank" className="icon text-skyBlue">
                            <LinkedInIcon/>
                        </a>
                        
                    </div>
                    {/* My Portfolio\src\assets\Raj-Pakhurde-Resume-final.pdf */}
                    <a href={pdf} download className="download-btn bg-skyBlue w-fit p-3 pr-6 pl-6 font-semibold text-backgroundColor rounded-full border-skyBlue shadow-[0_0_10px_2px_rgba(56,189,248,0.75)]">Download CV</a>
                </div>
 
            <Zoom in={true}>
                <div className=" ">
                 
                <img src={profilePic} alt="profile image" className=" "/>
                </div>
            </Zoom>
        </div>
    );
}

export default Home;