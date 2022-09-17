import * as React from "react";
import './social-strip.css';

// import InstagramIcon from '../assets/icon_insta.svg';
// import TwitterIcon from '../assets/icon_twitter.svg';
// import GithubIcon from '../assets/icon_github.svg';
// import LinkedinIcon from '../assets/icon_linkedin.svg';

import InstagramIconWhite from '../assets/icon_insta_white.svg';
import TwitterIconWhite from '../assets/icon_twitter_white.svg';
import GithubIconWhite from '../assets/icon_github_white.svg';
import LinkedinIconWhite from '../assets/icon_linkedin_white.svg';

const SocialStrip = () => (
    <div className="flex fixed flex-col items-start justify-center h-full pl-4">
        <a href="https://www.instagram.com/harsh_249/" target="_blank" rel="noreferrer">
            <button>
                <img alt="Instagram" className="w-12 hover:w-16" src={InstagramIconWhite}></img>
            </button>
        </a>
        <a href="https://twitter.com/harshpatel_249" target="_blank" rel="noreferrer">
            <button>
                <img alt="Twitter" className="w-12 mt-4 hover:w-16" src={TwitterIconWhite}></img>
            </button>
        </a>
        <a href="https://github.com/Harshpatel249" target="_blank" rel="noreferrer">
            <button>
                <img alt="Github" className="w-12 mt-4 hover:w-16" src={GithubIconWhite}></img>
            </button>
        </a>
        <a href="https://www.linkedin.com/in/harsh-patel-696a82176/" target="_blank" rel="noreferrer">
            <button>
                <img alt="Linkedin" className="w-12 mt-4 hover:w-16" src={LinkedinIconWhite}></img>
            </button>
        </a>
    </div>
)

export default SocialStrip;