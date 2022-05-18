import React, {useCallback, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { activityActions } from '../actions'

import Activity from '../components/Activity'

function ActivityFeed() {
  const dispatch = useDispatch()
  const activities = useSelector((state) => state.activity.activityList)
  console.log("activity feed", activities)

  const fetchActivityFeed = useCallback(() => {
    dispatch(activityActions.getActivityFeed())
  },[dispatch])

  useEffect(() => {
    fetchActivityFeed()
  }, [fetchActivityFeed])

  return (
    <div className="col-span-12 sm:col-span-6">
      <div className="intro-x flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Recent Activities</h2>
      </div>
      <div className="report-timeline mt-5 relative">
        {activities.map((activity,index) => 
          <Activity key={index} activity={activity}/>
        )}
      </div>
    </div>
  )
}
export { ActivityFeed }
