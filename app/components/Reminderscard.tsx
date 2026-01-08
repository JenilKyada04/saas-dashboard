import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";


function Reminderscard() {
    return (
        <div className='  w-full rounded-lg '>
            <div className="white-blue  cursor-pointer m-4.5 rounded-2xl p-3 flex items-center justify-between">
                <div>
                    <h1>Attend Zoom call (UI Design)</h1>
                    <h5 className="text-sm font-light">27 march, 2023</h5>
                </div>
                <div className="cursor-pointer " ><MdArrowForwardIos /></div>
            </div>
        </div>
    )
}

export default Reminderscard
