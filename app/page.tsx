"use client";

import { useState } from "react";
import { Linechart } from "../component/Linechart";
import { Barchart } from "../component/Barchart";
import DashboardCard from "../component/DashboardCard";
import Topteachers from "../component/Topteachers";
import Reminders from "../component/Reminders";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">("ongoing");

  return (
    <div className="md:p-6 p-3">
      <Tooltip>
        <TooltipTrigger className="text-xl font-semibold cursor-pointer">
          Hello, Antonio
        </TooltipTrigger>
        <TooltipContent>
          <p>Hello, Antonio</p>
        </TooltipContent>
      </Tooltip>

      <div className="mt-6 pt-4 bg-white relative rounded-lg shadow">
        <span className="absolute left-0 top-4 h-6 w-1 bg-blue-600 rounded-full" />

        <div className="flex justify-between items-center">
          <h6 className="pl-5 font-semibold text-xl">
            <span
              onClick={() => setActiveTab("ongoing")}
              className={`cursor-pointer ${
                activeTab === "ongoing"
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              On going courses
            </span>

            <span
              onClick={() => setActiveTab("completed")}
              className={`pl-5 cursor-pointer ${
                activeTab === "completed"
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              Completed Courses
            </span>
          </h6>

          <h6 className="text-blue-600 cursor-pointer pr-4">See All</h6>
        </div>

        <div className="p-2">
          <DashboardCard type={activeTab} />
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
  );
}
