import React from 'react'
import logo from '../assets/images/logo.svg'
import illustration from '../assets/images/illustration.svg'

export default () => {
  return (
    <div className="hidden xl:flex flex-col min-h-screen">
      <a href="" className="-intro-x flex items-center pt-5">
        <img alt="Midone Tailwind HTML Admin Template" className="w-6" src={logo}/>
        <span className="text-white text-lg ml-3"> e<span className="font-medium">Learn</span> </span>
      </a>
      <div className="my-auto">
        <img alt="Midone Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16" src={illustration}/>
        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
          A few more clicks to 
          <br/>
          sign up to your account.
        </div>
        <div className="-intro-x mt-5 text-lg text-white">Manage all your online exams in one place</div>
      </div>
  </div>
  )
}