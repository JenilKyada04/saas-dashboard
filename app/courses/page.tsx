import Subject from '../../component/courses/Subject';
import AllCourses from '../../component/courses/AllCourses';


export default function CoursesPage() {
  return (
    <div className="p-6">
        <h2 className="text-xl font-semibold">Browse Courses</h2>
        <Subject />
        <AllCourses />
    </div>
  );
}
