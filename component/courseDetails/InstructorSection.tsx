const InstructorSection = () => {
    return (
      <div className="bg-white p-4 sm:p-6 rounded-xl relative">
        
        <span className="hidden sm:block absolute left-0 top-6 h-10 w-1 bg-blue-600 rounded-r"></span>
  
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          
          <img
            src="/img/student.png"
            alt="Instructor"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
          />
  
          <div className="flex-1 text-center sm:text-left">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <h4 className="font-semibold text-lg text-gray-900">
                Bruce Willis
              </h4>
              <span className="text-sm text-gray-500">@Bruce_65</span>
            </div>
  
            <p className="text-sm text-gray-500 mt-1 sm:mt-2">
              Advanced Educator
            </p>
  
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-sm text-gray-600 mt-4 sm:mt-6">
              <span className="flex items-center gap-1 text-yellow-500">
                ★
                <span className="text-gray-700 font-medium">4.8</span>
              </span>
              <span>(3.5k reviews)</span>
              <span className="hidden sm:inline">·</span>
              <span>14,455 Students</span>
            </div>
  
            <p className="text-sm text-gray-600 mt-3 max-w-xl mx-auto sm:mx-0">
              All techniques are explained step-by-step, in a beginner-friendly
              format so that you can easily follow in a cohesive way.
            </p>
  
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-5 sm:mt-6">
              <button className="px-5 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Follow
              </button>
              <button className="px-5 py-1.5 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
                Message
              </button>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default InstructorSection;
  