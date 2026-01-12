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
    popular: true,
  },
]

function Coursecard() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
      {uiuxcourse.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition"
        >
          <div className="relative overflow-hidden rounded-xl">
            {course.popular && (
              <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                Most Popular
              </span>
            )}

            <img
              src={course.img}
              alt=""
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>{course.students}</span>
              <span>{course.hours}</span>
            </div>

            <h5 className="text-[17px] font-semibold leading-snug text-gray-900">
              {course.title}
            </h5>

            <p className="text-sm text-gray-600">
              {course.instructors}
            </p>
          </div>

          <div className="flex items-center gap-1 mt-3">
            <img src="/img/star.png" className="w-4 h-4" alt="" />
            <span className="text-sm text-gray-700">
              {course.ratingText}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>{course.level}</span>
              <span>•</span>
              <span>{course.type}</span>
              <span>•</span>
              <span>{course.duration}</span>
            </div>

            <img
              src="/img/icon/savebtn.png"
              className="w-4 h-4 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Coursecard
