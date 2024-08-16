import React, { useState } from 'react';
import logo from '/logo.png'
import { RxCaretDown } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    // const showSideMenu = () => {
    //     setToggle(true);
    // }
    const hideSideMenu = () => {
        setToggle(false);
    }
    const toggleSideMenu = () => {
        setToggle(!toggle);
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <IoIosSearch />,
            name: "Offers"
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: "",
            name: "Sign In"
        },
        {
            icon: "",
            name: "Cart"
        },
    ]

    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500"
                onClick={hideSideMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden",
                    zIndex: "99"
                }}
            >
                <div className="w-[500px] bg-white h-full absolute duration-[400ms]"
                    onClick={(e) => { e.stopPropagation() }}
                    style={{
                        left: toggle ? "0%" : "-100%"
                    }}
                >
                </div>
            </div>
            
            <header className="p-[15px] shadow-md fixed top-0 z-[99] bg-white w-full left-0">
                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="w-[32px] mr-5">
                        <img src={logo} alt="Swiggy Logo" className="w-full" />
                    </div>

                    <div onClick={toggleSideMenu} className="cursor-pointer">
                        <span className="font-bold border-b-[3px] border-[black] mx-3 hover:text-[#ff5200] hover:border-[#ff5200]">Ahmedabad</span>
                        Gujarat, India <RxCaretDown fontSize={25} className="inline text-[#ff5200] cursor-pointer" />
                    </div>

                    <nav className="ml-auto">
                        <ul className="flex list-none gap-10 font-semibold text-[18px]">
                            {links.map((link, index) => (
                                <li key={index} className="flex items-center gap-3 cursor-pointer hover:text-[#ff5200]">
                                    {link.icon}
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header