import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const footLinks = [
  {
    id: 1,
    title: "About",
    url: "#",
  },
  {
    id: 2,
    title: "FAQs",
    url: "#",
  },
  {
    id: 3,
    title: "Disclaimer",
    url: "#",
  },
  {
    id: 4,
    title: "Terms of Use",
    url: "#",
  },
  {
    id: 5,
    title: "Privacy",
    url: "#",
  },
];

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

const FooterLinks = () => {
  return (
    <section  className="bg-[#252525] flex justify-between px-16 py-8">
      <ul className="flex justify-between w-[505.54px] text-white font-bold text-[16px] poppins">
        {footLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>

      <ul className="flex justify-between items-center w-[122px] text-white ">
        {links.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.image}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterLinks;
