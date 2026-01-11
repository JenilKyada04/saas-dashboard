"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";

const navItems = [
  { name: "Dashboard", href: "/", icon: "/img/icon/dashboard.png" },
  { name: "Courses", href: "/courses", icon: "/img/icon/course.png" },
  { name: "Students", href: "/students", icon: "/img/icon/student.png" },
  { name: "Teachers", href: "/teachers", icon: "/img/icon/teacher.png" },
  { name: "Events", href: "/events", icon: "/img/icon/events.png" },
  { name: "Exams", href: "/exams", icon: "/img/icon/exam.png" },
  { name: "Blogs", href: "/blogs", icon: "/img/icon/blog.png" },
  { name: "Communities", href: "/communities", icon: "/img/icon/comm.png" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-white border-r
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 flex flex-col`}
      >
        <div className="flex flex-col items-center py-8">
          <img src="/img/logo.png" className="w-16 mb-2" alt="logo" />
          <h1 className="text-xl font-bold text-blue-600">EDUBOARD</h1>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group relative flex items-center gap-3 px-8 py-3 rounded-lg
                transition-all duration-300
                ${
                  active
                    ? "bg-gray-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }
                hover:translate-x-1 hover:shadow-sm`}
              >
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-md" />
                )}

                <img
                  src={item.icon}
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  alt=""
                />

                <span className="transition-colors duration-300">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="px-8 pb-6 space-y-3">
          <button className="group flex items-center gap-3 text-gray-600
            transition-all duration-300
            hover:text-blue-600 hover:translate-x-1">
            <img
              src="/img/icon/support.png"
              className="w-5 h-5 transition-transform group-hover:scale-110"
              alt=""
            />
            <span>Support</span>
          </button>

          <button className="group flex items-center gap-3 text-gray-600
            transition-all duration-300
            hover:text-red-500 hover:translate-x-1">
            <img
              src="/img/icon/logout.png"
              className="w-5 h-5 transition-transform group-hover:scale-110"
              alt=""
            />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
