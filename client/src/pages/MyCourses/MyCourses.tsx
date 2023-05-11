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
import { useGetCoursesQuery } from "../../features/course/course-slice-api";

function MyCourses(props: PageComponentProps) {
  const dispatch = useAppDispatch();

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
  const [size, setSize] = useState(10);

  const [modalIsOpen, setIsOpen] = useState(false);

  const { data: courses } = useGetCoursesQuery({page, size})

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const fetchCourses = useCallback(() => {
    dispatch(courseActions.getAllCourses(page - 1, size));
  }, [dispatch, page, size]);

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
      if (courses?.length === undefined) {
        max = 0;
      } else {
        max = Math.ceil(courses.length / size);
      }
      if (page_ > 0 && page_ <= max) return setPage(page_);
      else return setPage(1);
    },
    [courses, size]
  );

  useEffect(() => {
    navigatePage(page);
  }, [navigatePage, page, size]);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSize(parseInt(event.target.value, 10));
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
                resultsPerPage={size}
                page={page}
                collection={courses
                  ?.filter((elem) => elem?.CourseName?.includes(search))
                  ?.filter(
                    (_, index) =>
                      // Navigate pages
                      index < size * page &&
                      index >= size * (page - 1)
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
            {courses
                ?.filter((elem) => elem?.CourseName?.includes(search))
                ?.filter(
                  (_, index) =>
                    // Navigate pages
                    index < size * page &&
                    index >= size * (page - 1)
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
                list={courses}
                resultsPerPage={size}
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
