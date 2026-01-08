"use client"

import { IoIosArrowDown } from "react-icons/io";
import * as React from "react"
import { Button } from "@/app/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,

} from "@/app/ui/dropdown-menu"

export function Dropdownweekly() {
    const [position, setPosition] = React.useState("bottom")

    return (
        <div className="cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="cursor-poniter">Weekly</Button>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="right">Yearly</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Monthly</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="top"> Weekly</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Day</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
