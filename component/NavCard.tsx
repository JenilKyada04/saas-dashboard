"use client";

import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

import { Dropdown } from "./Dropdown";
import NavbarSaved from "./NavbarSaved";
import NavbarNotification from "./NavbarNotification";
import { useSavedCourses } from "../context/SavedCoursesContext";
import { useQueryState } from 'nuqs'


import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

function NavCard() {
    const [openSaved, setOpenSaved] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const { savedCourses } = useSavedCourses();

    const savedRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                savedRef.current &&
                !savedRef.current.contains(event.target as Node)
            ) {
                setOpenSaved(false);
            }

            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node)
            ) {
                setOpenNotification(false);
            }

            if (
                profileRef.current &&
                !profileRef.current.contains(event.target as Node)
            ) {
                setOpenProfile(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [name, setName] = useQueryState('name')

    return (
        <div className="relative flex items-center gap-4 px-4">

            <div className="relative hidden sm:block">
                <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-66 pl-10 pr-4 py-2 text-sm rounded-xl bg-blue-50 focus:outline-none"
                    value={name || ''}
                    onChange={e => setName(e.target.value)}
                />
            </div>

           


            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <Dropdown />
                    </div>
                </TooltipTrigger>
                <TooltipContent>Language</TooltipContent>
            </Tooltip>


            <Tooltip>
                <TooltipTrigger asChild>
                    <button>
                        <img src="/img/icon/chat.png" className=" cursor-pointer " alt="Chat" />
                    </button>
                </TooltipTrigger>
                <TooltipContent>Chat Box</TooltipContent>
            </Tooltip>

            

            <div ref={savedRef} className="relative">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setOpenSaved(prev => !prev)}
                            className="relative  cursor-pointer "
                        >
                            <img src="/img/icon/savebtn1.png" alt="Saved" />

                            {savedCourses.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] px-1.5 rounded-full">
                                    {savedCourses.length}
                                </span>
                            )}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Saved Courses</TooltipContent>
                </Tooltip>

                {openSaved && <NavbarSaved />}
            </div>

            <div ref={notificationRef} className="relative">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setOpenNotification(prev => !prev)}
                            className="relative  cursor-pointer "
                        >
                            <img src="/img/icon/bell.png" alt="Notification" />

                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] px-1.5 rounded-full">
                                2
                            </span>
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Notification</TooltipContent>
                </Tooltip>

                {openNotification && (
                    <NavbarNotification
                        open={openNotification}
                        onClose={() => setOpenNotification(false)}
                    />
                )}
            </div>

            <div ref={profileRef} className="relative">
                <Tooltip >
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setOpenProfile(prev => !prev)}
                            className="flex items-center gap-2 "
                        >
                            <img
                                src="/img/profile.png"
                                className="rounded-fullw-10"
                                alt="Profile"
                            />
                            <h5 className="hidden sm:block">Hi, Antonio</h5>
                            <IoIosArrowDown />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Profile</TooltipContent>
                </Tooltip>

                {openProfile && (
                    <div className="absolute right-0 mt-3 w-48 rounded-xl bg-white shadow-lg border z-50">
                        <ul className="py-2 text-sm">
                            <li>
                                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                    My Profile
                                </button>
                            </li>
                            <li>
                                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                    Settings
                                </button>
                            </li>
                            <li className="border-t mt-1">
                                <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 cursor-pointer"
                                    onClick={() => window.location.href = "https://www.google.com"}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )} 
             </div> 
        </div>
    );
}

export default NavCard;
// 