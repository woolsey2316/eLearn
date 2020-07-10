import React from 'react'

function DateIcon(props) {
  var date = new Date(props.due)
  return (
    <div className="m-3 relative text-gray-700 border border-gray-300 box overflow-hidden">
      <div className="mt-3 sm:mt-0 text-xl relative bg-gray-700 text-white text-center">
        {new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date)}
      </div>
      <div className="text-gray-700 box my-3 mx-5">
        <div className="flex flex-col justify-center">
          <h2 className="my-auto font-bold text-3xl leading-none text-center font-medium">
            {date.getDate()}
          </h2>
        </div>
      </div>
    </div>
  )
}

export { DateIcon }
