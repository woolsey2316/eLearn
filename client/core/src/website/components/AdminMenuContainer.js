import React from 'react';

const AdminMenuContainer = (props) => {
  return ( 
    <nav className="side-nav">
      <div className="side-menu font-lg">Admin</div>
      <div className="side-nav__devider mb-6"></div>
      <ul> 
        {props.children}
      </ul>
    </nav>
  );
}
 
export { AdminMenuContainer };