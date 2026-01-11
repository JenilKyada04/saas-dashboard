"use client";

import { useState } from "react";
import { PlayCircle, FileText, Eye } from "lucide-react";

type Lesson = {
    title: string;
    duration: string;
    preview?: boolean;
};

type Section = {
    title: string;
    lessons?: Lesson[];
};

const sections: Section[] = [
    {
        title: "Intro to Course and to our self",
        lessons: [
            { title: "Course Intro", duration: "30 min", preview: true },
            { title: "Watch Before You Start", duration: "5 min", preview: true },
            { title: "Read Before You Start", duration: "-", preview: false },
        ],
    },
    { title: "Course Fundamentals" },
    { title: "You can develop skill and setup" },
    { title: "15 Things To Know About Education?" },
    { title: "Course Description" },
];

const CourseContent = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <div className="bg-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Course Content</h3>
            <p className="text-sm text-gray-500 mb-4">
                All techniques are explained step-by-step, in a beginner-friendly format
                so that you can easily follow in a cohesive way.
            </p>

            <div className="border rounded-lg divide-y">
                {sections.map((section, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index}>
                            <button
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                className="w-full flex justify-between items-center p-4 text-sm font-medium"
                            >
                                <span>{section.title}</span>
                                <span className="text-xl">{isOpen ? "−" : "+"}</span>
                            </button>

                            {isOpen && section.lessons && (
                                <div className="border-t">
                                    {section.lessons.map((lesson, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between px-4 py-3 text-sm"
                                        >
                                            <div className="flex items-center gap-3 text-gray-700">
                                                {lesson.preview ? (
                                                    <PlayCircle size={16} />
                                                ) : (
                                                    <FileText size={16} />
                                                )}
                                                <span>{lesson.title}</span>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <span className="text-gray-500">
                                                    {lesson.duration}
                                                </span>

                                                {lesson.preview && (
                                                    <button className="flex items-center gap-1 text-blue-600 text-xs border px-2 py-1 rounded">
                                                        <Eye size={12} />
                                                        Preview
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseContent;
