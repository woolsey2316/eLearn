import React from "react";
type Props = {
  month: string;
  children: JSX.Element[];
};
function MonthContainer({ month, children }: Props) {
  return (
    <div className="box p-5 mb-2">
      <h2 className="pb-2 font-medium">{month}</h2>
      {children}
    </div>
  );
}

export { MonthContainer };
