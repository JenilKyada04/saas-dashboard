import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const teachers = [
    {
        name: "Calvini Patisi",
        subject: "UI Design Teacher",
        img: "/img/teacher/t1.png"
    },
    {
        name: "Sarah Johnson",
        subject: "Math Teacher",
        img: "/img/teacher/t2.png"
    },
    {
        name: "Nairobi Valy",
        subject: "UI/UX Designer",
        img: "/img/teacher/t3.png"
    },
    {
        name: "Justin Pa",
        subject: "Graphic Designer",
        img: "/img/teacher/t4.png"
    },
    {
        name: "Ronaldo Lata",
        subject: "Mobile App Developer",
        img: "/img/teacher/t5.png"
    },
    {
        name: "Ronaldo Lata",
        subject: "IOS Developer",
        img: "/img/teacher/t6.png"
    },
    {
        name: "Ronaldo Lata",
        subject: "Full Stack Developer",
        img: "/img/teacher/t7.png"
    },
    {
        name: "Sarah Johnson",
        subject: "Backend Developer",
        img: "/img/teacher/t8.png"
    },
]

function Topteacherscard() {
    return (
        <div>
            {teachers.map((teacher, index) => (
                <div key={index} className='w-full rounded-lg '>
                    <div className=" cursor-pointer mx-5 my-1 rounded-2xl p-1 flex items-center ">
                        <img src={teacher.img} className='w-10 rounded-full' alt="" />
                        <div className='flex justify-between w-full items-center pl-3'>
                            <div className='pl-3'>
                                <h1>{teacher.name}</h1>
                                <h5 className="text-sm font-light">{teacher.subject}</h5>
                            </div>
                            <div>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Topteacherscard
