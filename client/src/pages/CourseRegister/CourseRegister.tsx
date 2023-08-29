import React, { useState, useEffect, useCallback } from "react";
import * as Icon from "react-feather";
import { MobileMenu } from "../../components";
import { TopBar } from "../../components";

import { CourseCard } from "./CourseCard";

import { CourseSubscribeModal } from "./CourseSubscribeModal";

import { Pagination } from "../../components";
import { ShowingFirstToLast } from "./ShowingFirstToLast";

import { CourseDTO } from "../../types/CourseState";
import { useGetCoursesQuery, useRegisterMutation } from "../../features/course/course-slice-api";
import PageWithSideMenu from "../PageWithSideMenu/PageWithSideMenu";

function CourseRegister() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [register, result] = useRegisterMutation();

  const {data: courses} = useGetCoursesQuery({page, size})

  const [search, setSearch] = useState("");
  const [chosenCourse, setCourse] = useState<CourseDTO>({
    category: "",
    expires: new Date(),
    id: "",
    instructor: "",
    name: "",
    status: false,
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Reasonable page values: 0 -> max page
  const navigatePage = useCallback((page: number) => {
    if (page > 0) {
      setPage(page);
    } else {
      setPage(1);
    }
  }, []);

  useEffect(() => {
    navigatePage(page);
  }, [navigatePage, page, size]);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSize(parseInt(event.currentTarget.value, 10));
  };

  function registerCourse() {
    if (
      chosenCourse.category &&
      chosenCourse.expires &&
      chosenCourse.id &&
      chosenCourse.instructor &&
      chosenCourse.name &&
      chosenCourse.status
    ) {
      register(chosenCourse)
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }
  function decrementPage() {
    navigatePage(page - 1);
  }
  function incrementPage() {
    navigatePage(page + 1);
  }

  return (
    <PageWithSideMenu>
      <h2 className="intro-y text-lg font-medium mt-10">
        Course Catalogue
      </h2>
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
            collection={courses?.data}
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
        {courses &&
          courses?.data
            ?.filter(
              (elem) =>
                elem.courseName.toUpperCase().includes(search.toUpperCase())
            )
            .map((course, index) => (
              <CourseCard
                openModal={openModal}
                setCourse={setCourse}
                course={course}
                key={index}
              />
            ))}
        <div className="intro-y col-span-9 col-start-4">
          <Pagination
            setPage={setPage}
            decrementPage={decrementPage}
            incrementPage={incrementPage}
            navigatePage={navigatePage}
            page={page}
            list={courses?.data}
            resultsPerPage={size}
            handleChange={handleChange}
          />
        </div>
      </div>
    </PageWithSideMenu>
  );
}
export { CourseRegister };
