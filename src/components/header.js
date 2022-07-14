import * as React from "react";
import './header.css';

const Header = () => (
  <header>
    <div className="header items-center justify-end">
      <button className="mr-10">
        <p className="font-['Poppins] text-white-blue text-base font-normal">About</p>
      </button>
      <button className="mr-10">
        <p className="font-['Poppins] text-white-blue text-base font-normal">Work</p>
      </button>
      <button className="mr-10">
        <p className="font-['Poppins] text-white-blue text-base font-normal">Education</p>
      </button >
      <button className="mr-10">
        <p className="font-['Poppins] text-white-blue text-base font-normal">Projects</p>
      </button>
      <button className="mr-10">
        <p className="font-['Poppins] text-white-blue text-base font-normal">Get in touch</p>
      </button>
    </div>

  </header>
)

export default Header
