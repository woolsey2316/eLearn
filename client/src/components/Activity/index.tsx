import React from "react";

import { format } from "date-fns";
import { Activity } from "../../types/Activity";
type Props = {
  activity: Activity;
};
function Activity({ activity }: Props) {
  return (
    <div className="intro-x relative flex items-center mb-3">
      <div className="report-timeline__image">
        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
          <img
            alt="Midone Tailwind HTML Admin Template"
            src="/images/profile-4.jpg"
          />
        </div>
      </div>
      <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
        <div className="flex items-center">
          <div className="font-medium">{activity.instructor}</div>
          <div className="text-xs text-gray-500 ml-auto">
            {format(new Date(activity.date.substring(0, 10)), "dd/MM/yyyy")}
          </div>
        </div>
        <div className="text-gray-600 mt-1">{activity.description}</div>
      </div>
    </div>
  );
}
export default Activity;
