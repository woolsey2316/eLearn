import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../../components'
import { MobileMenu } from '../../components'

import { TopBar } from '../../components'

import profile2 from '../../assets/dist/images/profile-2.jpg'

function UpdateProfile(props) {
  return (
    <body className="app">
      {/*<!-- BEGIN: Mobile Menu -->*/}
      <MobileMenu />
      {/*<!-- END: Mobile Menu -->*/}
      <div className="flex">
        {/*<!-- BEGIN: Side Menu -->*/}
        {props.sideMenu}
        {/*<!-- END: Side Menu -->*/}
        {/*<!-- BEGIN: Content -->*/}
        <div className="content">
          {/*<!-- BEGIN: Top Bar -->*/}
          <TopBar />
          {/*<!-- END: Top Bar -->*/}
          <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Update Profile</h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/*<!-- BEGIN: Profile Menu -->*/}
            <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
              <div className="intro-y box mt-5">
                <div className="relative flex items-center p-5">
                  <div className="w-12 h-12 image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profile2}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium text-base">Bruce Willis</div>
                    <div className="text-gray-600">Frontend Engineer</div>
                  </div>
                  <div className="dropdown relative">
                    <a
                      className="dropdown-toggle w-5 h-5 block"
                      href="javascript:;"
                    >
                      {' '}
                      <Icon.MoreHorizontal className="w-5 h-5 text-gray-700" />{' '}
                    </a>
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
                            {' '}
                            <Icon.Activity className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            English{' '}
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            <Icon.Box className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            Indonesia
                            <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">
                              10
                            </div>
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            {' '}
                            <Icon.Layout className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            English{' '}
                          </a>
                          <a
                            href=""
                            className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                          >
                            {' '}
                            <Icon.Sidebar className="w-4 h-4 text-gray-700 mr-2" />{' '}
                            Indonesia{' '}
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
                  <a
                    className="flex items-center text-theme-1 font-medium"
                    href=""
                  >
                    {' '}
                    <Icon.Activity className="w-4 h-4 mr-2" /> Personal
                    Information{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Box className="w-4 h-4 mr-2" /> Account Settings{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Lock className="w-4 h-4 mr-2" /> Change Password{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Settings className="w-4 h-4 mr-2" /> User Settings{' '}
                  </a>
                </div>
                <div className="p-5 border-t border-gray-200">
                  <a className="flex items-center" href="">
                    {' '}
                    <Icon.Activity className="w-4 h-4 mr-2" /> Email Settings{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Box className="w-4 h-4 mr-2" /> Saved Credit Cards{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Lock className="w-4 h-4 mr-2" /> Social Networks{' '}
                  </a>
                  <a className="flex items-center mt-5" href="">
                    {' '}
                    <Icon.Settings className="w-4 h-4 mr-2" /> Tax Information{' '}
                  </a>
                </div>
                <div className="p-5 border-t flex">
                  <button
                    type="button"
                    className="button button--sm block bg-theme-1 text-white"
                  >
                    New Group
                  </button>
                  <button
                    type="button"
                    className="button button--sm border text-gray-700 ml-auto"
                  >
                    New Quick Link
                  </button>
                </div>
              </div>
            </div>
            {/*<!-- END: Profile Menu -->*/}
            <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
              {/*<!-- BEGIN: Display Information -->*/}
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-gray-200">
                  <h2 className="font-medium text-base mr-auto">
                    Display Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-4">
                      <div className="border border-gray-200 rounded-md p-5">
                        <div className="w-40 h-40 relative image-fit cursor-pointer zoom-in mx-auto">
                          <img
                            className="rounded-md"
                            alt="Midone Tailwind HTML Admin Template"
                            src={profile2}
                          />
                          <div
                            title="Remove this profile photo?"
                            className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                          >
                            {' '}
                            <Icon.X className="w-4 h-4" />{' '}
                          </div>
                        </div>
                        <div className="w-40 mx-auto cursor-pointer relative mt-5">
                          <button
                            type="button"
                            className="button w-full bg-theme-1 text-white"
                          >
                            Change Photo
                          </button>
                          <input
                            type="file"
                            className="w-full h-full top-0 left-0 absolute opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                      <div>
                        <label>Display Name</label>
                        <input
                          type="text"
                          className="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                          placeholder="Input text"
                          value="Bruce Willis"
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <label>Nearest MRT Station</label>
                        <div className="mt-2">
                          <select className="select2 w-full">
                            <option value="1">Admiralty</option>
                            <option value="2">Aljunied</option>
                            <option value="3">Ang Mo Kio</option>
                            <option value="4">Bartley</option>
                            <option value="5">Beauty World</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-3">
                        <label>Postal Code</label>
                        <div className="mt-2">
                          <select className="select2 w-full">
                            <option value="1">
                              018906 - 1 STRAITS BOULEVARD SINGA...
                            </option>
                            <option value="2">
                              018910 - 5A MARINA GARDENS DRIVE...
                            </option>
                            <option value="3">
                              018915 - 100A CENTRAL BOULEVARD...
                            </option>
                            <option value="4">
                              018925 - 21 PARK STREET MARINA...
                            </option>
                            <option value="5">
                              018926 - 23 PARK STREET MARINA...
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-3">
                        <label>Address</label>
                        <textarea
                          className="input w-full border mt-2"
                          placeholder="Adress"
                        >
                          10 Anson Road, International Plaza, #10-11, 079903
                          Singapore, Singapore
                        </textarea>
                      </div>
                      <button
                        type="button"
                        className="button w-20 bg-theme-1 text-white mt-3"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- END: Display Information -->*/}
              {/*<!-- BEGIN: Personal Information -->*/}
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-gray-200">
                  <h2 className="font-medium text-base mr-auto">
                    Personal Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-6">
                      <div>
                        <label>Email</label>
                        <input
                          type="text"
                          className="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                          placeholder="Input text"
                          value="brucewillis@left4code.com"
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <label>Name</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="Bruce Willis"
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <label>ID Type</label>
                        <select className="input w-full border mt-2">
                          <option>IC</option>
                          <option>FIN</option>
                          <option>Passport</option>
                        </select>
                      </div>
                      <div className="mt-3">
                        <label>ID Number</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="357821204950001"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <div>
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="65570828"
                        />
                      </div>
                      <div className="mt-3">
                        <label>Address</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                        />
                      </div>
                      <div className="mt-3">
                        <label>Bank Name</label>
                        <div className="mt-2">
                          <select className="select2 w-full">
                            <option value="1">SBI - STATE BANK OF INDIA</option>
                            <option value="1">CITI BANK - CITI BANK</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-3">
                        <label>Bank Account</label>
                        <input
                          type="text"
                          className="input w-full border mt-2"
                          placeholder="Input text"
                          value="DBS Current 011-903573-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a href="" className="text-theme-6 flex items-center">
                      {' '}
                      <Icon.Trash2 className="w-4 h-4 mr-1" /> Delete Account{' '}
                    </a>
                    <button
                      type="button"
                      className="button w-20 bg-theme-1 text-white ml-auto"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              {/*<!-- END: Personal Information -->*/}
            </div>
          </div>
        </div>
        {/*<!-- END: Content -->*/}
      </div>
    </body>
  )
}

export { UpdateProfile }
