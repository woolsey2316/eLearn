import React from 'react'
import * as Icon from "react-feather"
interface Props {
  children: string
  removeSection: (section:string, e: React.MouseEvent<SVGElement, MouseEvent>) => void
}
function Pillbutton({children, removeSection}: Props) {
  return (
    <div className="inline-block p-3 rounded-full bg-gray-200 mr-2">
      <div className="flex">
        <div>{children}</div>
        <div className="float-right ml-2 flex items-center">
          <Icon.X onClick={(e) => removeSection(children, e)} className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
    </div>
   );
}

export default Pillbutton;