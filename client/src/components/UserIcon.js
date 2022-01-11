import React from 'react'
import * as Icon from 'react-feather'

function UserIcon(props) {
  const [isPressed, setPressed] = React.useState(false)
  return (
    <div className="intro-x dropdown w-8 h-8 relative">
      <div
        onClick={() => setPressed(!isPressed)}
        className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
      >
        <img alt="Midone Tailwind HTML Admin Template" src='/images/profile.png' />
      </div>
      <div
        className={
          'dropdown-box mt-10 absolute w-56 top-0 right-0 z-20' +
          (isPressed ? ' show' : '')
        }
      >
        <div className="dropdown-box__content box bg-theme-38 text-white">
          <div className="p-4 border-b border-theme-40">
            <div className="text-xs text-theme-41">
              {localStorage.getItem('EMAIL')}
            </div>
          </div>
          <div className="p-2">
            <a
              href="/student/profile/update_profile"
              className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
            >
              <Icon.User className="w-4 h-4 mr-2" /> Update Profile
            </a>
            <a
              href="/student/profile/change_password"
              className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
            >
              <Icon.Lock className="w-4 h-4 mr-2" /> Reset Password
            </a>
          </div>
          <div className="p-2 border-t border-theme-40">
            <button
              onClick={props.open}
              className="w-full flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
            >
              <Icon.ToggleRight className="w-4 h-4 mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { UserIcon }
