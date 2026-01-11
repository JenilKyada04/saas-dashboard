import Banner from "@/component/courseDetails/Banner";
import CourseContent from "@/component/courseDetails/CourseContent";
import CourseHeader from "@/component/courseDetails/CourseHeader";
import CourseOverview from "@/component/courseDetails/CourseOverview";
import CourseSidebar from "@/component/courseDetails/CourseSidebar";
import InstructorSection from "@/component/courseDetails/InstructorSection";
import Coursecard from "@/component/courses/Coursecard";
import React from "react";

export default function Page() {
    return (
        <>

            <div className="relative w-full overflow-hidden ">
                <Banner />
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <div className="lg:col-span-2 space-y-6">
                        <CourseHeader />
                        <CourseOverview />
                        <CourseContent />
                        <InstructorSection />
                    </div>
                    <CourseSidebar />
                </div>
                <div className="flex items-center justify-between mt-10">
                    <span className="font-semibold text-2xl">More Courses by Bruce Willis</span>
                    <span className="text-blue-600 cursor-pointer mr-10" >See All</span>
                </div>
                <div>
                    <Coursecard />
                </div>
                <div className="flex items-center justify-between mt-10">
                    <span className="font-semibold text-2xl">Similar Courses </span>
                    <span className="text-blue-600 cursor-pointer mr-10" >See All</span>
                </div>
                <div>
                    <Coursecard />
                </div>
            </div>
        </>
    );
}
