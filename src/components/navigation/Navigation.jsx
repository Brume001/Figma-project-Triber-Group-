import React, { useState } from "react";
import { url } from "../Data";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Dropdown from "../dropdown/Dropdown";

const Navigation = ({ activePage }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <section className="w-[100%] mx-auto">
      <div className="flex justify-between mx-[0px] px-14 ">
        <div className="w-[250px] h-[60px]">
          <Link to="/">
            <img src={Logo} alt="Logo" className="" />
          </Link>
        </div>
        <nav className="my-auto">
          <ul className="flex justify-between w-[667px] capitalize text-[#8B8B8B] poppins text-[16px] font-bold">
            {url.map((link) => {
              if (link.title === "our business") {
                return (
                  <li
                    key={link.id}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    className="ease-in-out duration-500 relative"
                  >
                    <Link
                      to={link.url}
                      className={`${
                        activePage === link.title ? "text-red-700" : "null"
                      }`}
                    >
                      {link.title}
                    </Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={link.id}>
                  <Link to={link.url}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="my-auto">
          <a
            href="#"
            className="capitalize poppins font-bold text-[13px] bg-[#FF792B] py-[13.5px] px-[30.5px] text-white rounded"
          >
            get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navigation;