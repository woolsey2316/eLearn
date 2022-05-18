import React, { useEffect, useState } from 'react'

import { history } from '../../helpers'

import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../actions'
import { alertActions } from '../../actions'

import { Alert } from '../../components'

function PersonalInformation() {
  const alert = useSelector((state) => state.alert)
  const user = useSelector((state) => state.users.user)
  const dispatch = useDispatch()

  const [userDetails, setDetails] = useState({
    address: '',
    area: '',
    className: '',
    gender: '',
    email: '',
    mobile: '',
    name: '',
    pincode: '',
    school: '',
    state: '',
  })

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear())
    })
  }, [dispatch])

  useEffect(() => {
    dispatch(userActions.getUserDetails())
    
  },[dispatch])

  useEffect(() => {
    setDetails(user)
  },[user])

  function handleChange(event) {
    const { name, value } = event.target
    setDetails(userDetails => ({
      ...userDetails,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("submitted user", userDetails)
    dispatch(userActions.setUserDetails(userDetails))
  }
  return (
    <div className="intro-y box lg:mt-5">
      <div className="flex items-center p-5 border-b border-gray-200">
        <h2 className="font-medium text-base mr-auto">Personal Information</h2>
      </div>
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 xl:col-span-6">
              <div>
                <label>Email</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                  placeholder="Email"
                  value={userDetails?.email}
                  name="email"
                  disabled
                />
              </div>
              <div className="mt-3">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-full border mt-2"
                  placeholder="Full Name"
                  value={userDetails?.name}
                  name="name"
                  disabled
                />
              </div>
              <div className="mt-3">
                <label>Class Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-full border mt-2"
                  placeholder="Class Name"
                  value={userDetails?.className}
                  name="className"
                />
              </div>
              <div className="mt-3">
                <label>School</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-full border mt-2"
                  placeholder="School"
                  value={userDetails?.school}
                  name="school"
                />
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <div>
                <label>Mobile Number</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-full border mt-2"
                  placeholder="Mobile Number"
                  value={userDetails?.mobile}
                  name="mobile"
                />
              </div>
              <div className="mt-3">
                <label>Address</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-full border mt-2"
                  placeholder="Address"
                  value={userDetails?.address}
                  name="address"
                />
              </div>
              <div className="mt-3">
                <label>Area</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-full border mt-2"
                  placeholder="Area"
                  value={userDetails?.area}
                  name="area"
                />
              </div>
              <div className="mt-3 flex flex-col">
                <label>State</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="input w-32 border mt-2"
                  placeholder="State"
                  value={userDetails?.state}
                  name="state"
                />
              </div>
            </div>
            <div className="col-start-7 col-span-3">
              <button
                className="button w-40 rounded-full mr-1 mb-2 bg-theme-1 text-white"
                type="submit"
              >
                Update Details
              </button>
              {alert.message && (
                <Alert type={alert.type} message={alert.message} />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export { PersonalInformation }
