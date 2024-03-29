import React, { useEffect, useCallback } from "react";

import { Activity, AlertCircle, Monitor, Grid } from "react-feather";

import { useGetDashboardQuery } from "../../features/dashboard/dashboard-slice-api";
import { useGetUserCoursesQuery } from "../../features/course/course-slice-api";
import { toPercentage } from "../../utils/utils";

function Overview() {

  const { data: courses } = useGetUserCoursesQuery()
  const { data: dashboard } = useGetDashboardQuery()

  return (
    <div className="col-span-12 mt-8">
      <div className="intro-y flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Overview</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Activity className="report-box__icon text-theme-10" />
                <div className="ml-auto">
                  <div
                    className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                    title="Total tests"
                  >
                    {dashboard === undefined ? 'loading...'
                      :
                    dashboard.total + " total exams"}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {dashboard === undefined ? 'loading...' :
                  dashboard.total !== 0
                    ? toPercentage(dashboard.completed, dashboard.total)
                    : 0}
              </div>
              <div className="text-base text-gray-600 mt-1">
                Total completion rate
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <AlertCircle className="report-box__icon text-theme-9" />
                <div className="ml-auto"></div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {dashboard?.active}
              </div>
              <div className="text-base text-gray-600 mt-1">Active Tests</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Monitor className="report-box__icon text-theme-12" />
                <div className="ml-auto"></div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {dashboard?.completed}
              </div>
              <div className="text-base text-gray-600 mt-1">
                Completed Tests
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Grid className="report-box__icon text-theme-11" />
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {courses?.length ?? "None"}
              </div>
              <div className="text-base text-gray-600 mt-1">
                Total Enrolled Courses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Overview };
