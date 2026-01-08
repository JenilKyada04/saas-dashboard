import { MdArrowForwardIos } from "react-icons/md"

function Reminderscard() {
  return (
    <div className="bg-blue-50 hover:bg-blue-100 transition rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer">
      <div>
        <h4 className="text-sm font-medium">
          Attend Zoom call (UI Design)
        </h4>
        <p className="text-xs text-gray-500">
          27 March, 2023
        </p>
      </div>

      <MdArrowForwardIos className="text-gray-400 text-sm" />
    </div>
  )
}

export default Reminderscard
