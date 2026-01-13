"use client";

import { Dropdownshortby } from "./Dropdownshortby";
import { Dropdowncategory } from "./Dropdowncategory";
import Pricerange from "./Pricerange";


function AllCourses() {
  return (
    <>
      <div className="mt-6">
        <h6 className="font-semibold text-xl">
          All Courses{" "}
          <span className="font-light text-gray-500">
            (14,542 results)
          </span>
        </h6> 
      </div>

      <div className="mt-5 p-4 rounded-xl ">
        <div className="flex flex-wrap gap-6 items-center justify-start">

          <div className="flex flex-col gap-1" >
            <h6 className="text-xs font-light text-black uppercase" >
              Short By
            </h6>
            <Dropdownshortby />
          </div>

          <div className="flex flex-col gap-1">
            <h6 className="text-xs font-light text-black uppercase">
              Short By Category
            </h6>
            <Dropdowncategory />
          </div>

          <div className="flex flex-col gap-1 min-w-65">
            <h6 className="text-xs font-light text-black uppercase">
              Price Range
            </h6>
            <Pricerange />
          </div>

          <div className="flex gap-3 ml-auto">
            <button className="px-4 py-2 rounded-xl bg-white border text-blue-600 ">
              Reset
            </button>
            <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-white hover:text-black">
              Filter
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default AllCourses;
