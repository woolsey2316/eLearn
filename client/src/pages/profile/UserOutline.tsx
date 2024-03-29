import React from 'react'
import * as Icon from "react-feather";
import { useGetMeQuery } from '../../features/user/user-api';

function UserOutline() {
  const { data: user } = useGetMeQuery();
  const role = ["Student", "Admin"];

  return (
    <div className="intro-y box col-span-4 lg:col-span-5 px-5 pt-5">
      <div className="flex flex-col lg:flex-row pb-5 -mx-5">
        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="rounded-full"
              src="/images/profile-8.png"
            />
          </div>
          <div className="ml-5">
            <div className="sm:whitespace-normal font-medium text-lg break-word">
              {user?.name}
            </div>
            <div className="text-gray-600">
              {user && user.roleId != null ? role[user.roleId] : null}
            </div>
            <div className="flex mt-1">
              <div
                className="truncate sm:whitespace-normal flex items-center text-theme-9 tooltip"
                title="Email verified"
              >
                {true ? (
                  <Icon.Mail className="w-4 h-4 mr-2 text-theme-9" />
                ) : (
                  <Icon.Mail className="w-4 h-4 mr-2 text-theme-11" />
                )}
              </div>
              <div
                className="truncate sm:whitespace-normal flex items-center tooltip"
                title="Mobile verified"
              >
                {true ? (
                  <Icon.Phone className="w-4 h-4 mr-2 text-theme-9" />
                ) : (
                  <Icon.Phone className="w-4 h-4 mr-2 text-theme-11" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
          <div className="truncate sm:whitespace-normal flex items-center">
            <Icon.Mail className="w-4 h-4 mr-2" />
            {user?.email}
          </div>
          <div className="truncate sm:whitespace-normal flex items-center mt-3">
            <Icon.Home className="w-4 h-4 mr-2" /> {user?.address}
          </div>
          <div className="truncate sm:whitespace-normal flex items-center mt-3">
            <Icon.Phone className="w-4 h-4 mr-2" /> {user?.mobile}
          </div>
          <div className="truncate sm:whitespace-normal flex items-center mt-3">
            <Icon.Book className="w-4 h-4 mr-2" /> {user?.school}
          </div>
          <div className="truncate sm:whitespace-normal flex items-center mt-3">
            <Icon.Briefcase className="w-4 h-4 mr-2" />
            {`${user?.state}, ${user?.area}`}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
   );
}

export default UserOutline;