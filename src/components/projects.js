import * as React from "react";
import './projects.css';
import { useMediaQuery } from 'react-responsive';

import Details from '../assets/details.json';
import githubIcon from '../assets/icon_github_white.svg';

const Projects = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
    return (
        isMobile ?
            <div className="main flex-col items-center mt-32" id="projects">
                    <h1 className="font['Poppins'] text-custom-slate-200 text-xl font-medium">Some projects I've built</h1>
                    <div className="flex flex-col items-center mt-4">
                        {
                            Details.projects.map((project, ind) => {
                                return (
                                    <div className="project-box-m flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-row justify-between mt-8 ml-6 mr-6">
                                                <h2 className="font['Poppins'] text-custom-green-500 text-lg font-medium">{project[0]}</h2>
                                                <a href={project[3]} target="_blank" rel="noreferrer">
                                                    <button>
                                                        <img alt="Github" className="w-8 hover:animate-bounce" src={githubIcon}></img>
                                                    </button>
                                                </a>
                                            </div>
                                            <p className="font['Poppins'] text-custom-slate-600 text-base font-normal mt-4 ml-6 mr-6">
                                                {project[1]}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap mt-4 ml-6 mr-6 mb-8">
                                            {
                                                project[2].map((tech, ind) => {
                                                    return (
                                                        <div className="font['Poppins'] text-custom-slate-600 text-sm font-normal tech mr-2 mb-2">
                                                            {tech}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
            </div>
            :
            <div className="main justify-center mt-80" id="projects">
                <div className="container flex-col">
                    <h1 className="font['Poppins'] text-custom-slate-200 text-3xl font-medium">Some projects I've built</h1>
                    <div className="flex flex-wrap container mt-8">
                        {
                            Details.projects.map((project, ind) => {
                                return (
                                    <div className="project-box flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-row justify-between mt-8 ml-6 mr-6">
                                                <h2 className="font['Poppins'] text-custom-green-500 text-lg font-medium">{project[0]}</h2>
                                                <a href={project[3]} target="_blank" rel="noreferrer">
                                                    <button>
                                                        <img alt="Github" className="w-8 hover:animate-bounce" src={githubIcon}></img>
                                                    </button>
                                                </a>
                                            </div>
                                            <p className="font['Poppins'] text-custom-slate-600 text-base font-normal mt-4 ml-6 mr-6">
                                                {project[1]}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap mt-4 ml-6 mr-6 mb-8">
                                            {
                                                project[2].map((tech, ind) => {
                                                    return (
                                                        <div className="font['Poppins'] text-custom-slate-600 text-sm font-normal tech mr-2 mb-2">
                                                            {tech}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
    );
}

export default Projects;