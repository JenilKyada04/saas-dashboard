"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"

export function Dropdown() {
    const [position, setPosition] = React.useState("bottom")

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline"> <img src="/img/flag/eng.png" className="w-6 h-6 rounded-full cursor-pointer " alt="" />ENG</Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 cursor-pointer ">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top"> <img src="/img/flag/eng.png" className="w-6 h-6 rounded-full" alt="" /> English</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom"> <img src="/img/flag/Deutsch.png" className="w-6 h-6 rounded-full" alt="" /> Deutsch</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right"> <img src="/img/flag/Spanish.png" className="w-6 h-6 rounded-full" alt="" /> Spanish</DropdownMenuRadioItem>
                     <DropdownMenuRadioItem value="right"> <img src="/img/flag/French.png" className="w-6 h-6 rounded-full" alt="" /> French</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
