import * as React from "react";
import './work.css';

import Details from '../assets/details.json';

const Work = () => {
    const [tab,setTab] = React.useState(0);
    return (
        <div className="main justify-center mt-80 mb-80" id="work">
            <div className="container flex-col">
                <h1 className="font['Poppins'] text-custom-slate-200 text-3xl font-medium">Where I've worked!</h1>
                <div className="container justify-between mt-8">
                    <div className="flex flex-col w-64">
                    {
                        Details.workTitles.map((title, ind) => {
                            return (
                                <button className={`font['Poppins'] text-base pl-4 font-normal justify-start items-center flex ${tab===ind ? "work-title-selected text-custom-green-500":"work-title text-custom-slate-900"}`} onClick={() => setTab(ind)}>{title}</button>
                            );
                        })
                    }
                    </div>
                    <div>
                        <p className="font['Poppins'] text-custom-slate-900 mt-2 text-base font-normal">{tab}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Work;