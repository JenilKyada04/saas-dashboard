import Subject from '../../component/courses/Subject';
import AllCourses from '../../component/courses/AllCourses';
import Coursecard from '@/component/courses/Coursecard';
import Link from 'next/link';


export default function CoursesPage() {
  return (
    <>
      <div className="p-6 white-blue">
        <h2 className="text-xl font-semibold ">Browse Courses</h2>
        <Subject />
        <AllCourses />
        <Link href={"coursespage"}>
          <Coursecard />
          <Coursecard />
        </Link>
      </div>
    </>
  );
}
