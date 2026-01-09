import SubjectCard from "./SubjectCard";

function Subject() {
  return (
    <div className="bg-white rounded-xl mt-4 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
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
