import React, { useState, useEffect } from "react";

import * as Icon from "react-feather";
import { AlertLevel } from "../enums/Alert";

type Props = {
  type: AlertLevel | undefined;
  message: string;
};
function Alert({ type, message }: Props) {
  // the alert is displayed by default
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, []);
  switch (type) {
    case AlertLevel.alert_success:
      return alert ? (
        <div className="intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-9 text-white">
          <Icon.AlertCircle className="mr-4" />
          {message}
        </div>
      ) : null;
    case AlertLevel.alert_moderate:
      return alert ? (
        <div className="intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-12 text-white">
          <Icon.AlertOctagon className="mr-4" />
          {message}
        </div>
      ) : null;
    case AlertLevel.alert_danger:
      return alert ? (
        <div className="intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-6 text-white">
          <Icon.AlertOctagon className="mr-4" />
          {message}
        </div>
      ) : null;
    default:
      return (
        <div className="intro-x  rounded-md flex items-center px-5 py-4 mt-4 bg-gray-200 text-gray-600"></div>
      );
  }
}
export { Alert };
