import React from "react";

const StudentMenuContainer = (props) => {
  return (
    <React.Fragment>
      <div className="side-nav__devider my-6"></div>
      <ul>{props.children}</ul>
    </React.Fragment>
  );
};

export { StudentMenuContainer };
