
import { IoMdArrowRoundForward } from "react-icons/io";

function Card() {
    return (
        <div className=" p-2 grid md:grid-cols-3 gap-2   " >
            <div className=" white-blue p-4 border-2 rounded-3xl">
                <h5 className="font-semibold" >UI Design: Zero to Mastery</h5>
                <p className="font-normal"> David Hartmann</p>
                <div className="flex font-light text-gray-600 text-[12px] gap-3 ">
                    <div>
                        <p>23/30 Lesson</p>
                        <p>615 Students</p>
                    </div>
                    <div>
                        <p>77/110 Hours</p>
                        <p>2/3 Exams </p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>level : <span className="pl-1" >Intermediate</span></p>
                    <p className="text-blue-500 cursor-pointer flex items-center">
                        <p>Continue</p>
                        <IoMdArrowRoundForward />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
