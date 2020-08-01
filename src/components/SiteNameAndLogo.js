import React from 'react';
import logo from '../assets/dist/images/logo.svg'

const  SiteNameAndLogo = () => {
  return ( 
    <a href="/student/dashboard" className="intro-x flex items-center pl-5 pt-4">
      <img
        alt="Midone Tailwind HTML Admin Template"
        className="w-6"
        src={logo}
      />
      <span className="hidden xl:block text-white text-lg ml-3">
        e<span className="font-medium">Learn</span>
      </span>
    </a> 
  );
}
 
export { SiteNameAndLogo }
