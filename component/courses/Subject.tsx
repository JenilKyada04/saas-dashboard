import SubjectCard from "./SubjectCard";

function Subject() {
  return (
    <div className="bg-white rounded-xl mt-4 p-6 relative">
    
      <span className="absolute left-0 top-6 h-6 w-1 bg-blue-600 rounded-full" />




      <img src="/img/icon/book.png" className="absolute mt-1" alt="" />


      <div className="flex justify-between items-center mb-2 ml-7">
        <h6 className="font-semibold text-gray-900">
          Popular Subjects
        </h6>
        <span className="text-sm text-blue-600 cursor-pointer hover:underline">
          See All
        </span>
      </div>

      <SubjectCard />
    </div>
  );
}

export default Subject;
