import React from 'react'
import { Breadcrumb } from '.'
import { FullName } from '.'
import { UserIcon } from '.'

function TopBar(props) {
  return (
    <div className="top-bar">
      <Breadcrumb />
      <FullName />
      <UserIcon open={props.open} />
    </div>
  )
}

export { TopBar }
