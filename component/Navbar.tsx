"use client";

import Navright from "./NavCard";

import { FiMenu } from "react-icons/fi";
import { useSidebar } from "../context/SidebarContext";

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

                <h2 className="font-normal  hidden md:block text-black cursor-pointer">Dashboard</h2>
            </div>

            <Navright />
            
        </div>
    );
}
