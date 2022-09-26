import * as React from "react";
import './about-me.css';

import MePhoto from '../assets/me_web_2.jpg';
import Details from '../assets/details.json';

const AboutMe = () => (
    <div className="main justify-center mt-80" id="about-me">
        <div className="container justify-between">
            <div>
                <h1 className="font['Poppins'] text-custom-slate-200 text-3xl font-medium">About Me</h1>
                <p className="font['Poppins'] text-custom-slate-900 mt-6 text-lg font-normal about-para">{Details.aboutme1}</p>
                <p className="font['Poppins'] text-custom-slate-900 mt-4 text-lg font-normal about-para">{Details.aboutme2}</p>
                <p className="font['Poppins'] text-custom-slate-900 mt-4 text-lg font-normal about-para">{Details.aboutme3}</p>
                <p className="font['Poppins'] text-custom-slate-900 mt-4 text-lg font-normal about-para">{Details.aboutme4}</p>
                <ul className="list-disc flex about-para flex-wrap ml-6">
                    {
                        Details.techs.map((tech, ind) => {
                            return (
                                <li className="font['Poppins'] text-custom-slate-600 mt-2 text-base font-normal w-64">{tech}</li>
                            );
                        })
                    }

                </ul>
            </div>
            <img alt="Full-Stack developer" className="me-img mt-4" src={MePhoto}></img>
        </div>
    </div>

);

export default AboutMe;