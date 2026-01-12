"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Course = {
    id: number;
    img: string;
    title: string;
    instructors: string;
    ratingText: string;
};

type SavedContextType = {
    savedCourses: Course[];
    toggleSave: (course: Course) => void;
    isSaved: (id: number) => boolean;
};

const SavedCoursesContext = createContext<SavedContextType | null>(null);

export const SavedCoursesProvider = ({ children }: { children: React.ReactNode }) => {
    const [savedCourses, setSavedCourses] = useState<Course[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("savedCourses");
        if (stored) {
            setSavedCourses(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("savedCourses", JSON.stringify(savedCourses));
    }, [savedCourses]);

    const toggleSave = (course: Course) => {
        setSavedCourses(prev =>
            prev.some(c => c.id === course.id)
                ? prev.filter(c => c.id !== course.id)
                : [...prev, course]
        );
    };

    const isSaved = (id: number) =>
        savedCourses.some(course => course.id === id);

    return (
        <SavedCoursesContext.Provider value={{ savedCourses, toggleSave, isSaved }}>
            {children}
        </SavedCoursesContext.Provider>
    );
};

export const useSavedCourses = () => {
    const context = useContext(SavedCoursesContext);
    if (!context) {
        throw new Error("useSavedCourses must be used within SavedCoursesProvider");
    }
    return context;
};
