import React from 'react'
import * as Icon from "react-feather";

function ProfileSettings() {
  return (
    <div className="intro-y box col-span-4 lg:col-span-3">
      <div className="relative flex items-center pt-5 pb-5 pl-5">
        <div className="dropdown relative">
          <h2 className="text-lg font-medium">Profile Settings</h2>
        </div>
      </div>
      <div className="p-5 border-t border-gray-200">
        <a
          className="flex items-center mb-5"
          href="/student/profile/update_profile"
        >
          <Icon.Box className="w-4 h-4 mr-2" /> Update Profile
        </a>
        <a
          className="flex items-center mb-5"
          href="/student/profile/change_password"
        >
          <Icon.Lock className="w-4 h-4 mr-2" /> Change Password
        </a>
      </div>
    </div>
   );
}

export default ProfileSettings;