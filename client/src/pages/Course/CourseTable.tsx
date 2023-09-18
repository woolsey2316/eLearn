import React from "react";

import { Course } from "./Course";

import { CourseType } from "../../types/CourseState";

type CourseTableProps = {
  courses: CourseType[] | undefined;
};

function CourseTable({ courses }: CourseTableProps) {
  return (
    <table className="table">
      <thead>
        <tr className="bg-gray-700 text-white">
          <th className="whitespace-no-wrap">Course Name</th>
          <th className="whitespace-no-wrap">Category</th>
          <th className="whitespace-no-wrap">Active Exams</th>
        </tr>
      </thead>
      <tbody>
        {courses?.map((course: CourseType) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </tbody>
    </table>
  );
}
export { CourseTable };
