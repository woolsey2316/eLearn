import React from "react";
type Props = {
  children: JSX.Element[];
};
const StudentMenuContainer = (props: Props) => {
  return (
    <React.Fragment>
      <div className="side-nav__devider my-6"></div>
      <ul>{props.children}</ul>
    </React.Fragment>
  );
};

export { StudentMenuContainer };
