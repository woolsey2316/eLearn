import React from 'react'

function Logo() {
  return (
    <a href="/" class="-intro-x hidden md:flex">
      <img
        alt="Midone Tailwind HTML Admin Template"
        class="w-6"
        src="dist/images/logo.svg"
      />
      <span class="text-white text-lg ml-3">
        Mid<span class="font-medium">one</span>
      </span>
    </a>
  )
}

export { Logo }
