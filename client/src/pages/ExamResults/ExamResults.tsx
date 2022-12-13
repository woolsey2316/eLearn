import React, { useState, useEffect, useCallback } from "react";

import { CourseDropdown } from "../../components";
import { MobileMenu } from "../../components";
import { TopBar } from "../../components";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { examResultActions } from "../../actions";
import { courseActions } from "../../actions";

import { ExamResultCard } from "./ExamResultCard";
import { PageComponentProps } from "../../types/PageComponentProps";

function weightedAverage(examResults: any[]) {
  if (examResults) {
    return Object.values(examResults)
      .reduce(
        (acc, elem) => acc + (elem?.score / elem?.total) * elem?.weight,
        0
      )
      .toFixed(2);
  } else {
    return "";
  }
}

function ExamResults(props: PageComponentProps) {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses.userCourseList);
  const userExamResults = useAppSelector((state) => state.examResults.examList);
  const average = useAppSelector((state) => state.examResults.average);

  const page = 0;
  const size = 20;

  const fetchCourses = useCallback(() => {
    dispatch(courseActions.getAllUserCourses());
  }, [dispatch, page, size]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const [course, setCourse] = useState("Select Course");

  const instructor = courses?.filter((elem) => elem.courseName === course)[0]
    ?.instructor;
  const category = courses?.filter((elem) => elem.courseName === course)[0]
    ?.category;
  const courseId = courses?.filter((elem) => elem.courseName === course)[0]
    ?._id;

  const fetchExams = useCallback(() => {
    if (courseId) {
      dispatch(examResultActions.getUserExamResultsByCourse(courseId));
    }
  }, [courseId, dispatch]);

  useEffect(() => {
    fetchExams();
  }, [fetchExams]);

  const fetchExamResults = useCallback(() => {
    if (courseId) {
      dispatch(examResultActions.getAllExamResults(courseId));
    }
  }, [courseId, dispatch]);

  const fetchExamResultsbyCourse = useCallback(() => {
    if (courseId) {
      dispatch(examResultActions.getExamResultsByCourse(courseId));
    }
  }, [courseId, dispatch]);

  useEffect(() => {
    fetchExamResults();
  }, [fetchExamResults]);

  useEffect(() => {
    fetchExamResultsbyCourse();
  }, [fetchExamResultsbyCourse]);

  return (
    <body className="app">
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
                  Instructor: {instructor}
                </div>
                {instructor && (
                  <div className="mt-1">{instructor}@gmail.com</div>
                )}
                <div className="mt-1">
                  260 W. Storm Street New York, NY 10025.
                </div>
              </div>
            </div>
            <div className="px-5 sm:px-16 py-10 sm:py-20">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="border-b-2 whitespace-no-wrap">
                        DESCRIPTION
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
                    {userExamResults?.map((elem: any, index: number) => {
                      console.log(average);
                      return (
                        <ExamResultCard
                          key={index}
                          examInfo={elem}
                          average={average?.average[elem?.exam_name]}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
              <div className="text-center sm:text-left mt-10 sm:mt-0">
                <div className="text-lg text-theme-1 font-medium mt-2">
                  David Woolsey
                </div>
                <div className="mt-1">Course Name : {course}</div>
                <div className="mt-1">Category : {category}</div>
              </div>
              <div className="text-center sm:text-right sm:ml-auto">
                <div className="text-base text-gray-600">Weighted Average</div>
                <div className="text-xl text-theme-1 font-medium mt-2">
                  {weightedAverage(userExamResults)}
                </div>
                <div className="mt-1 tetx-xs">Class Rank: 7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export { ExamResults };
