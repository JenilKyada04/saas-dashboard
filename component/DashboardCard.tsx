import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const ongoingCourses = [
  {
    id: 1,
    title: "UI Design: Zero to Mastery",
    instructor: "David Hartmann",
    progress: 70,
    lessons: "23/30",
    students: "615",
    hours: "77/110",
    exams: "2/3",
    level: "Intermediate",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "UI/UX Design",
    instructor: "Lara Zuki",
    progress: 60,
    lessons: "20/30",
    students: "356",
    hours: "60/100",
    exams: "2/3",
    level: "Basic",
    color: "#FFA500",
  },
  {
    id: 3,
    title: "Frontend Development",
    instructor: "Calvin Patil",
    progress: 25,
    lessons: "10/40",
    students: "3,615",
    hours: "75/300",
    exams: "2/8",
    level: "Advanced",
    color: "#34d399",
  },
];

const completedCourses = [
  {
    id: 4,
    title: "React Masterclass",
    instructor: "Andrew Tate",
    progress: 100,
    lessons: "30/30",
    students: "1,200",
    hours: "90/90",
    exams: "3/3",
    level: "Advanced",
    color: "#22c55e",
  },
  {
    id: 5,
    title: "JavaScript Deep Dive",
    instructor: "Sarah Lee",
    progress: 100,
    lessons: "25/25",
    students: "980",
    hours: "70/70",
    exams: "2/2",
    level: "Intermediate",
    color: "#22c55e",
  },
  {
    id: 6,
    title: "HTML & CSS Bootcamp",
    instructor: "John Doe",
    progress: 100,
    lessons: "20/20",
    students: "2,500",
    hours: "50/50",
    exams: "1/1",
    level: "Beginner",
    color: "#22c55e",
  },
];

function DashboardCard({ type }: { type: "ongoing" | "completed" }) {
  const courses = type === "ongoing" ? ongoingCourses : completedCourses;

  return (
    <div className="grid md:grid-cols-3 gap-3 p-4">
      {courses.map((course) => {
        const radius = 20;
        const circumference = 2 * Math.PI * radius;
        const offset =
          circumference - (course.progress / 100) * circumference;

        return (
          <div
            key={course.id}
            className="border border-blue-100 rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="flex gap-6 items-start">
              <div className="relative w-12 h-12">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    stroke={course.color}
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs">
                  {course.progress}%
                </span>
              </div>

              <div>
                <h4 className="font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-500">
                  {course.instructor}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm">
                Level: <span className="font-medium">{course.level}</span>
              </p>

              {type === "ongoing" ? (
                <button className="flex items-center gap-2 text-blue-600">
                  Continue <IoMdArrowRoundForward />
                </button>
              ) : (
                <span className="text-green-600 font-medium">
                   Completed
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardCard;
