import * as React from "react";
import './work.css';

import Details from '../assets/details.json';

const Work = () => {
    const [tab, setTab] = React.useState(0);
    return (
        <div className="main justify-center mt-80" id="work">
            <div className="container flex-col ">
                <h1 className="font['Poppins'] text-custom-slate-200 text-3xl font-medium">Where I've worked</h1>
                <div className="container justify-start mt-8 ">
                    <div className="flex flex-col ">
                        {
                            Details.workTitles.map((title, ind) => {
                                return (
                                    <button className={`font['Poppins'] text-base pl-4 font-normal justify-start items-center flex ${tab === ind ? "work-title-selected text-custom-green-500" : "work-title text-custom-slate-900"}`} onClick={() => setTab(ind)}>{title}</button>
                                );
                            })
                        }
                    </div>
                    <div className="flex flex-col ml-8 flex-grow ">
                        <div className="flex flex-row ">
                            <h2 className="font['Poppins'] text-custom-slate-600 mt-2 text-base font-normal">{Details.posts[tab]}</h2>
                            <a href={Details.link[tab]} target="_blank" rel="noreferrer"><p className="font['Poppins'] text-white-blue mt-2 text-base font-normal ml-2">@{Details.workTitles[tab]}</p></a>
                        </div>
                        <p className="font['Poppins'] text-custom-slate-900 mt-2 text-sm font-normal ">{Details.timeline[tab]}</p>
                        <ul className="list-disc flex flex-col ml-4 mt-4 ">
                            {
                                Details.workpointers[tab].map((point, ind) => {
                                    return (
                                        <li className="font['Poppins'] text-custom-slate-900 mt-2 text-base font-normal">{point}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Work;