import React from 'react'

const uiuxcourse = [
    {
        img: "/img/course/uiux1.jpg",
        students: "5,496 students",
        hours: "80 hrs/month",
        title: "UI/UX Designing and Wireframing and Webflow Designing",
        instructors: "Matt Brandon and Roxie Brandon",
        ratingImg: "/img/star.png",
        ratingText: "4.8 (3.5k reviews)",
        level: "Beginner",
        type: "Course",
        duration: "4-6 Months",
    },

    {
        img: "/img/course/uiux2.jpg",
        students: "1,516 students",
        hours: "80 hrs/month",
        title: "UI/UX Designing",
        instructors: "Matt Brandon and Roxie Brandon",
        ratingImg: "/img/star.png",
        ratingText: "4.8 (3.5k reviews)",
        level: "Beginner",
        type: "Course",
        duration: "4-6 Months",
    },
    {
        img: "/img/course/uiux3.png",
        students: "12,586 students",
        hours: "80 hrs/month",
        title: "Low/High Fidelity Wireframing and UI Design",
        instructors: "Matt Brandon and Roxie Brandon",
        ratingImg: "/img/star.png",
        ratingText: "4.8 (3.5k reviews)",
        level: "Beginner",
        type: "Course",
        duration: "4-6 Months",
    },
     {
        img: "/img/course/uiux1.jpg",
        students: "5,496 students",
        hours: "80 hrs/month",
        title: "UI/UX Designing and Wireframing and Webflow Designing",
        instructors: "Matt Brandon and Roxie Brandon",
        ratingImg: "/img/star.png",
        ratingText: "4.8 (3.5k reviews)",
        level: "Beginner",
        type: "Course",
        duration: "4-6 Months",
    },

    {
        img: "/img/course/uiux2.jpg",
        students: "1,516 students",
        hours: "80 hrs/month",
        title: "UI/UX Designing",
        instructors: "Matt Brandon and Roxie Brandon",
        ratingImg: "/img/star.png",
        ratingText: "4.8 (3.5k reviews)",
        level: "Beginner",
        type: "Course",
        duration: "4-6 Months",
    },
    {
        img: "/img/course/uiux3.png",
        students: "12,586 students",
        hours: "80 hrs/month",
        title: "Low/High Fidelity Wireframing and UI Design",
        instructors: "Matt Brandon and Roxie Brandon",
        ratingImg: "/img/star.png",
        ratingText: "4.8 (3.5k reviews)",
        level: "Beginner",
        type: "Course",
        duration: "4-6 Months",
    },

]

function Coursecard() {
    return (
        <>
            <div className='px-0 py-6  mt-10 grid grid-cols-1 md:grid-cols-3 gap-5'>


                {uiuxcourse.map((course, index) => (

                    <div key={index} className='bg-white p-4 rounded-2xl shadow-md cursor-pointer'>
                        
                        <div className='overflow-hidden'>

                        <img src={course.img} className=' rounded-2xl w-full h-75 object-cover transition-transform duration-300 transform hover:scale-110' alt="" />
                        </div>

                        <div className='mt-4 space-y-1 flex flex-col justify-between '>
                            <div className='flex justify-between items-center'>
                                <p>{course.students}</p>
                                <p>{course.hours}</p>
                            </div>
                            <h5 className='font-semibold text-2xl'>{course.title}</h5>
                            <p>{course.instructors}</p>
                            <div className='flex justify-start items-center gap-1 mt-7'>
                                <img src="/img/star.png" className='w-4 h-4' alt="" />
                                <h6 className='font-light'>{course.ratingText}</h6>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2'>
                                    <span>{course.level}</span>
                                    <span>{course.type}</span>
                                    <span>{course.duration}</span>
                                </div>
                                <div>
                                    <img src="/img/icon/savebtn.png" className='w-3' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Coursecard
