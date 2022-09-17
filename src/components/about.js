import * as React from "react";
import './about.css';
import Developer from '../assets/developer.svg';
import Details from '../assets/details.json';

const About = () => (
    <div className="main justify-center">
        <div className="container justify-between">
            <div>
                <p className="font['Poppins'] text-custom-green-500 mt-48 text-xl font-medium ml-1">Hello, I'm</p>
                <h1 className="font['Poppins'] text-custom-slate-200 mt-2 text-5xl font-medium">{Details.name}</h1>
                <h2 className="font['Poppins'] text-custom-slate-600 mt-4 text-3xl font-semibold">I aspire to build quality products <br />using code.</h2>
                <p className="font['Poppins'] text-custom-slate-900 mt-6 text-xl font-normal about-para">{Details.aboutp1}</p>
                <a href="https://drive.google.com/file/d/1TUcOnSVTGxp6XOqrD9ce3MgUIXBfJG_b/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="font['Poppins'] text-custom-green-500 text-sm font-normal mt-8 rounded-full border-2 border-color pl-8 pr-8 pt-2 pb-2">
                        Resume
                    </button>
                </a>
            </div>
            <img alt="Full-Stack developer" className="dev-img mt-48" src={Developer}></img>
        </div>
    </div>

);

export default About;