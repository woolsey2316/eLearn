import React from "react";

import * as Icon from "react-feather";

import { useGetMonthlyDashboardQuery } from "../../features/dashboard/dashboard-slice-api";
import { toPercentage } from "../../utils/utils";

function ThisMonth() {
  const { data: monthlyDashboardData } = useGetMonthlyDashboardQuery()

  return (
    <div className="col-span-12 mt-8">
      <div className="intro-y flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">This Month</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Icon.Layers className="report-box__icon text-theme-10" />
                <div className="ml-auto">
                  <div
                    className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                    title="Total assignments"
                  >
                    {monthlyDashboardData === undefined ?
                      'loading...'
                        :
                      monthlyDashboardData.total + " total exams"}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {monthlyDashboardData === undefined ? 'loading...'
                : monthlyDashboardData?.total !== 0
                    ? toPercentage(monthlyDashboardData?.completed, monthlyDashboardData?.total)
                    : 0}
              </div>
              <div className="text-base text-gray-600 mt-1">Total completion rate</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Icon.Grid className="report-box__icon text-theme-1" />
                <div className="ml-auto">
                  <div
                    className="report-box__indicator bg-theme-12 tooltip cursor-pointer"
                    title="Total Multiple Choice Tests"
                  >
                    {monthlyDashboardData?.total}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {monthlyDashboardData?.active}
              </div>
              <div className="text-base text-gray-600 mt-1">
                Active tests
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Icon.Monitor className="report-box__icon text-theme-12" />
                <div className="ml-auto">
                  <div
                    className="report-box__indicator bg-theme-9 tooltip cursor-pointer text-center"
                    title="Total exams"
                  >
                    {monthlyDashboardData?.total}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {monthlyDashboardData?.completed}
              </div>
              <div className="text-base text-gray-600 mt-1">Completed</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Icon.Grid className="report-box__icon text-theme-11" />
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {monthlyDashboardData?.total}
              </div>
              <div className="text-base text-gray-600 mt-1">Monthly Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ThisMonth };
