import Reminderscard from "./Reminderscard"

function Reminders() {
    return (
      <div className="bg-white rounded-2xl p-5 h-125 flex flex-col">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            <h2 className="font-semibold">Reminders</h2>
          </div>
  
          <span className="text-blue-600 text-sm cursor-pointer">
            See All
          </span>
        </div>
  
        <div className="flex-1 mt-5 overflow-y-auto space-y-3 pr-1 scrollbar-hide">
          <Reminderscard />
          <Reminderscard />
          <Reminderscard />
          <Reminderscard />
          <Reminderscard />
          <Reminderscard />
          <Reminderscard />
          <Reminderscard />
          <Reminderscard />
        </div>
  
      </div>
    )
  }
  
  export default Reminders
  