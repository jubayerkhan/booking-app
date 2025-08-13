import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.png";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
    {name: "Features", link: "/"},
    {name: "Pricing", link: "/"},
    {name: "Enterprise", link: "/"},
    {name: "Careers", link: "/"},
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-4 w-full lg:container lg:mx-auto container">
        <div className="flex items-center gap-x-[74px]">
            <Image src={Logo} alt="Logo"></Image>

            <div className="hidden lg:flex items-center gap-x-14">
                {navLinks.map((item, index) => (
                    <p key={index} className="font-medium text-[#36485C]">{item.name}</p>
                ))}
            </div>
        </div>
        <div className="flex items-center gap-5">
            <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an Account</p>
            <div className="flex items-center gap-x-3">
                <Image className="lg:w-6 w-8" src={User} alt="User"></Image>
                <span className="text-[#36485C] font-medium hidden lg:block">Sign in</span>
            </div>
            <Image className="lg:hidden" src={Menu} alt="Menu"></Image>
        </div>
    </nav>
  )
}
