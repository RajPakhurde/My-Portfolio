import React from "react"; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
 
import pdf from '../home/Raj-Pakhurde-Resume-final.pdf'
import profilePic from '../home/profile_pic.jpg'

const Home = () => {
    return (
        <div className="flex justify-between mt-40 h-screen">
            <div className="home-div text-white flex flex-col gap-4 home-info">
                <h2 className="text-4xl font-bold">Hello, It's Me</h2>
                <h1 className="text-6xl font-bold">Raj Pakhurde</h1>
                <h2 className="text-4xl font-bold">And I'm a <span className="text-skyBlue">Software Developer</span></h2>
                <br />
                <p className="text-xl">Passionate Software Developer with a knack for creating innovative solutions and a commitment to delivering high-quality, user-centric applications.</p>
                <br />
                <div className="flex gap-8">
                    <a href="https://github.com/RajPakhurde" target="blank" className="icon text-skyBlue">
                        <GitHubIcon/>
                    </a>
                    <a href="https://www.linkedin.com/in/raj-pakhurde/" target="blank" className="icon text-skyBlue">
                        <LinkedInIcon/>
                    </a>
                    
                </div>
                {/* My Portfolio\src\assets\Raj-Pakhurde-Resume-final.pdf */}
                <a href={pdf} download className="bg-skyBlue w-fit p-3 pr-6 pl-6 font-semibold text-backgroundColor rounded-full border-skyBlue shadow-[0_0_10px_2px_rgba(56,189,248,0.75)]">Download CV</a>
            </div>
            <div className="home-div flex justify-center h-fit">
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00EEFF" d="M40.9,-53.9C52.4,-47.9,60.7,-35.2,68.3,-20.2C75.8,-5.3,82.6,11.9,78.9,26.4C75.2,40.8,61,52.6,46.1,61C31.2,69.4,15.6,74.4,-1.4,76.3C-18.4,78.3,-36.8,77.2,-46,66.9C-55.1,56.6,-55,37.2,-57.6,20.7C-60.3,4.2,-65.7,-9.5,-63.4,-21.9C-61.2,-34.3,-51.1,-45.4,-39.3,-51.3C-27.4,-57.1,-13.7,-57.6,0.5,-58.3C14.7,-59,29.4,-59.8,40.9,-53.9Z" transform="translate(100 100)" />
            </svg> */}
                
            <img src={profilePic} alt="profile image" className="w-4/5 rounded-full hover:opacity-30 transition ease-in-out duration-300 border-skyBlue shadow-[0_0_10px_2px_rgba(56,189,248,0.75)]"/>
            </div>
        </div>
    );
}

export default Home;