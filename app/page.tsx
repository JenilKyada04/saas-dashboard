"use client"

import { Linechart } from "../component/Linechart";
import { Barchart } from "../component/Barchart";
import Card from "../component/HeaderCard";
import Topteachers from "../component/Topteachers";
import Reminders from "../component/Reminders";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function DashboardPage() {
  return (
    <>
      <div className="md:p-6 p-3">

        <Tooltip>
          <TooltipTrigger className="text-xl font-semibold mt-3 md:mt-0 cursor-pointer" >Hello, Antonio</TooltipTrigger>
          <TooltipContent>
            <p>Hello</p>
          </TooltipContent>
        </Tooltip>

        <div className="mt-6 pt-4  bg-white relative rounded-lg shadow">

          <span className="absolute left-0 top-4 h-6 w-1 bg-blue-600 rounded-full" />

          <div className="flex justify-between ">
            <h6 className="pl-5 font-semibold text-xl cursor-pointer">On going courses
              <span className="text-gray-400 pl-5 cursor-pointer" >Completed Courses</span>
            </h6>

            <h6 className='text-blue-600 cursor-pointer pr-4'>See All</h6>
          </div>

          <div className="p-2" >
            <Card />
          </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-12 mt-4 gap-4">
          <div className="lg:col-span-8">
            <Barchart />
          </div>

          <div className="lg:col-span-4">
            <Reminders />
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="lg:col-span-2">
            <Linechart />
          </div>
          <Topteachers />
        </div>

      </div>

    </>
  );
}