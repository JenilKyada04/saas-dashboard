import { Dropdownshortby } from "./Dropdownshortby"

function AllCourses() {
    return (
        <>
            <div className="mt-6">
                <h6 className="font-semibold text-xl" >All Courses
                    <span className="font-light">(14,542 results)</span>
                </h6>
            </div>
            <div className="mt-5">
                <h6 className="text-sm font-light" >SHORT BY</h6>
                <Dropdownshortby/>
            </div>
        </>
    )
}

export default AllCourses
