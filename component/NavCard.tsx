"use client";

import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

import { Dropdown } from "./Dropdown";
import NavbarSaved from "./NavbarSaved";
import NavbarNotification from "./NavbarNotification";
import { useSavedCourses } from "../context/SavedCoursesContext";
import ChatDropdown from "./ChatDropdown";

import { useQueryState } from 'nuqs'


import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ProfileDropdown from "./ProfileDropdown";

function NavCard() {
    const [openSaved, setOpenSaved] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const [openChat, setOpenChat] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);


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

            if (
                chatRef.current &&
                !chatRef.current.contains(event.target as Node)
            ) {
                setOpenChat(false);
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



            <div ref={chatRef} className="relative">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setOpenChat(prev => !prev)}
                            className="cursor-pointer"
                        >
                            <img src="/img/icon/chat.png" alt="Chat" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>Chat Box</TooltipContent>
                </Tooltip>

                {openChat && <ChatDropdown />}
            </div>




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
                    <ProfileDropdown
                        open={openProfile}
                        onClose={() => setOpenProfile(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default NavCard;
// 