import { Bookmark } from "lucide-react";

const CourseHeader = () => {
  return (
    <div className="bg-white p-6 rounded-xl space-y-4 relative">
      <span className="absolute left-0 top-6 h-10 w-1 bg-blue-600 rounded-full" />

      <h1 className="text-3xl font-semibold text-black leading-snug">
        UI/UX Designing and Wireframing and Webflow Designing
      </h1>

      <p className="text-gray-500 max-w-3xl">
        A comprehensive course on transforming Midjourney concepts into
        interactive prototypes using essential design techniques and AI tools
      </p>

      <div className="flex items-center gap-6 flex-wrap">

        <div className="flex items-center gap-2">
          <img
            src="/img/teacher/t1.png"
            alt="Instructor"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-700">
            Taught by <span className="font-medium">Calvin Patisi</span>
          </span>
        </div>

        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <Bookmark size={16} />
          Add to Save list
        </button>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm font-medium text-gray-700">
          Software You’ll Learn:
        </span>

        <div className="flex items-center gap-4 ">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src="/img/icon/Figma.png" className="w-6 h-6" alt="Figma" />
            Figma
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src="/img/icon/Protopie.png" className="w-6 h-6" alt="Protopie" />
            Protopie
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src="/img/icon/AdobeXD.png" className="w-6 h-6" alt="Adobe XD" />
            Adobe XD
          </div>

        </div>
      </div>

    </div>
  );
};

export default CourseHeader;
