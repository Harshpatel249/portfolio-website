import * as React from "react";
import './get-in-touch.css';
import { useMediaQuery } from 'react-responsive';

import Details from '../assets/details.json';

const GetInTouch = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
    return (
        isMobile ?
            <div className="main flex-col items-center mt-32" id="get-in-touch">
                <h1 className="font['Poppins'] text-custom-slate-200 text-xl font-medium">Ping Me!</h1>
                <p className="font['Poppins'] text-custom-slate-600 text-sm font-normal mt-4 text-center">{Details.jobpref}</p>
                <a href="mailto:harshpatelfc22@gmail.com" target="_blank" rel="noreferrer">
                    <button className="font['Poppins'] text-custom-green-500 text-sm font-normal mt-8 rounded-full border-2 border-color pl-8 pr-8 pt-2 pb-2">
                        Say hi!
                    </button>
                </a>
            </div>
            :
            <div className="main justify-center mt-80" id="get-in-touch">
                <div className="container-get flex-col items-center">
                    <h1 className="font['Poppins'] text-custom-slate-200 text-3xl font-medium">Ping Me!</h1>
                    <p className="font['Poppins'] text-custom-slate-600 text-lg font-normal mt-4 text-center">{Details.jobpref}</p>
                    <a href="mailto:harshpatelfc22@gmail.com" target="_blank" rel="noreferrer">
                        <button className="font['Poppins'] text-custom-green-500 text-sm font-normal mt-8 rounded-full border-2 border-color pl-8 pr-8 pt-2 pb-2">
                            Say hi!
                        </button>
                    </a>
                </div>
            </div>
    );
}

export default GetInTouch;