import React, { useState } from "react";

import { CourseDropdown } from "../../components";
import { MobileMenu } from "../../components";
import { TopBar } from "../../components";

import { ExamResultCard } from "./ExamResultCard";
import { PageComponentProps } from "../../types/PageComponentProps";
import { ExamResult } from "../../types/ExamState";
import { useGetUserCoursesQuery } from "../../features/course/course-slice-api";
import { useGetInstructorByIdQuery } from "../../features/instructor/instructor-slice-api";
import { useGetMeQuery } from "../../features/user/user-api";
import { useGetUserExamResultsByCourseQuery } from "../../features/results/results-slice-api";

function ExamResults(props: PageComponentProps) {
  const { data: courses } = useGetUserCoursesQuery()
  const { data: userDetails } = useGetMeQuery()
  const [course, setCourse] = useState("Select Course");
  const instructorId = courses?.filter((elem) => elem.courseName === course)[0]
    ?.instructorId;
  const category = courses?.filter((elem) => elem.courseName === course)[0]
    ?.category;
  const courseId = courses?.filter((elem) => elem.courseName === course)[0]
    ?._id;

  const { data: instructor } = useGetInstructorByIdQuery(instructorId ?? "")
  const { data: results } = useGetUserExamResultsByCourseQuery(courseId ?? "")

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Grades</h2>
          </div>
          <div className="intro-y box overflow-hidden mt-5">
            <div className="flex flex-col lg:flex-row pt-10 px-5 sm:px-20 sm:pt-20 lg:pb-20 text-center sm:text-left">
              <CourseDropdown
                courseList={courses}
                course={course}
                setCourse={setCourse}
              />
            </div>
            <div className="flex flex-col lg:flex-row border-b px-5 sm:px-20 pt-10 pb-10 sm:pb-20 text-center sm:text-left">
              <div>
                <div className="text-base text-gray-600">Course Details</div>
                <div className="text-lg font-medium text-theme-1 mt-2">
                  Instructor: {instructor?.name}
                </div>
                {instructor && (
                  <div className="mt-1">
                    Email: {instructor?.email}
                  </div>
                )}
                <div className="mt-1">
                  Address: {instructor?.address}
                </div>
                <div className="mt-1">
                  Location: {instructor?.building}
                </div>
                <div className="mt-1">
                  Room Number: {instructor?.roomNumber}
                </div>
              </div>
            </div>
            <div className="px-5 sm:px-16 py-10 sm:py-20">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="border-b-2 whitespace-no-wrap">
                        EXAM NAME
                      </th>
                      <th className="border-b-2 text-right whitespace-no-wrap">
                        Rank
                      </th>
                      <th className="border-b-2 text-right whitespace-no-wrap">
                        Score
                      </th>
                      <th className="border-b-2 text-right whitespace-no-wrap">
                        Score (%)
                      </th>
                      <th className="border-b-2 text-right whitespace-no-wrap">
                        Average (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results?.examResults?.map((result: ExamResult, index: number) => (
                        <ExamResultCard
                          key={index}
                          examInfo={result}
                        />
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
              <div className="text-center sm:text-left mt-10 sm:mt-0">
                <div className="text-lg text-theme-1 font-medium mt-2">
                  {userDetails?.name}
                </div>
                <div className="mt-1">Course Name : {course}</div>
                <div className="mt-1">Category : {category}</div>
              </div>
              <div className="text-center sm:text-right sm:ml-auto">
                <div className="text-base text-gray-600">Weighted Average</div>
                <div className="text-xl text-theme-1 font-medium mt-2">
                  {results?.weightedAverage?.userAverage.toFixed(2)}
                </div>
                <div className="mt-1 tetx-xs">Class Rank: {results?.weightedAverage?.classRank}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ExamResults };
