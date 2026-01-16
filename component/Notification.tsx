"use client";

import { useEffect, useRef , useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};


const notifications = [
  {
    id: 1,
    title: "New course published",
    desc: "UI/UX Design Masterclass",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "New student enrolled",
    desc: "John Doe joined your course",
    time: "1 hour ago",
  },
];


export default function NotificationDropdown({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  if (!open) return null;


  return (
    <>

        <div
          ref={ref}
          className="absolute right-0 top-12 z-50 w-100 h-100 bg-white rounded-xl shadow-lg border" >

          <div className="p-4 border-b font-semibold">Notifications</div>
          <div className="max-h-72 overflow-y-auto">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer relative shadow "
              >
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
                <p className="text-xs text-gray-400 mt-1">{item.time}</p>

                <X className="w-4 h-4 text-gray-400 hover:text-red-500 absolute right-3 top-1 "/>

              </div>

            ))}
          </div>

        </div>
    </>

  );
}



