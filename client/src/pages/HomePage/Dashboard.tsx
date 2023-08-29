import React from 'react'
import { CalendarContainer } from '../../components'
import { ActivityFeed } from '../../components'
import { Overview } from './Overview'
import { ThisMonth } from './ThisMonth'
import PageWithSideMenu from '../PageWithSideMenu/PageWithSideMenu'

function Dashboard() {
  return (
    <PageWithSideMenu>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-6">
          <Overview />
        </div>
        <div className="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-6">
          <ThisMonth />
        </div>
        <div className="col-span-12 xxl:col-span-12 xxl:border-l border-theme-5 -mb-10 pb-10">
          <div className="grid grid-cols-12 sm:col-span-6 gap-6 mt-5">
            <ActivityFeed />
            <CalendarContainer />
          </div>
        </div>
      </div>
    </PageWithSideMenu>
  )
}

export { Dashboard }
