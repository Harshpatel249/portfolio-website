import * as React from "react";
import './about.css';

const About = () => (
    <div className="main justify-center">
        <div className="container">
            <p className="font['Poppins'] text-custom-green-500 mt-48 text-xl font-medium">Hello, I'm</p>
            <h1 className="font['Poppins'] text-custom-slate-200 mt-1.5 text-5xl font-medium">Harsh Patel.</h1>
            <h2 className="font['Poppins'] text-custom-slate-600 mt-2 text-3xl font-semibold">I aspire to build quality products <br />using code.</h2>
            <p className="font['Poppins'] text-custom-slate-900 mt-1 text-xl font-normal">I am a full-stack developer with an inclination for machine <br/>learning. Currently, I am pursuing my Masters of Applied <br/>Computer Science at Dalhousie University, Canada.</p>
            <button className="font['Poppins'] text-custom-green-500 text-sm font-normal mt-6 rounded-full border-2 border-color pl-8 pr-8 pt-2 pb-2">
                Resume
            </button>
        </div>
    </div>

);

export default About;