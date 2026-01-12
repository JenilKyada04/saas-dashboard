import Topteacherscard from "./Topteacherscard"

function Topteachers() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 relative">
      <span className="absolute left-0 top-4 h-8 w-1 bg-blue-600 rounded-full" />
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-sm 2xl:text-lg">Top Teachers</h2>
        <span className="text-blue-600 text-sm cursor-pointer">
          See All
        </span>
      </div>

      <Topteacherscard />
    </div>
  )
}

export default Topteachers
