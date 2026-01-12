import Reminderscard from "./Reminderscard"

function Reminders() {
    return (
      <div className="bg-white rounded-2xl p-5 h-125 2xl:h-168 flex flex-col relative">
        <span className="absolute left-0 top-4 h-8 w-1 bg-blue-600 rounded-full" />
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
           
            <h2 className="font-semibold 2xl:text-lg">Reminders</h2>
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
  