"use client";

import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
  
type ProfileDropdownProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileDropdown({
  open,
  onClose,
}: ProfileDropdownProps) {
  if (!open) return null;

  return (
    <div
      className="absolute right-0 mt-3 w-52 rounded-xl bg-white shadow-lg border z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="py-2 text-sm">
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
            onClick={onClose}
            className="flex w-full items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            <FiLogOut /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
