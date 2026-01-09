import { Dropdownshortby } from "./Dropdownshortby"
import { Dropdowncategory } from "./Dropdowncategory"
import Pricerange from "./Pricerange"
import { Buttonn } from "./Buttonn"


function AllCourses() {
    return (
        <>
            <div className="mt-6">
                <h6 className="font-semibold text-xl" >All Courses
                    <span className="font-light">(14,542 results)</span>
                </h6>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 mt-5">
                <div className="">
                    <h6 className="text-sm font-light" >SHORT BY</h6>
                    <Dropdownshortby />
                </div>
                <div className="">
                    <h6 className="text-sm font-light" >SHORT BY CATEGORY</h6>
                    <Dropdowncategory />
                </div>
                <div className="">
                    <h6 className="text-sm font-light" >PRICE RANGE</h6>
                    <Pricerange />
                </div>
                <div className=" flex justify-start items-center">
                    <button className="border-2 px-4  py-2 m-2 rounded-2xl bg-blue-600 text-white hover:bg-black hover:text-white cursor-pointer">RESET</button>
                     <button className="border-2 px-4  py-2 m-2 rounded-2xl bg-blue-700 text-white hover:bg-black hover:text-white cursor-pointer">FILTER</button>
                    {/* <Buttonn/> */}
                    
                </div>

            </div>
        </>
    )
}

export default AllCourses   
