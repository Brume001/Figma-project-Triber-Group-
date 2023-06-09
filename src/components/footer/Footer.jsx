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


const Footer = () => {
  return (
    <section className="bg-[#252525] text-white capitalize ">
      <div className="w-[1207.63px] mx-auto px-9">
        <div className="flex justify-between pt-[26px] pb-[22px] items-center">

        </div>
        <div className="flex justify-between my-[42px] poppins text-[17px] font-normal">
          <div className="">
            <h3 className="pb-7 font-extrabold text-xl nunito text-white">our business</h3>

            <p>oil trading</p>
            <p className="py-1">shipping</p>
            <p>procurement</p>
            <p className="py-1">soft commodities</p>
          </div>
          <div className="">
            <h3 className="mb-7 font-extrabold text-xl nunito text-white ">head office</h3>
            <p>Triber Group</p>
            <div className="pl-2">
              <p className="w-[264px]">
                44, Raymond Njoku Street Ikoyi, Lagos, Nigeria P.O. Box 55471,
                Ikoyi Lagos
              </p>
              <p className="py-3">Tel: +2348087145807</p>
              <div className="flex gap-x-1">
                <p>Email:</p>
                <p className="lowercase">
                  info@triber-group.com <br />
                  career@triber-group.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-7 font-extrabold text-xl nunito text-white">
              other locations
            </h3>
            <p>nigeria</p>
            <p className="py-1">ghana</p>
            <p>hong kong</p>
          </div>
          <div>
            <h2 className="nunito font-extrabold text-white text-4xl leading-[46.8px]">
              Reliable
              <br /> energy,
              <br /> limitless
              <br /> potential
            </h2>
          </div>
        </div>
        <div className="flex justify-between py-11">
          <div className="flex justify-between">
            <p className="font-extrabold text-[16px] nunito">
              © 2022 Triber Group. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex justify-between items-center w-[122px] float-right ">
                {links.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.image}</a>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;