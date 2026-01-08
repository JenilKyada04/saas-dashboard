import { Linechart } from "./components/Linechart";
import { Barchart } from "./components/Barchart";
import Card from "./components/DashboardCard";
import { Dropdownweekly } from "./components/Dropdownweekly";
import Reminderscard from "./components/Reminders";
import { HiDotsVertical } from "react-icons/hi";
import Topteachers from "./components/Topteachers";
import Reminders from "./components/Reminders";

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



        <div className="grid grid-cols-1 lg:grid-cols-12 mt-7 gap-6">
          <div className="lg:col-span-8">
            <Barchart />
          </div>

          <div className="lg:col-span-4">
            <Reminders />
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7">
          <div className="lg:col-span-2">
            <Linechart />
          </div>
          <Topteachers />
        </div>

      </div>

    </>
  );
}