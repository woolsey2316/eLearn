import React, { useState, useEffect } from "react";

import * as Icon from "react-feather";

function Alert({ type, message }) {
  // the alert is displayed by default
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, []);
  const ALERT_SUCCESS =
    "intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-9 text-white";
  const ALERT_MODERATE =
    "intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-12 text-white";
  const ALERT_ERROR =
    "intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-6 text-white";
  const DEFAULT =
    "intro-x  rounded-md flex items-center px-5 py-4 mt-4 bg-gray-200 text-gray-600";
  switch (type) {
    case "alert-success":
      return alert ? (
        <div className={ALERT_SUCCESS}>
          <Icon.AlertCircle className="mr-4" />
          {message}
        </div>
      ) : null;
    case "alert-moderate":
      return alert ? (
        <div className={ALERT_MODERATE}>
          <Icon.AlertOctagon className="mr-4" />
          {message}
        </div>
      ) : null;
    case "alert-danger":
      return alert ? (
        <div className={ALERT_ERROR}>
          <Icon.AlertOctagon className="mr-4" />
          {message}
        </div>
      ) : null;
    case "":
      return <></>;
    default:
      return <div className={DEFAULT}></div>;
  }
}
export { Alert };
