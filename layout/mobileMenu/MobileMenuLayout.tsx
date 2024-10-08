"use client";
import { useState } from "react";

const MobileMenu = ({ title, showMenu = true }: {title: string | undefined, showMenu: Boolean}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="kura_tm_mobile_menu w-full h-auto fixed top-0 left-0 hidden z-[10] middle:block">
      <div className="mobile_menu_inner w-full h-auto clear-both float-left bg-white py-[15px] pr-[30px] pl-[40px]">
        <div className="mobile_in w-full h-auto clear-both float-left flex items-center justify-between">
          <div className="logo">
            <a href="/">
              {title}
            </a>
          </div>
          {showMenu && <div className="trigger leading-[0]">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>}
        </div>
      </div>
      {showMenu && <div
        className="dropdown w-full h-auto clear-both float-left bg-white hidden"
        style={{ display: toggle ? "block" : "none" }}
      >
        <div className="dropdown_inner w-full h-auto clear-both float-left py-[25px] px-[40px]">
          <ul className="anchor_nav">
            <li className="current float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#home"
                onClick={() => setToggle(false)}
              >
                Home
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#posts"
                onClick={() => setToggle(false)}
              >
                Posts
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#accomplishments"
                onClick={() => setToggle(false)}
              >
                Accomplishments
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#skills"
                onClick={() => setToggle(false)}
              >
                Skills
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#timeline"
                onClick={() => setToggle(false)}
              >
                Timeline
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#contact"
                onClick={() => setToggle(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
};
export default MobileMenu;
