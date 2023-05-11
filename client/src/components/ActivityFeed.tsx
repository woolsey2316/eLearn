import Activity from "./Activity";
import { useGetActivitiesQuery } from "../features/activity/activity-slice-api";

function ActivityFeed() {
  const { data: activities, error, isLoading } = useGetActivitiesQuery()

  return (
    <div className="col-span-12 sm:col-span-6">
      <div className="intro-x flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Recent Activities</h2>
      </div>
      <div className="report-timeline mt-5 relative">
        {activities?.map(activity => (
          <Activity key={activity._id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
export { ActivityFeed };
