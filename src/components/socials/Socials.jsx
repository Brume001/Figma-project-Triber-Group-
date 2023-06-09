import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "#",
    image: <GrFacebookOption />,
  },
  {
    id: 2,
    url: "#",
    image: <GrInstagram />,
  },
  {
    id: 3,
    url: "#",
    image: <AiOutlineTwitter />,
  },
  {
    id: 4,
    url: "#",
    image: <FaLinkedinIn />,
  },
];

const Socials = () => {
  return (
    <section>
      <ul className="flex justify-between items-center w-[122px] float-right">
        {links.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.image}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Socials;