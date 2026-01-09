import React from 'react'

function Coursecard() {
    return (
        <>
            <div className='p-5  mt-10 grid grid-cols-3'>
                <div className='bg-white p-4'>
                    <img src="/img/course/uiux1.jpg" alt="" />
                    <div className='flex justify-between items-center'>

                        <p>5,496 students</p>
                        <p>80 hrs/month</p>
                    </div>
                    <h5>UI/UX Designing and Wireframing and Webflow Designing</h5>
                    <p>Matt Brandon and Roxie Brandon</p>

                    <div className='flex justify-start items-center gap-1'>
                        <img src="/img/star.png" className='w-4 h-4' alt="" />
                        <h6>4.8 (3.5k reviews)</h6>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <span>Beginner</span>
                            <span>Course</span>
                            <span>4-6 Months</span>
                        </div>
                        <div>
                            <img src="/img/icon/savebtn.png" className='w-3' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coursecard
