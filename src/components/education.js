import * as React from "react";
import './education.css';

import Details from '../assets/details.json';
import AUlogo from '../assets/AUlogo.jpg';
import Dallogo from '../assets/Dallogo.png';

const Education = () => {

    return (
        <div className="main justify-center mt-80" id="education">
            <div className="container flex-col">
                <h1 className="font['Poppins'] text-custom-slate-200 text-3xl font-medium">My academic career</h1>
                <div className="container flex flex-row mt-8">
                    <div className="sect flex flex-col items-end">
                        <p className="font['Poppins'] text-custom-slate-600 mt-2 text-base font-normal mr-8">Jan'23 - Present</p>
                        <p className="font['Poppins'] text-custom-slate-600 mt-2 text-base font-normal mr-8">Masters in Applied Computer Science</p>
                        <img alt="Dalhousie University" className="logo mt-4 mr-8" src={Dallogo}></img>
                    </div>
                    <div className="divider bg-red-50">

                    </div>
                    <div className="sect flex flex-col justify-end">
                        <p className="font['Poppins'] text-custom-slate-600 mt-2 text-base font-normal ml-8">Aug'18 - Jun'22</p>
                        <p className="font['Poppins'] text-custom-slate-600 mt-2 text-base font-normal ml-8">B.Tech in Information and Communication Technology (CS Major)</p>
                        <img alt="Ahmedabad University" className="logo mt-4 ml-8" src={AUlogo}></img>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-12">
                    <p className="font['Poppins'] text-white-blue text-lg font-normal about-para ml-32">{Details.edoutro}</p>
                </div>
            </div>
        </div>
    );
}

export default Education;