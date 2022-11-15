import React from "react";
import * as Icon from "react-feather";

function NotificationIcon() {
  const [isPressed, setPressed] = React.useState(false);
  return (
    <div className="intro-x dropdown relative mr-auto sm:mr-6">
      <div
        onClick={() => setPressed(!isPressed)}
        className="dropdown-toggle notification notification--bullet cursor-pointer"
      >
        <Icon.Bell className="notification__icon" />
      </div>
      <div
        className={
          "notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0" +
          (isPressed ? " show" : "")
        }
      >
        <div className="notification-content__box dropdown-box__content box">
          <div className="notification-content__title">Notifications</div>
          <div className="cursor-pointer relative flex items-center ">
            <div className="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="/images/profile-15.jpg"
              />
              <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-2 overflow-hidden">
              <div className="flex items-center">
                <a href="/" className="font-medium truncate mr-5">
                  Robert De Niro
                </a>
                <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                  01:10 PM
                </div>
              </div>
              <div className="w-full truncate text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem
              </div>
            </div>
          </div>
          <div className="cursor-pointer relative flex items-center mt-5">
            <div className="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="/images/profile-5.jpg"
              />
              <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-2 overflow-hidden">
              <div className="flex items-center">
                <a href="/" className="font-medium truncate mr-5">
                  Johnny Depp
                </a>
                <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                  06:05 AM
                </div>
              </div>
              <div className="w-full truncate text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem
              </div>
            </div>
          </div>
          <div className="cursor-pointer relative flex items-center mt-5">
            <div className="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="/images/profile-12.jpg"
              />
              <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-2 overflow-hidden">
              <div className="flex items-center">
                <a href="/" className="font-medium truncate mr-5">
                  Johnny Depp
                </a>
                <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                  01:10 PM
                </div>
              </div>
              <div className="w-full truncate text-gray-600">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 20
              </div>
            </div>
          </div>
          <div className="cursor-pointer relative flex items-center mt-5">
            <div className="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="/images/profile-12.jpg"
              />
              <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-2 overflow-hidden">
              <div className="flex items-center">
                <a href="/" className="font-medium truncate mr-5">
                  Kevin Spacey
                </a>
                <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                  06:05 AM
                </div>
              </div>
              <div className="w-full truncate text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#039;s standard
                dummy text ever since the 1500
              </div>
            </div>
          </div>
          <div className="cursor-pointer relative flex items-center mt-5">
            <div className="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="/images/profile-14.jpg"
              />
              <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-2 overflow-hidden">
              <div className="flex items-center">
                <a href="/" className="font-medium truncate mr-5">
                  Brad Pitt
                </a>
                <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                  06:05 AM
                </div>
              </div>
              <div className="w-full truncate text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#039;s standard
                dummy text ever since the 1500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NotificationIcon };
