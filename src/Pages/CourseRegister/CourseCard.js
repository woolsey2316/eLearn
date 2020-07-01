import React from 'react'

function CourseCard({
  course,
  register,
  modalIsOpen,
  closeModal,
  setCourse,
  openModal,
}) {
  const expiryDate = new Date(course.expires)
  const courseDTO = {
    category: course.category,
    description: course.description,
    expires: new Date(course.expires).getTime(),
    id: course.id,
    name: course.name,
    reference: course.reference,
    status: course.status,
  }
  function selectCourse() {
    setCourse(courseDTO)
    openModal()
  }

  return (
    <div className="intro-y col-span-12 md:col-span-6">
      <div className="box">
        <div className="flex flex-col lg:flex-row items-end p-5">
          <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
            <div className="flex align-center">
              <h2 className="font-medium">{course.name}</h2>
              <div className="text-gray-600 ml-1">{`· Category: ${course.category}`}</div>
            </div>
            <div className="text-gray-700 text-xs mt-1">
              {course.description}
            </div>
            <div className="flex align-center mt-5">
              {course.expires ? (
                <React.Fragment>
                  <div className="px-3 py-2 bg-theme-14 text-theme-10 rounded font-medium">
                    {course.expires.split(' ')[0]}
                  </div>
                  <h2 className="py-2 px-3 text-gray-600">End Date</h2>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="px-3 py-2 bg-theme-14 text-theme-10 rounded font-medium">
                    Course Never Expires
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          <div className="flex mt-4 lg:mt-0">
            <button
              onClick={selectCourse}
              className="button button--sm text-white bg-theme-1 mr-2 w-20 align-bottom"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { CourseCard }
