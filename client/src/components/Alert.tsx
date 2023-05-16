import React, { useEffect } from "react";

import * as Icon from "react-feather";
import { AlertLevel } from "../enums/Alert";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { alertActions } from "../actions/alert.actions";

function Alert() {
  const alerts = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch()
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    if (alerts.message) {
      setTimeout(() => {
        dispatch(alertActions.clear())
      }, 3000);
    }
    // return () => setExpired(false)
  }, [alerts]);
  switch (alerts.type) {
    case AlertLevel.alert_success:
      return (
        <div className="intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-9 text-white">
          <Icon.AlertCircle className="mr-4" />
          {alerts.message}
        </div>
      )
    case AlertLevel.alert_moderate:
      return (
        <div className="intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-12 text-white">
          <Icon.AlertOctagon className="mr-4" />
          {alerts.message}
        </div>
      )
    case AlertLevel.alert_danger:
      return (
        <div className="intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-6 text-white">
          <Icon.AlertOctagon className="mr-4" />
          {alerts.message}
        </div>
      )
    default:
      return <></>;
  }
}
export { Alert };
