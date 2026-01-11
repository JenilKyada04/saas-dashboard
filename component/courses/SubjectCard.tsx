
const subject = [
    {
        name: "Advanced Prototype ",
        desc: "David Hartmann",
        img: "/img/icon/s1.png",
    },
    {
        name: "Graphic Design",
        desc: "David Hartmann",
        img: "/img/icon/s2.png",
    },
    {
        name: "App Development",
        desc: "David Hartmann",
        img: "/img/icon/s3.png",
    },
    {
        name: "UI Design",
        desc: "David Hartmann",
        img: "/img/icon/s4.png",
    },
]


function SubjectCard() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        {subject.map((sub, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white border rounded-xl  hover:shadow-sm transition"
          >
            <div className="pl-5">
              <h6 className="text-sm font-semibold text-gray-900">
                {sub.name}
              </h6>
              <p className="text-xs text-gray-500">
                {sub.desc}
              </p>
            </div>
  
            <div className="flex items-center justify-center w-19 h-19 rounded-lg bg-blue-50">
              <img src={sub.img} alt={sub.name} className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default SubjectCard;
  

