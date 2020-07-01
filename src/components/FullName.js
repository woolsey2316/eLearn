import React from 'react'

function FullName({ firstName, lastName }) {
  const user = JSON.parse(localStorage.getItem('user')).user
  return (
    <div className="flex">
      <h6 className="font-medium text-gray-700 leading-none mt-auto mb-auto mr-4">
        {`${user.email} | ${user.name}`}
      </h6>
      <h6 className="font-medium leading-none mt-3">
        {localStorage.getItem('fullname')}
      </h6>
    </div>
  )
}

export { FullName }
