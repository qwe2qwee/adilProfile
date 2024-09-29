import React, { useState } from "react";
import { navLinks } from "../constants/index";
import { IoLanguageOutline } from "react-icons/io5";

const Navbar = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);
  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, name, href }) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a">
              {name[language]}
            </a>
          </li>
        ))}
        <button
          onClick={setLanguage}
          className="w-12 h-12 bg-gray-600 flex justify-center items-center rounded-lg"
        >
          <IoLanguageOutline />
        </button>
      </ul>
    );
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Sayyed_Adil
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex "
            aria-label="toggle menu"
          >
            <img
              src={open ? "/assets/close.svg" : "/assets/m.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            {" "}
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`nav-sidebar ${
          open ? "max-h-screen" : "max-h-0"
        } nav-sidebar`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
