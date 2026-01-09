import React from "react"

const uiuxcourse = [
  {
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
    img: "/img/course/uiux3.png",
    students: "12,586 students",
    hours: "80 hrs/month",
    title: "Low/High Fidelity Wireframing and UI Design",
    instructors: "Matt Brandon and Roxie Brandon",
    ratingText: "4.8 (3.5k reviews)",
    level: "Beginner",
    type: "Course",
    duration: "4-6 Months",
  },
  {
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
    img: "/img/course/uiux3.png",
    students: "12,586 students",
    hours: "80 hrs/month",
    title: "Low/High Fidelity Wireframing and UI Design",
    instructors: "Matt Brandon and Roxie Brandon",
    ratingText: "4.8 (3.5k reviews)",
    level: "Beginner",
    type: "Course",
    duration: "4-6 Months",
  },
]

function Coursecard() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {uiuxcourse.map((course, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl border cursor-pointer"
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={course.img}
              alt=""
              className="w-full h-42 object-cover transition-transform duration-200 hover:scale-110"
            />
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{course.students}</span>
              <span>{course.hours}</span>
            </div>

            <h5 className="text-lg font-semibold leading-snug">
              {course.title}
            </h5>

            <p className="text-sm text-gray-600">
              {course.instructors}
            </p>
          </div>

          <div className="flex items-center gap-1 mt-4">
            <img src="/img/star.png" className="w-4 h-4" alt="" />
            <span className="text-sm text-gray-700">
              {course.ratingText}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2 text-xs text-gray-600">
              <span>{course.level}</span>
              <span>•</span>
              <span>{course.type}</span>
              <span>•</span>
              <span>{course.duration}</span>
            </div>

            <img
              src="/img/icon/savebtn.png"
              className="w-4 h-4"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Coursecard
