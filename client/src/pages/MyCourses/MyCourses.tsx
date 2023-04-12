import React, { useState, useEffect, useCallback } from "react";
import * as Icon from "react-feather";
import { MobileMenu } from "../../components";
import { TopBar } from "../../components";

import { CourseItem } from "./CourseItem";

import { ShowingFirstToLast, CourseSubscribeModal } from "../CourseRegister";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { courseActions } from "../../actions";

import { Pagination } from "../../components";

import { CourseExams } from "./CourseExams";
import { PageComponentProps } from "../../types/PageComponentProps";
import { CourseDTO } from "../../types/CourseState";

function MyCourses(props: PageComponentProps) {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses);

  const [search, setSearch] = useState("");
  const [chosenCourse, setCourse] = useState<CourseDTO>({
    category: "",
    expires: new Date(),
    id: "",
    name: "",
    instructor: "",
    status: false,
  });
  const [courseName] = useState("");
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const fetchCourses = useCallback(() => {
    dispatch(courseActions.getAllCourses(page - 1, resultsPerPage));
  }, [dispatch, page, resultsPerPage]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  function decrementPage() {
    navigatePage(page - 1);
  }
  function incrementPage() {
    navigatePage(page + 1);
  }
  // Reasonable page values: 0 -> max page
  const navigatePage = useCallback(
    (page_: number) => {
      let max = 0;
      if (courses?.courseList?.length === undefined) {
        max = 0;
      } else {
        max = Math.ceil(courses.courseList.length / resultsPerPage);
      }
      if (page_ > 0 && page_ <= max) return setPage(page_);
      else return setPage(1);
    },
    [courses, resultsPerPage]
  );

  useEffect(() => {
    navigatePage(page);
  }, [navigatePage, page, resultsPerPage]);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setResultsPerPage(parseInt(event.target.value, 10));
  };

  function registerCourse() {
    if (
      chosenCourse.category !== undefined &&
      chosenCourse.expires !== undefined &&
      chosenCourse.id !== undefined &&
      chosenCourse.name !== undefined &&
      chosenCourse.instructor !== undefined &&
      chosenCourse.status !== undefined
    ) {
      dispatch(courseActions.register(chosenCourse));
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    setSearch(value);
  }

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <h2 className="intro-y text-lg font-medium mt-10">My Courses</h2>
          <CourseSubscribeModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            openModal={openModal}
            register={registerCourse}
            chosenCourse={chosenCourse}
          />
          <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap justify-between items-center mt-2">
              <ShowingFirstToLast
                resultsPerPage={resultsPerPage}
                page={page}
                collection={courses?.courseList
                  ?.filter((elem) => elem?.CourseName?.includes(search))
                  ?.filter(
                    (_, index) =>
                      // Navigate pages
                      index < resultsPerPage * page &&
                      index >= resultsPerPage * (page - 1)
                  )}
              />
              <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                <div className="w-56 relative text-gray-700">
                  <input
                    type="text"
                    className="input w-56 box pr-10 placeholder-theme-13"
                    onChange={handleSearchChange}
                    placeholder="Search Courses..."
                  />
                  <Icon.Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
                </div>
              </div>
            </div>
            {courses.courseList &&
              courses?.courseList
                ?.filter((elem) => elem?.CourseName?.includes(search))
                ?.filter(
                  (_, index) =>
                    // Navigate pages
                    index < resultsPerPage * page &&
                    index >= resultsPerPage * (page - 1)
                )
                .map((course) => (
                  <CourseItem
                    course={course}
                    key={course._id}
                    showExams={() => {}}
                  />
                ))}
            <div className="intro-y col-span-9 col-start-4">
              <Pagination
                setPage={setPage}
                decrementPage={decrementPage}
                incrementPage={incrementPage}
                navigatePage={navigatePage}
                page={page}
                list={courses && courses.courseList && courses.courseList}
                resultsPerPage={resultsPerPage}
                handleChange={handleChange}
              />
            </div>
          </div>
          <CourseExams courseName={courseName} />
        </div>
      </div>
    </div>
  );
}
export { MyCourses };
