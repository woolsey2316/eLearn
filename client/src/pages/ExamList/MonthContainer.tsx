import React from "react";
type Props = {
  month: string;
  children: JSX.Element[];
};
function MonthContainer({ month, children }: Props) {
  return (
    children.length > 0 ?
    <div className="box p-5 mb-2">
      <h2 className="pb-2 font-medium">{month}</h2>
      {children}
    </div>
    :
    <></>
  );
}

export { MonthContainer };
