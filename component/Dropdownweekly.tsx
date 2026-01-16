"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Dropdownweekly() {
    
  const [sort, setSort] = useQueryState("sort", {
    defaultValue: "weekly",
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          {sort}
          <IoIosArrowDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup
          value={sort}
          onValueChange={setSort}
        >
          <DropdownMenuRadioItem value="Weekly">
            Weekly
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="Monthly">
            Monthly
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="Yearly">
            Yearly
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="custom"
            onClick={() => console.log("Custom change is not possible")}
          >
            Custom
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
