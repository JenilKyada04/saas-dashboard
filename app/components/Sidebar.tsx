"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";

const navItems = [
  { name: "Dashboard", href: "/", icon: <img src="/img/icon/dashboard.png" alt="" /> },
  { name: "Courses", href: "/courses", icon: <img src="/img/icon/course.png" alt="" /> },
  { name: "Students", href: "/students", icon: <img src="/img/icon/student.png" alt="" /> },
  { name: "Teachers", href: "/teachers", icon: <img src="/img/icon/teacher.png" alt="" /> },
  { name: "Events", href: "/events", icon: <img src="/img/icon/events.png" alt="" /> },
  { name: "Exams", href: "/exams", icon: <img src="/img/icon/exam.png" alt="" /> },
  { name: "Blogs", href: "/blogs", icon: <img src="/img/icon/blog.png" alt="" /> },
  { name: "Communities", href: "/communities", icon: <img src="/img/icon/comm.png" alt="" /> }
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
        className={`fixed md:static z-50 w-64 bg-white h-screen border-r py-8
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="flex flex-col items-center justify-center mb-5">
          <img src="/img/logo.png" className="w-30" alt="" />
          <h1 className="text-xl font-bold mb-10 text-blue-600">EDUBOARD</h1>
        </div>

        <nav className="space-y-2 ">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (

              <Link

                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center font-normal gap-3 px-4 py-2 rounded-lg transition
                ${active
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {item.icon}
                {item.name}

              </Link>
            );
          })}
        </nav>

      </aside>
    </>
  );
}
