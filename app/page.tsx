import { Chart } from "./components/Chart";
import Card from "./components/DashboardCard";
import { Dropdownweekly } from "./components/Dropdownweekly";
import Reminderscard from "./components/Reminders";

export default function DashboardPage() {
  return (
    <>
      <div className="p-6">
        <h2 className="text-xl font-semibold">Hello, Antonio</h2>

        <div className="mt-6 p-4 bg-white rounded-lg shadow">
          <h1 className="font-semibold">On going courses</h1>
          <div>
            <Card />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-10">

            <div className=" bg-white w-3/4 p-5" >
              <div className="flex justify-between items-center ">
                <h2 className="font-semibold">Study Statistics</h2>
                <h1 > <Dropdownweekly /> </h1>
              </div>
              <h4 className="font-normal text-[14px]">December 03, 2022</h4>
              <div className="mt-5">
                <Chart />
              </div>
            </div>

            <div className=" bg-white w-1/4">
              <Reminderscard />
            </div>

        </div>

      </div>

    </>
    // done
  );
}