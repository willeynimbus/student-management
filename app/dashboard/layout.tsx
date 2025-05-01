// app/dashboard/layout.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx"; // Optional: for cleaner conditional classNames
import { BookOpen, LibraryBig, Layers, GraduationCap } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Course Type",
      href: "/dashboard/coursetype",
      icon: <BookOpen />,
    },
    { label: "Courses", href: "/dashboard/course", icon: <LibraryBig /> },
    {
      label: "Course Offering",
      href: "/dashboard/courseoffering",
      icon: <Layers />,
    },
    {
      label: "Student Registration",
      href: "/dashboard/studentregisteration",
      icon: <GraduationCap />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col px-4 py-6 md:px-16 md:py-12 gap-4 bg-white">
      {/* Navbar */}
      <div className="flex justify-between border-4 rounded-3xl border-black p-4 text-xl font-semibold shadow-md text-center">
        <div>Navbar</div>
        <div>
          <Button>
            <Link href={"/dashboard"}>Go to Dashboard</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-1">
        {/* Sidebar */}
        <div className="bg-gray-100 rounded-3xl border border-black p-4 w-full md:w-60 space-y-4 shadow-md">
          {navItems.map(({ label, href, icon }) => (
            <Link key={href} href={href}>
              <button
                className={clsx(
                  "flex justify-start items-center gap-1 w-full border border-black rounded-lg py-2 px-4 transition-all duration-200 mb-2",
                  pathname === href
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-white hover:bg-gray-200"
                )}
              >
                {icon}
                {label}
              </button>
            </Link>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 border border-black rounded-3xl p-4 shadow-md overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
