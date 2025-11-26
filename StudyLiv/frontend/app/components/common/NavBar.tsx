"use client"
import { CiSearch } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import Image from "next/image";
import { inter } from "@/app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InputBase } from "@mui/material";
import { useState } from "react";
import { BsFillMortarboardFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import mainLogo from "@/public/assets/Logo/Logo-Small-Light.png";

const NavBar = () => {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Function to get active link styles
  const getActiveStyles = (path: string) => {
    return isActive(path)
      ? "font-sans font-semibold text-base leading-6 text-[var(--yellow-50)] hover:bg-transparent"
      : "font-sans font-normal text-base leading-6 text-[var(--richblack-25)] max-[800px]:text-[var(--richblack-900)] hover:bg-transparent";
  };

  const catelogs = [ //it will be from back end
    {
      to:"python",
      categoryName:"Python"
    },
    {
      to:"web-development",
      categoryName:"Web Development"
    },
    {
      to:"android-development",
      categoryName:"Android Development"
    },
    {
      to:"block-chain",
      categoryName:"Block Chain"
    },
    {
      to:"artificial-intelligence",
      categoryName:"Artifical Intelligence"
    },
    {
      to:"data-science",
      categoryName:"Data Science"
    },
    {
      to:"cloud-computing",
      categoryName:"Cloud Computing"
    },
    {
      to:"dev-ops",
      categoryName:"Dev Ops"
    },
    {
      to:"cyber-security",
      categoryName:"Cyber Security"
    },
  ]
  return (
    <div className={`w-full ${(isActive("/catelog") || isActive("/course") || isActive("/dashboard") || isActive("/checkout"))?" bg-[var(--richblack-800)]":"bg-[var(--richblack-900)]"} h-[56px] border-b-[1px] border-[var(--richblack-700)] top-0 sticky z-10`}>
      <div className="navbar shadow-sm w-11/12 h-full mx-auto py-3 min-[810px]:px-[120px] flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content bg-white text-[var(--richblack-900)] rounded-box z-1 mt-3 w-52 p-2 shadow ${inter.variable} font-sans font-normal text-base leading-6 text-[var(--richblack-25)]`}>
              <li><Link className={getActiveStyles("/")} href={"/"}>Home</Link></li>
              <li>
                <summary>Catalog</summary>
                <ul className="p-2">

                  {
                    catelogs.map((catelog,index) => (
                      <li key={index} className="hover:bg-[var(--richblack-50)] rounded-lg">
                        <Link href={`/catelog/${catelog.to}`}>
                          {catelog.categoryName}
                        </Link>
                      </li>
                    ))
                  }

                </ul>
              </li>
              <li><Link className={getActiveStyles("/about")} href={"/about"}>About Us</Link></li>
              <li><Link className={getActiveStyles("/contact")} href={"/contact"}>Contact Us</Link></li>
              <li className="items-center flex-row-reverse w-full justify-between
              max-[599px]:flex hidden text-black">
                              <button className="btn btn-ghost btn-circle">
                                <CiSearch className="w-5 h-5 fill-[var(--richblack-200)]"/>
                              </button>
                              <InputBase
                                placeholder="Search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="w-[150px] h-6 px-2 bg-white rounded border border-[var(--richblack-200)] text-[var(--richblack-900)] placeholder:text-[var(--richblack-600)]"
                                sx={{
                                '& .MuiInputBase-input': {
                                color: 'var(--richblack-900)',
                                '&::placeholder': {
                                  color: 'var(--richblack-600)',
                                  opacity: 1,
                                },
                                },
                                '& .MuiInputBase-root': {
                                  backgroundColor: 'white',
                                  '&:hover': {
                                    backgroundColor: 'white',
                                  },
                                  '&.Mui-focused': {
                                    backgroundColor: 'white',
                                  },
                                },
                                '&:hover': {
                                  backgroundColor: 'white',
                                },
                                '&.Mui-focused': {
                                  backgroundColor: 'white',
                                },
                              }}/>
              </li>
            </ul>
          </div>
          <Link
            className="hover:cursor-pointer hover:bg-transparent hover:border-none text-xl
            w-[160px] h-[32px] text-[var(--pure-greys-5)] font-semibold flex gap-2"
            href="/"
          >
            <Image src={mainLogo} alt="StudyLiv Logo" width={32} height={32}/>
            <p className="block max-[820px]:hidden font-bold">Study Liv</p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 ${inter.variable} font-sans font-normal text-base leading-6 text-[var(--richblack-25)]`}>
            <li><Link className={getActiveStyles("/")} href={"/"}>Home</Link></li>
            <li>
              <details className="hover:bg-transparent">
                <summary  className={`hover:bg-transparent ${getActiveStyles("/catelog")}`}>Catalog</summary>
                <ul className="p-2 w-[300px] bg-[var(--richblack-5)] text-[var(--richblack-900)] z-100 relative">

                  <div className="w-6 h-6 bg-[var(--richblack-5)] absolute rotate-45 left-[65.4px] -top-[10px]"/>

                  {
                    catelogs.map((catelog,index) => (
                      <li key={index} className="hover:bg-[var(--richblack-50)] bg-transparent rounded-lg py-4 pl-4">
                        <Link href={`/catelog/${catelog.to}`} className="w-full h-full bg-transparent">
                          {catelog.categoryName}
                        </Link>
                      </li>
                    ))
                  }

                </ul>
              </details>
            </li>
            <li><Link className={getActiveStyles("/about")} href={"/about"}>About Us</Link></li>
            <li><Link className={getActiveStyles("/contact")} href={"/contact"}>Contact Us</Link></li>
          </ul>
        </div>

        <div className="navbar-end">

          <div className="flex gap-2">
            <div className="flex items-center max-[600px]:hidden">
              <button className="btn btn-ghost btn-circle">
                <CiSearch className="w-5 h-5 fill-[var(--richblack-200)]"/>
              </button>
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-16 h-6 md:w-auto"
              />
            </div>
            
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    alt="User Avatar"
                    src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content text-[var(--richblack-200)] bg-[var(--richblack-800)] rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <Link href={"/dashboard"} className="hover:bg-[var(--richblack-600)] flex justify-between items-center rounded-lg py-4 gap-2">
                    <p className="font-bold">
                      Dashboard
                    </p>
                    <BsFillMortarboardFill className="w-5 h-5"/>
                  </Link>
                </li>
                <li>
                  <Link href={"/logout"} className="hover:bg-[var(--richblack-600)] flex justify-between items-center rounded-lg py-4 gap-2">
                    <p className="font-bold">
                      Logout
                    </p>
                    <ImExit className="w-5 h-5"/>
                  </Link>
                </li>
              </ul>
            </div>

            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <LuBell className="w-5 h-5 font-extrabold fill-white"/>
                </div>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default NavBar;

