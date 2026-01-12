import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from "./Dropdown";



function NavCard() {
    return (
        <div className="flex  items-center gap-4 px-4  ">
            <div className="relative hidden sm:block cursor-pointer">
                <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    className=" cursor-pointer w-66 pl-10 pr-4 py-2 text-sm
                    rounded-xl bg-blue-50  border border-transparent  placeholder-gray-400 transition-all duration-200
                    focus:outline-none   focus:bg-white  focus:border-blue-500   focus:ring-2 focus:ring-blue-100
                    hover:bg-blue-100
                "
                />
            </div>
            <Dropdown />
            <img src="/img/icon/chat.png" className="cursor-pointer " alt="" />
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
