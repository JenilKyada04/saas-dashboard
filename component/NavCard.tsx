import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "./Dropdown";



function NavCard() {
    return (
        <div className="flex  items-center gap-4  ">
            <div className="relative hidden sm:block cursor-pointer">
                <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
                <input
                    className="bg-blue-50 cursor-pointer pl-10 pr-4 py-2 hover:border rounded-xl text-sm"
                    placeholder="Search"    
                />
            </div>
            <Dropdown />
            <img src="/img/icon/chat.png" className="cursor-pointer" alt="" />
            <img src="/img/icon/savebtn.png" className="cursor-pointer" alt="" />
            <img src="/img/icon/bell.png" className="cursor-pointer" alt="" />

            <img
                src="/img/profile.png"
                className="rounded-full w-10 hover:ring-1 hover:ring-red-500 cursor-pointer"
                alt="profile"
            />
            <h5 className="sm:block hidden cursor-pointer" >Hi, Antonio</h5>
            <IoIosArrowDown className="text-xl cursor-pointer" />
        </div>
    )
}

export default NavCard
