"use client";

import Navright from "./NavCard";

import { FiMenu } from "react-icons/fi";
import { useSidebar } from "../context/SidebarContext";
import Link from "next/link"
import { SlashIcon } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function Header() {
    const { setOpen } = useSidebar();

    return (
        <div className="flex justify-between items-center bg-white px-2 md:px-6 py-4 ">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden text-xl"
                >
                    <FiMenu />
                </button>

                <h2 className="font-normal  hidden md:block text-black cursor-pointer">
                    <Tooltip>
                        <TooltipTrigger className="cursor-pointer">Dashboard</TooltipTrigger>
                        <TooltipContent>
                            <p>Dashboard</p>
                        </TooltipContent>
                    </Tooltip>
                </h2>


                {/* <div className=" hidden md:block">

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>


                                    <Tooltip>
                                        <TooltipTrigger className="cursor-pointer"> <Link href="/">Dashboard</Link></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Dashboard</p>
                                        </TooltipContent>
                                    </Tooltip>

                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/courses">Courses</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>   
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <Link href={"/coursespage"}> Courses Page</Link>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div> */}

            </div>

            <Navright />

        </div>
    );
}
