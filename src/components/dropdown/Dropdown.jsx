import React, { useState } from "react";
import { businessOffers } from "../Data";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={
        dropdown
          ? "pt-5 w-[190px] right-0 left-0 mx-auto absolute  ease-in-out duration-500  bg-white"
          : "pt-5 w-[190px] right-0 left-0 mx-auto absolute ease-in-out duration-500 bg-white"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {businessOffers.map((item)  => {
        return (
          <li
            key={item.id}
            onClick={() => setDropdown(false)}
            className="pb-2 px-4"
          >
            <Link
              to={item.url}
              className="hover:text-black ease-in-out duration-300"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;