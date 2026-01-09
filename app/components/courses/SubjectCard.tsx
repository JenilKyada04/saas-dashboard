import React from 'react'

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
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 ">
                {subject.map((sub, index) => (
                    <div className="bg-white rounded-lg flex justify-between shadow items-center">
                        <div className='pl-4'>
                            <h6 className="font-medium">{sub.name}</h6>
                            <h6 className='font-light'>{sub.desc}</h6>
                        </div>
                        <div className='white-blue w-20 h-20 rounded-lg'>
                            <img className='flex items-center pl-7 pt-7' src={sub.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default SubjectCard

