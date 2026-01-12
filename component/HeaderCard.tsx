import { IoMdArrowRoundForward } from "react-icons/io";
import Coursecard from "./courses/Coursecard";

const courses = [
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
    timer: "img/icon/timer.png",
    cimg: "/img/icon/course.png",
    student: "/img/icon/comm.png",
    exam: "/img/icon/exam.png",
  },
  {
    id: 2,
    title: "UI/UX Design    ",
    instructor: "Lara Zuki",
    progress: 60,
    lessons: "20/30",
    students: "356",
    hours: "60/100",
    exams: "2/3",
    level: "Basic",
    color: "#FFA500",
    timer: "img/icon/timer.png",
    cimg: "/img/icon/course.png",
    student: "/img/icon/comm.png",
    exam: "/img/icon/exam.png",
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
    timer: "img/icon/timer.png",
    cimg: "/img/icon/course.png",
    student: "/img/icon/comm.png",
    exam: "/img/icon/exam.png",
  },
];

function DashboardCard() {
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
            className="white-blue border border-blue-100 rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="flex gap-10 items-start">
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
                <span className="absolute inset-0 flex items-center justify-center text-xs font-normal text-black">
                  {course.progress}%
                </span>
              </div>



              <div >
                <h4 className="font-semibold text-gray-900">
                  {course.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {course.instructor}
                </p>
              </div>
            </div>



            <div className="mt-4 flex justify-center  text-xs text-gray-600 gap-8">
              <div>
                <p className="flex gap-2" > <img src={course.cimg} alt="" className="w-4 h-4" /> {course.lessons} Lessons</p>
                <p className="flex gap-2 mt-2" >  <img src={course.student} alt="" className="w-4 h-4" /> {course.students} Students</p>
              </div>
              <div>
                <p className="flex gap-2"><img src={course.timer} alt="" className="w-4 h-4" /> {course.hours} Hours</p>
                <p className="flex gap-2 mt-2"> <img src={course.exam} alt="" className="w-4 h-4" /> {course.exams} Exams</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Level: <span className="font-medium">{course.level}</span>
              </p>

              <button className="cursor-pointer flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                Continue <IoMdArrowRoundForward />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardCard;
