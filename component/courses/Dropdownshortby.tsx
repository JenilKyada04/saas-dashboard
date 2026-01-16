"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Dropdownshortby() {
  
  const [sort, setSort] = useQueryState("sort");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-70 mt-2 ">
        <Button variant="outline" className="flex justify-between cursor-pointer">
          {sort ?? "Recommended"} 
          <IoIosArrowDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>SORT BY</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={sort === "Weekly"}
          onCheckedChange={() => setSort("Weekly")}
        >
          Weekly
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={sort === "Monthly"}
          onCheckedChange={() => setSort("Monthly")}
        >
          Monthly
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={sort === "Yearly"}
          onCheckedChange={() => setSort("Yearly")}
        >
          Yearly
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
