


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



export function Dropdown() {

    const [sort, setSort] = useQueryState("Language", {
        defaultValue: "English",
    });

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2 cursor-pointer">
                    <img src="/img/flag/eng.png" className="w-6 h-6 rounded-full" alt="" />
                    {sort}
                    <IoIosArrowDown />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 rounded-2xl">
                <DropdownMenuSeparator />

                <DropdownMenuRadioGroup
                    value={sort}
                    onValueChange={setSort}
                >
                    <DropdownMenuRadioItem value="English">
                        <img src="/img/flag/eng.png" className="w-6 h-6 rounded-full" alt="" /> English
                    </DropdownMenuRadioItem>

                    <DropdownMenuRadioItem value="Deutsch">
                        <img src="/img/flag/Deutsch.png" className="w-6 h-6 rounded-full" alt="" /> Deutsch
                    </DropdownMenuRadioItem>

                    <DropdownMenuRadioItem value="Spanish">
                        <img src="/img/flag/Spanish.png" className="w-6 h-6 rounded-full" alt="" /> Spanish
                    </DropdownMenuRadioItem>

                    <DropdownMenuRadioItem value="French" >
                        <img src="/img/flag/French.png" className="w-6 h-6 rounded-full" alt="" /> French
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
