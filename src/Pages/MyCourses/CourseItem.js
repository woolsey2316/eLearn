import React from 'react'

function CourseItem({
  course,
  showExams,
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
            <h2 className="font-medium">{course.name}</h2>
            <div className="text-gray-600">{`Category: ${course.category}`}</div>
          </div>
          <div className="flex mt-4 lg:mt-0">
            <button
              onClick={showExams}
              className="button button--sm border border-theme-1 text-theme-1 mr-2 align-bottom"
            >
              View Exams
            </button>
            <button className="button button--sm text-white bg-theme-1 mr-2 align-bottom">
              Add Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { CourseItem }
