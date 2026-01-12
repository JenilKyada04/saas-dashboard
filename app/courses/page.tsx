import Subject from '../../component/courses/Subject';
import AllCourses from '../../component/courses/AllCourses';
import Coursecard from '@/component/courses/Coursecard';


export default function CoursesPage() {
  return (
    <>
      <div className="md:p-6 p-3 white-blue mt-3 md:mt-0">
        <h2 className="text-xl font-semibold ">Browse Courses</h2>
        <Subject />
        <AllCourses />
        <Coursecard />
        <Coursecard />
      </div>
    </>
  );
}
