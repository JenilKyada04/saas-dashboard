"use client";

import { useSavedCourses } from "../context/SavedCoursesContext";
import { X } from "lucide-react";

export default function NavbarSaved() {
    const { savedCourses, toggleSave } = useSavedCourses();

    return (
        <div className="absolute right-0 top-12 z-50 w-80 bg-white rounded-2xl shadow-2xl p-4">

            <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">
                    Saved Courses
                </h4>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    {savedCourses.length}
                </span> 
            </div>

            {savedCourses.length === 0 && (
                <div className="text-center py-8">
                    <p className="text-sm text-gray-500">
                        No saved courses yet
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        Click the bookmark icon to save courses
                    </p>
                </div>
            )}

            <div className="space-y-3 max-h-72 overflow-auto scrollbar-thin scrollbar-thumb-gray-200">

                {savedCourses.map(course => (
                    <div
                        key={course.id}
                        className="group flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition"
                    >
                        <img
                            src={course.img}
                            className="w-14 h-14 rounded-lg object-cover"
                            alt=""
                        />

                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800 line-clamp-2">
                                {course.title}
                            </p>
                            <p className="text-xs text-gray-500">
                                {course.instructors}
                            </p>
                        </div>

                        <button
                            onClick={() => toggleSave(course)}
                            className="opacity-0 group-hover:opacity-100 transition"
                        >
                            <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                        </button>
                    </div>
                ))}

            </div>


        </div>
    );
}
