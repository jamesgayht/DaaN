import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../styles";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex py-6 justify-between items-center navbar fixed bg-black z-[1] ${styles.paddingX}`}
    >
      {/* <img src={} alt="daan" className="w-[124px] h-[32px]"/> */}
      <a href={`#${""}`} className="text-stone-100 font-normal cursor-pointer">
        DaaN
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 cursor-pointer font-normal font-poppins">
        {navLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-stone-100 ${
              idx === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={"w-[28px] h-[28px] object-contain cursor-pointer"}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list flex flex-col justify-end items-center flex-1 cursor-pointer font-normal font-poppins">
            {navLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-stone-100 ${
                  idx === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
