const CourseSidebar = () => {
    return (
      <div className="bg-white p-6 rounded-xl h-160 space-y-5 border">
        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold text-gray-900">$60.99</span>
          <span className="text-sm line-through text-gray-400">$89.00</span>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
            33% discount
          </span>
        </div>
  
        {/* Details */}
        <div className="divide-y text-sm">
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Start Date</span>
            <span className="font-medium">Jan 05, 2023</span>
          </div>
  
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Lessons</span>
            <span className="font-medium">10</span>
          </div>
  
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Quizzes</span>
            <span className="font-medium">15</span>
          </div>
  
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Enrollments</span>
            <span className="font-medium">15k</span>
          </div>
  
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Skill Level</span>
            <span className="font-medium">Advanced</span>
          </div>
  
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Time Frame</span>
            <span className="font-medium">50 days</span>
          </div>
  
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Certificate</span>
            <span className="font-medium">Yes</span>
          </div>
  
          <div className="flex justify-between py-2">
            <span className="text-gray-500">Pass Percentage</span>
            <span className="font-medium">50%</span>
          </div>
        </div>
  
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-l font-medium hover:bg-blue-700 transition">
          Add to Cart
        </button>
  
        <button className="w-full border border-blue-600 text-blue-600 py-2.5 rounded-l font-medium hover:bg-blue-50 transition">
          Buy Now
        </button>
  
        <p className="text-xs text-gray-500 text-center">
           30 - Days money back guarantee
        </p>
  
        <div className="pt-3 border-t text-center space-y-1">
          <p className="text-xs text-gray-500">For details about the course</p>
          <p className="text-sm font-semibold">+11234 567 89</p>
        </div>
      </div>
    );
  };
  
  export default CourseSidebar;
  