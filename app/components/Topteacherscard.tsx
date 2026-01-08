import { FaArrowRight } from "react-icons/fa6"

const teachers = [
  { name: "Calvini Patisi", subject: "UI Design Teacher", img: "/img/teacher/t1.png" },
  { name: "Nobita ket", subject: "UX Designer", img: "/img/teacher/t2.png" },
  { name: "Nairobi Valy", subject: "UI/UX Designer", img: "/img/teacher/t3.png" },
  { name: "Justin Pa", subject: "Graphic Designer", img: "/img/teacher/t4.png" },
  { name: "Ronaldo Lata", subject: "Mobile App Developer", img: "/img/teacher/t5.png" },
  { name: "Ronaldo Lata", subject: "IOS Developer", img: "/img/teacher/t6.png" },
  { name: "Ronaldo Lata", subject: "Full Stack Developer", img: "/img/teacher/t7.png" },
  { name: "Sarah Johnson", subject: "Backend Developer", img: "/img/teacher/t8.png" },
]

function Topteacherscard() {
  return (
    <div className="space-y-3">
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className="flex items-center justify-between hover:bg-gray-50 rounded-xl p-0.75 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
              src={teacher.img}
              className="w-10 h-10 rounded-full object-cover"
              alt={teacher.name}
            />
            <div>
              <h4 className="text-sm font-medium">{teacher.name}</h4>
              <p className="text-xs text-gray-500">{teacher.subject}</p>
            </div>
          </div>
          <FaArrowRight className="text-gray-400 text-sm" />
        </div>
      ))}
    </div>
  )
}

export default Topteacherscard
