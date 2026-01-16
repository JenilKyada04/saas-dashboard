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

export function Dropdowncategory() {
  const [category, setCategory] = useQueryState("category");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-70 mt-2">
        <Button variant="outline" className="flex justify-between cursor-pointer">
          {category ?? "Web Design"} 
          <IoIosArrowDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>CATEGORY</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={category === "Frontend"}
          onCheckedChange={() => setCategory("Frontend")}
        >
          Frontend
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={category === "Backend"}
          onCheckedChange={() => setCategory("Backend")}
        >
          Backend
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={category === "Fullstack"}
          onCheckedChange={() => setCategory("Fullstack")}
        >
          Full Stack
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
