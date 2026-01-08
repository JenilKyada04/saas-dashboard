import { Linechart } from "./components/Linechart";
import { Barchart } from "./components/Barchart";
import Card from "./components/DashboardCard";
import { Dropdownweekly } from "./components/Dropdownweekly";
import Reminderscard from "./components/Reminders";
import { HiDotsVertical } from "react-icons/hi";
import Topteachers from "./components/Topteachers";

export default function DashboardPage() {
  return (
    <>
      <div className="p-6">

        <h2 className="text-xl font-semibold">Hello, Antonio</h2>

        <div className="mt-6 pt-4  bg-white rounded-lg shadow">
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold flex gap-1 left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-md ">
                <span className="pl-3" >On</span>
                <span>going</span>
                <span>courses</span>
              </h1>
            </div>
            <div>
              <h6 className='text-blue-600 cursor-pointer pr-4'>See All</h6>
            </div>
          </div>

          <div className="p-2" >
            <Card />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-10">
          <div className=" bg-white w-2/4" >
            <div className="flex justify-between items-center ">
              <h2 className="font-semibold flex gap-1 left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-md"> <span className="pl-3" >Study</span>  <span>Statistics</span></h2>
              <h1 className="m-1" > <Dropdownweekly /> </h1>
            </div>
            <h4 className="font-normal text-[14px] pl-3">December 03, 2022</h4>
            <div className="mt-5 p-5">
              <Barchart />
            </div>
          </div>
          <div className="bg-white w-1/4">
            <Reminderscard />
          </div>
        </div>


        <div className="flex justify-between gap-4 mt-10">

          <div className=" bg-white w-2/4 " >
            <div className="flex justify-between pt-3 pr-3 items-center ">
              <div className="flex">
                <h2 className="font-semibold  flex  left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-md  ">
                  <span className="pl-3 ">Improvement</span>
                  <span>Graph</span>
                </h2>
                <span className="font-light pl-40">(Overall vs Actual)</span>
              </div>
              <h1 className="cursor-pointer" > <HiDotsVertical /> </h1>
            </div>
            <div className="mt-1 p-5">
              <Linechart />
            </div>
          </div>
          <div className=" bg-white w-1/4 ">
            <Topteachers />
          </div>

        </div>



      </div>

    </>
  );
}