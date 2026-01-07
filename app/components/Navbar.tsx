"use client";

import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { useSidebar } from "../context/SidebarContext";

export default function Header() {
    const { setOpen } = useSidebar();

    return (
        <div className="flex justify-between items-center bg-white px-4 md:px-6 py-4 rounded-xl">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden text-xl"
                >
                    <FiMenu />
                </button>

                <h2 className="font-semibold hidden md:block text-black">Dashboard</h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <FiSearch className="absolute top-3 left-3 text-gray-400" />
                    <input
                        className="pl-10 pr-4 py-2 border rounded-full text-sm"
                        placeholder="Search"
                    />
                </div>

                <FiBell className="text-xl" />
                <img
                    src="https://i.pravatar.cc/40"
                    className="rounded-full"
                    alt="profile"
                />
            </div>
        </div>
    );
}
