import React from 'react'
import profile from '../assets/dist/images/profile-8.jpg'

function Profile() {
  const user = JSON.parse(localStorage.getItem('user')).user
  return (
    <div className="relative flex items-center p-5">
      <div className="w-12 h-12 image-fit">
        <img
          alt="Midone Tailwind HTML Admin Template"
          className="rounded-full"
          src={profile}
        />
      </div>
      <div className="ml-4 mr-auto">
        <div className="font-medium text-white">{user.name}</div>
        <div className="text-gray-600">Student</div>
      </div>
    </div>
  )
}
export { Profile }
