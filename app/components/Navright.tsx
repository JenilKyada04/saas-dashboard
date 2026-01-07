import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "./Dropdown";



function Navright() {
    return (
        <div className="flex items-center gap-4  ">
            <div className="relative hidden sm:block">
                <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
                <input
                    className="bg-blue-50 pl-10 pr-4 py-2 hover:border rounded-2xl text-sm"
                    placeholder="Search"
                />
            </div>
            <Dropdown />
            <img src="/img/icon/chat.png" className="  " alt="" />
            <img src="/img/icon/savebtn.png" alt="" />
            <img src="/img/icon/bell.png" alt="" />
            <img
                src="/img/profile.png"
                className="rounded-full w-10 hover:ring-1 hover:ring-red-500 cursor-pointer"
                alt="profile"
            />
            <h5>Hi, Antonio</h5>
            <IoIosArrowDown className="text-xl cursor-pointer" />
        </div>
    )
}

export default Navright
