import Topteacherscard from "./Topteacherscard"

function Topteachers() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-blue-600 rounded-full" />
          <h2 className="font-semibold text-sm 2xl:text-lg">Top Teachers</h2>
        </div>
        <span className="text-blue-600 text-sm cursor-pointer">
          See All
        </span>
      </div>

      <Topteacherscard />
    </div>
  )
}

export default Topteachers
