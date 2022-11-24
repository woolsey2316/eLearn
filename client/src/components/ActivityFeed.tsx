import React, { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import { activityActions } from "../actions";

import Activity from "./Activity";

function ActivityFeed() {
  const dispatch = useAppDispatch();
  const activities = useAppSelector((state) => state.activity.activityList);

  const fetchActivityFeed = useCallback(() => {
    dispatch(activityActions.getActivityFeed());
  }, [dispatch]);

  useEffect(() => {
    fetchActivityFeed();
  }, [fetchActivityFeed]);

  return (
    <div className="col-span-12 sm:col-span-6">
      <div className="intro-x flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Recent Activities</h2>
      </div>
      <div className="report-timeline mt-5 relative">
        {activities?.map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
}
export { ActivityFeed };
