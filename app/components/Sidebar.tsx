"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";

const navItems = [
  { name: "Dashboard", href: "/", },
  { name: "Courses", href: "/courses",  },
  { name: "Students", href: "/students",},
  { name: "Teachers", href: "/teachers",  },
  { name: "Events", href: "/events",  },
  { name: "Exams", href: "/exams", },
  { name: "Blogs", href: "/blogs",  },
  {name : "Communities", href: "/communities",  }
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
        className={`fixed md:static z-50 w-64 bg-white h-screen border-r px-6 py-8
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <h1 className="text-xl font-bold mb-10 text-blue-600">EDUBOARD</h1>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
                  ${
                    active
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {item.name}
                
              </Link>
            );
          })}
        </nav>
        
      </aside>
    </>
  );
}
