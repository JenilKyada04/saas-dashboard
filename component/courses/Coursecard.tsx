"use client";

import Link from "next/link";
import { useSavedCourses } from "@/context/SavedCoursesContext";

const uiuxcourse = [
  {
    id: 1,
    img: "/img/course/uiux1.jpg",
    students: "5,496 students",
    hours: "80 hrs/month",
    title: "UI/UX Designing and Wireframing and Webflow Designing",
    instructors: "Matt Brandon and Roxie Brandon",
    ratingText: "4.8 (3.5k reviews)",
    level: "Beginner",
    type: "Course",
    duration: "4-6 Months",
  },
  {
    id: 2,
    img: "/img/course/uiux2.jpg",
    students: "1,516 students",
    hours: "80 hrs/month",
    title: "UI/UX Designing",
    instructors: "Matt Brandon and Roxie Brandon",
    ratingText: "4.8 (3.5k reviews)",
    level: "Beginner",
    type: "Course",
    duration: "4-6 Months",
  },
  {
    id: 3,
    img: "/img/course/uiux3.png",
    students: "12,586 students",
    hours: "80 hrs/month",
    title: "Low/High Fidelity Wireframing and UI Design",
    instructors: "Matt Brandon and Roxie Brandon",
    ratingText: "4.8 (3.5k reviews)",
    level: "Beginner",
    type: "Course",
    duration: "4-6 Months",
    popular: true,
  },
];

export default function Coursecard() {
  const { toggleSave, isSaved } = useSavedCourses();

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
      {uiuxcourse.map(course => (
        <div
          key={course.id}
          className="bg-white rounded-2xl border p-4 hover:shadow-lg transition"
        >
          <Link href="/coursespage">
            <div className="relative rounded-xl overflow-hidden">
              {course.popular && (
                <span className="absolute top-3 right-3 bg-white text-blue-600 text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <img
                src={course.img}
                className="w-full h-64 object-cover hover:scale-105 transition"
              />
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>{course.students}</span>
                <span>{course.hours}</span>
              </div>
              <h5 className="text-[17px] font-semibold">
                {course.title}
              </h5>
              <p className="text-sm text-gray-600">
                {course.instructors}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-1 mt-3">
            <img src="/img/star.png" className="w-4 h-4" />
            <span className="text-sm">{course.ratingText}</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-xs text-gray-600">
              {course.level} • {course.type} • {course.duration}
            </div>

            <button
              onClick={() =>
                toggleSave({
                  id: course.id,
                  img: course.img,
                  title: course.title,
                  instructors: course.instructors,
                  ratingText: course.ratingText,
                })
              }
            >
              {isSaved(course.id) ? (
                <img src="/img/icon/bookmark.svg" className="w-4 h-4" />
              ) : (
                <img src="/img/icon/savebtn.svg" className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
