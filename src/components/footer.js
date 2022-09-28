import * as React from "react";
import './footer.css';
import { useMediaQuery } from 'react-responsive';

import InstagramIconWhite from '../assets/icon_insta_white.svg';
import TwitterIconWhite from '../assets/icon_twitter_white.svg';
import GithubIconWhite from '../assets/icon_github_white.svg';
import LinkedinIconWhite from '../assets/icon_linkedin_white.svg';

const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
    return (
        isMobile ?
            <div className="main flex-col items-center mt-32 mb-4">
                <div className="flex flex-row">
                    <a href="https://www.instagram.com/harsh_249/" target="_blank" rel="noreferrer">
                        <button>
                            <img alt="Instagram" className="w-6 mr-2" src={InstagramIconWhite}></img>
                        </button>
                    </a>
                    <a href="https://twitter.com/harshpatel_249" target="_blank" rel="noreferrer">
                        <button>
                            <img alt="Twitter" className="w-6 mr-2" src={TwitterIconWhite}></img>
                        </button>
                    </a>
                    <a href="https://github.com/Harshpatel249" target="_blank" rel="noreferrer">
                        <button>
                            <img alt="Github" className="w-6 mr-2" src={GithubIconWhite}></img>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-patel-696a82176/" target="_blank" rel="noreferrer">
                        <button>
                            <img alt="Linkedin" className="w-6 " src={LinkedinIconWhite}></img>
                        </button>
                    </a>
                </div>
                <p className="font['Poppins'] text-custom-slate-600 text-sm font-normal mt-1 text-center">Built with ❤️ by Harsh</p>
            </div>
            :
            <div className="main justify-center mt-80 mb-4">
                <div className="container-get flex-col items-center">
                    <p className="font['Poppins'] text-custom-slate-600 text-sm font-normal mt-4 text-center">Built with ❤️ by Harsh</p>
                </div>
            </div>
    );
}

export default Footer;