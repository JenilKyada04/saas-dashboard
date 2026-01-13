"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <Image
          src="/img/user/avatar.png"
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full border"
        />
        <span className="hidden md:block font-medium">Antonio</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-52 rounded-xl bg-white shadow-lg border z-50">
          <ul className="py-2 text-sm">
            <li>
              <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-gray-100">
                <FiUser /> Profile
              </button>
            </li>
            <li>
              <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-gray-100">
                <FiSettings /> Settings
              </button>
            </li>
            <li className="border-t mt-2">
              <button className="flex w-full items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50">
                <FiLogOut /> Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
