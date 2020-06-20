import React from 'react'

function FullName({ firstName, lastName }) {
  return (
    <div className="flex">
      <h6 class="font-medium leading-none mt-auto mb-auto mr-4">
        {localStorage.getItem('email')}
      </h6>
      <h6 class="font-medium leading-none mt-3">
        {localStorage.getItem('fullname')}
      </h6>
    </div>
  )
}

export { FullName }
