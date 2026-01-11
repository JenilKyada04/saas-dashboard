"use client";

import { ChevronUp } from "lucide-react";
import { useState } from "react";

const CourseOverview = () => {
  const [expanded, setExpanded] = useState(true);

  const learnings: string[] = [
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
  ];

  return (
    <div className="bg-white rounded-xl p-6 relative">
      <span className="absolute left-0 top-6 h-6 w-1 bg-blue-600 rounded-full" />

      <h3 className="font-semibold text-lg mb-3">
        What you’ll learn
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
        aliquam voluptas laudantium incidunt architecto nam excepturi
        provident rem laborum repellendus placeat neque aut doloremque
        ut ullam, veritatis nesciunt iusto officia alias, non est vitae.
      </p>

      {expanded && (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-600 mb-4">
            {learnings.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            aliquam voluptas laudantium incidunt architecto nam excepturi
            provident rem laborum repellendus placeat neque aut doloremque
            ut ullam, veritatis nesciunt iusto officia alias, non est vitae.
          </p>
        </>
      )}

      <div className="flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 font-medium"
        >
          See less
        </button>

        <ChevronUp className="text-blue-600 w-5 h-5" />
      </div>
    </div>
  );
};

export default CourseOverview;
