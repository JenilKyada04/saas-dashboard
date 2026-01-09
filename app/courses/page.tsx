import Subject from '../components/courses/Subject';
import AllCourses from '../components/courses/AllCourses';


export default function CoursesPage() {
  return (
    <div className="p-6">
        <h2 className="text-xl font-semibold">Browse Courses</h2>
        <Subject />
        <AllCourses />
    </div>
  );
}
