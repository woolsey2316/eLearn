import React from 'react'

function PageNotFound() {
  return (
    <div className="app">
      <div className="container">
        <div className="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
          <div className="-intro-x lg:mr-20">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="h-48 lg:h-auto"
              src='/images/error-illustration.svg'
            />
          </div>
          <div className="text-white mt-10 lg:mt-0">
            <div className="intro-x text-6xl font-medium">404</div>
            <div className="intro-x text-xl lg:text-3xl font-medium">
              Oops. This page has gone missing.
            </div>
            <div className="intro-x text-lg mt-3 mb-10">
              You may have mistyped the address or the page may have moved.
            </div>
            <a
              href="/student/dashboard"
              className="intro-x border border-white mt-20 p-4"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export { PageNotFound }
