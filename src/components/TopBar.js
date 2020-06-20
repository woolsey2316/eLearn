import React from 'react'
import { Logo } from '.'
import { Breadcrumb } from '.'
import { FullName } from '.'
import { NotificationIcon } from '.'
import { UserIcon } from '.'

import * as Icon from 'react-feather'

import logo from '../assets/dist/images/logo.svg'
import profile15 from '../assets/dist/images/profile-15.jpg'
import profile5 from '../assets/dist/images/profile-5.jpg'
import profile12 from '../assets/dist/images/profile-12.jpg'
import preview1 from '../assets/dist/images/preview-1.jpg'
import preview2 from '../assets/dist/images/preview-2.jpg'
import profile14 from '../assets/dist/images/profile-14.jpg'
import profile8 from '../assets/dist/images/profile-8.jpg'
import profile13 from '../assets/dist/images/profile-13.jpg'
import profile1 from '../assets/dist/images/profile-1.jpg'
import profile7 from '../assets/dist/images/profile-7.jpg'
import profile4 from '../assets/dist/images/profile-4.jpg'
import profile11 from '../assets/dist/images/profile-11.jpg'

function TopBar() {
  const [menu, showMenu] = React.useState(false)
  return (
    <div className="top-bar">
      <Breadcrumb />
      <FullName />
      <UserIcon />
    </div>
  )
}

export { TopBar }
