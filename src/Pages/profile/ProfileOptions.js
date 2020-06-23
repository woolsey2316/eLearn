import React from 'react'

import * as Icon from 'react-feather'

import profile8 from '../../assets/dist/images/profile-8.jpg'

function ProfileOptions() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/*<!-- BEGIN: Profile Menu -->*/}
        <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
          <div className="intro-y box mt-5">
            <div className="relative flex items-center p-5">
              <div className="dropdown relative">
              <h2 className="font-medium text-base mr-auto">Useful Links</h2>
                <div className="dropdown-box mt-5 absolute w-56 top-0 right-0 z-20">
                  <div className="dropdown-box__content box">
                    <div className="p-4 border-b border-gray-200 font-medium">
                      Export Options
                    </div>
                    <div className="p-2">
                      <a
                        href=""
                        className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                      >
                        
                        <Icon.Activity className="w-4 h-4 text-gray-700 mr-2" />
                        English
                      </a>
                      <a
                        href=""
                        className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                      >
                        <Icon.Box className="w-4 h-4 text-gray-700 mr-2" />
                        Indonesia
                        <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">
                          10
                        </div>
                      </a>
                      <a
                        href=""
                        className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                      >
                        
                        <Icon.Layout className="w-4 h-4 text-gray-700 mr-2" />
                        English
                      </a>
                      <a
                        href=""
                        className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                      >
                        
                        <Icon.Sidebar className="w-4 h-4 text-gray-700 mr-2" />
                        Indonesia
                      </a>
                    </div>
                    <div className="px-3 py-3 border-t border-gray-200 font-medium flex">
                      <button
                        type="button"
                        className="button button--sm bg-theme-1 text-white"
                      >
                        Settings
                      </button>
                      <button
                        type="button"
                        className="button button--sm bg-gray-200 text-gray-600 ml-auto"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-gray-200">
              <a className="flex items-center mt-5" href="/student/exam_list">
                
                <Icon.Box className="w-4 h-4 mr-2" /> Exam List
              </a>
              <a className="flex items-center mt-5" href="/student/grades">
                
                <Icon.Edit className="w-4 h-4 mr-2" /> Grades
              </a>
              <a className="flex items-center mt-5" href="/student/grades">
                
                <Icon.Airplay className="w-4 h-4 mr-2" /> Dashboard
              </a>
              <a className="flex items-center mt-5" href="/login">
                
                <Icon.Settings className="w-4 h-4 mr-2" /> Logout
              </a>
            </div>

            
          </div>
        </div>
        {/*<!-- END: Profile Menu -->*/}
        <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
          {/*<!-- BEGIN: Latest Tasks -->*/}
          <div className="intro-y box mt-5">
            <div className="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200">
              <h2 className="font-medium text-base mr-auto">Latest Tasks</h2>
              <div className="dropdown relative ml-auto sm:hidden">
                <a
                  className="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                >
                  
                  <Icon.MoreHorizontal className="w-5 h-5 text-gray-700" />
                </a>
                <div className="nav-tabs dropdown-box mt-5 absolute w-40 top-0 right-0 z-20">
                  <div className="dropdown-box__content box p-2">
                    
                    <a
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#new"
                      className="block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                    >
                      New
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#last-week"
                      className="block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                    >
                      Last Week
                    </a>
                  </div>
                </div>
              </div>
              <div className="nav-tabs ml-auto hidden sm:flex">
                
                <a
                  data-toggle="tab"
                  data-target="#latest-tasks-new"
                  href="javascript:;"
                  className="py-5 ml-6 active"
                >
                  New
                </a>
                <a
                  data-toggle="tab"
                  data-target="#latest-tasks-last-week"
                  href="javascript:;"
                  className="py-5 ml-6"
                >
                  Last Week
                </a>
              </div>
            </div>
            <div className="p-5">
              <div className="tab-content">
                <div className="tab-content__pane active" id="latest-tasks-new">
                  <div className="flex items-center">
                    <div className="border-l-2 border-theme-1 pl-4">
                      <a href="" className="font-medium">
                        Create New Campaign
                      </a>
                      <div className="text-gray-600">10:00 AM</div>
                    </div>
                    <input
                      className="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="border-l-2 border-theme-1 pl-4">
                      <a href="" className="font-medium">
                        Meeting With Client
                      </a>
                      <div className="text-gray-600">02:00 PM</div>
                    </div>
                    <input
                      className="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="border-l-2 border-theme-1 pl-4">
                      <a href="" className="font-medium">
                        Create New Repository
                      </a>
                      <div className="text-gray-600">04:00 PM</div>
                    </div>
                    <input
                      className="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export { ProfileOptions }
