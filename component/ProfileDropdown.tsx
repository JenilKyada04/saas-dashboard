"use client";

import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

type ProfileDropdownProps = {
  open: boolean;
};

export default function ProfileDropdown({
  open,
}: ProfileDropdownProps) {
  if (!open) return null;

  return (
    <div
      className="absolute right-0 mt-3 w-52 rounded-xl bg-white shadow-lg border z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="py-2 text-sm">
        <div className=" flex justify-center items-center border-b-2 ">

          <img src="/img/profile.png" className=" mb-3 mt-3" alt="" />
          <span className="pl-3 font-semibold cursor-pointer hover:underline">I Am Antonio </span>

        </div>
        <li>
          <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-gray-100">
            <FiUser /> My Profile
          </button>
        </li>

        <li>
          <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-gray-100">
            <FiSettings /> Settings
          </button>
        </li>

        <li className="border-t mt-2">
          <button
           onClick={() => window.location.href = "https://www.google.com"}
            className="flex w-full items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            <FiLogOut /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
