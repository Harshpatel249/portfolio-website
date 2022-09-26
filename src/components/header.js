import * as React from "react";
import './header.css';

const Header = () => (
  <header>
    <div className="header items-center justify-end">
      <button className="mr-10" onClick={scroll}>
        <p className="font-['Poppins] text-white-blue text-base font-normal">About</p>
      </button>
      <button className="mr-10" onClick={scrollToWork}>
        <p className="font-['Poppins] text-white-blue text-base font-normal">Work</p>
      </button>
      <button className="mr-10" onClick={scrollToEducation}>
        <p className="font-['Poppins] text-white-blue text-base font-normal">Education</p>
      </button >
      <button className="mr-10" onClick={scrollToProjects}>
        <p className="font-['Poppins] text-white-blue text-base font-normal">Projects</p>
      </button>
      <button className="mr-10">
        <p className="font-['Poppins] text-white-blue text-base font-normal">Get in touch</p>
      </button>
    </div>

  </header>
)

const scroll = () => {
  const section = document.querySelector('#about-me');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollToWork = () => {
  const section = document.querySelector('#work');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollToEducation = () => {
  const section = document.querySelector('#education');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollToProjects = () => {
  const section = document.querySelector('#projects');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default Header
