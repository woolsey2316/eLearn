import React from 'react'

function MonthContainer({month, children}) {
  return (
    <div className="box p-5 mb-2">
      <h2 className="pb-2">{month}</h2>
      {children}
    </div>
  )
}

export { MonthContainer }