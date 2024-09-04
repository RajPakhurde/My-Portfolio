import React, { useState, useEffect } from "react";
import laptopImg from '../../laptop-img.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Zoom from '@mui/material/Zoom';

const Portfolio = () => {
    const [activeCat, setActiveCat] = useState('all');



    const allProjects = [
        {
            projectName: 'xyz',
            projectDis: 'lorem aldkdfjkd dfjdkjfdkj fdfjdkfjd fdkfjdkjf dkf dkfjdkj fdkjfdkjfdk fdkf kdfjdkfj dkfjdkjf kdjf dk fdk',
            techStak: ['React', 'Js', 'Html', 'Css'],
            codeLink: '',
            liveLink: '',
            projectImg: laptopImg
        },
        {
            projectName: 'abc',
            projectDis: 'lorem aldkdfjkd dfjdkjfdkj fdfjdkfjd fdkfjdkjf dkf dkfjdkj fdkjfdkjfdk fdkf kdfjdkfj dkfjdkjf kdjf dk fdk',
            techStak: ['React', 'Js', 'Html', 'Css'],
            codeLink: '',
            liveLink: '',
            projectImg: laptopImg
        },
        {
            projectName: 'abc',
            projectDis: 'lorem aldkdfjkd dfjdkjfdkj fdfjdkfjd fdkfjdkjf dkf dkfjdkj fdkjfdkjfdk fdkf kdfjdkfj dkfjdkjf kdjf dk fdk',
            techStak: ['React', 'Js', 'Html', 'Css'],
            codeLink: '',
            liveLink: '',
            projectImg: laptopImg
        },
        {
            projectName: 'abc',
            projectDis: 'lorem aldkdfjkd dfjdkjfdkj fdfjdkfjd fdkfjdkjf dkf dkfjdkj fdkjfdkjfdk fdkf kdfjdkfj dkfjdkjf kdjf dk fdk',
            techStak: ['React', 'Js', 'Html', 'Css'],
            codeLink: '',
            liveLink: '',
            projectImg: laptopImg
        },

    ]

    const frontendProjects = [
        {
            projectName: 'xyz',
            projectDis: 'lorem aldkdfjkd dfjdkjfdkj fdfjdkfjd fdkfjdkjf dkf dkfjdkj fdkjfdkjfdk fdkf kdfjdkfj dkfjdkjf kdjf dk fdk',
            techStak: ['React', 'Js', 'Html', 'Css'],
            codeLink: '',
            liveLink: '',
            projectImg: laptopImg
        },
        {
            projectName: 'abc',
            projectDis: 'lorem aldkdfjkd dfjdkjfdkj fdfjdkfjd fdkfjdkjf dkf dkfjdkj fdkjfdkjfdk fdkf kdfjdkfj dkfjdkjf kdjf dk fdk',
            techStak: ['React', 'Js', 'Html', 'Css'],
            codeLink: '',
            liveLink: '',
            projectImg: laptopImg
        },
    ]

    const fullstackProjects = [
        {
            projectName: 'xyz',
            projectDis: 'lorem aldkdfjkd dfjdkjfdkj fdfjdkfjd fdkfjdkjf dkf dkfjdkj fdkjfdkjfdk fdkf kdfjdkfj dkfjdkjf kdjf dk fdk',
            techStak: ['React', 'Js', 'Html', 'Css'],
            codeLink: '',
            liveLink: '',
            projectImg: laptopImg
        },
    ]
    return (
        <div className="w-full">
            <div className="flex gap-6 justify-start font-semibold mb-5 text-grey">
                <p onClick={() => setActiveCat('all')} className={`cursor-pointer transition-all duration-300 ${activeCat === 'all' ? 'border-b-4 border-skyBlue ' : null}`}>All</p>
                <p onClick={() => setActiveCat('frontend')} className={`cursor-pointer transition-all duration-300 ${activeCat === 'frontend' ? 'border-b-4 border-skyBlue ' : null}`}>Frontend</p>
                <p onClick={() => setActiveCat('fullstack')} className={`cursor-pointer transition-all duration-300 ${activeCat === 'fullstack' ? 'border-b-4 border-skyBlue ' : null}`}>FullStack</p>
            </div>
            {activeCat === 'all' &&
                <Zoom in>
                    <div className="flex flex-col gap-10 p-3">
                        {allProjects.map((project, index) => {
                            return (
                                <div key={index} className=" flex justify-center gap-10 md:gap-20 flex-wrap md:flex-nowrap">
                                    <img src={project.projectImg} className="rounded h-60 md:h-60 lg:h-80" />
                                    <div className="flex flex-col justify-center items-center md:w-[30%] gap-5">
                                        <h4 className="font-bold text-xl">{project.projectName.toUpperCase()}</h4>
                                        <h4 className="text-grey">{project.projectDis}</h4>
                                        <div>
                                            {project.techStak.map((tech, index) => {
                                                return (
                                                    <span key={index} className="mr-4 font-semibold">{tech}</span>
                                                )
                                            })}
                                        </div>
                                        <div className="flex gap-10 font-semibold">
                                            <a href={project.codeLink}>Code <GitHubIcon /></a>
                                            <a href={project.liveLink}>Live Demo <OpenInNewIcon /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Zoom>
            }

            {activeCat === 'frontend' &&
                <Zoom in>
                    <div className="flex flex-col gap-10 p-3">
                        {frontendProjects.map((project, index) => {
                            return (
                                <div key={index} className="flex justify-center gap-10 md:gap-20 flex-wrap md:flex-nowrap">
                                    <img src={project.projectImg} className="rounded h-60 md:h-60 lg:h-80" />
                                    <div className="flex flex-col justify-center items-center md:w-[30%] gap-5">
                                        <h4 className="font-bold text-xl">{project.projectName.toUpperCase()}</h4>
                                        <h4 className="text-grey">{project.projectDis}</h4>
                                        <div>
                                            {project.techStak.map((tech, index) => {
                                                return (
                                                    <span key={index} className="mr-4 font-semibold">{tech}</span>
                                                )
                                            })}
                                        </div>
                                        <div className="flex gap-10 font-semibold">
                                            <a href={project.codeLink}>Code <GitHubIcon /></a>
                                            <a href={project.liveLink}>Live Demo <OpenInNewIcon /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Zoom>
            }

            {activeCat === 'fullstack' &&
                <Zoom in>
                    <div className="flex flex-col gap-10 p-3">
                        {fullstackProjects.map((project, index) => {
                            return (
                                <div key={index} className="flex justify-center gap-10 md:gap-20 flex-wrap md:flex-nowrap">
                                    <img src={project.projectImg} className="rounded h-60 md:h-60 lg:h-80" />
                                    <div className="flex flex-col justify-center items-center md:w-[30%] gap-5">
                                        <h4 className="font-bold text-xl">{project.projectName.toUpperCase()}</h4>
                                        <h4 className="text-grey ">{project.projectDis}</h4>
                                        <div>
                                            {project.techStak.map((tech, index) => {
                                                return (
                                                    <span key={index} className="mr-4 font-semibold">{tech}</span>
                                                )
                                            })}
                                        </div>
                                        <div className="flex gap-10 font-semibold">
                                            <a href={project.codeLink}>Code <GitHubIcon /></a>
                                            <a href={project.liveLink}>Live Demo <OpenInNewIcon /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Zoom>
            }
        </div>
    )
}

export default Portfolio;