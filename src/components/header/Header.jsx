import React from "react";
import { IoIosCall } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BiTimeFive } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header = () => {
    return (
    <section className="border-2 border-[#8B88B]">
        <div className="flex mx-auto justify-between w-[1257px] px-14  h-[35px]">
            <div className="flex justify-around w-[623px] border-x-2 poppins text-[13px] font-bold">
          <p className="flex my-auto">
            <span className="my-auto text-[#F56411] pr-2">
              <IoIosCall />
            </span>
            (+234)804909000
          </p>
          <p className="flex my-auto">
            <span className="my-auto text-[#F56411] pr-2">
              <RxEnvelopeClosed />
            </span>
            info@triber-group.com
          </p>

          <p className="flex my-auto">
            <span className="my-auto text-[#F56411] pr-2">
              <BiTimeFive />
            </span>
            Mon - Fri: 8:00 - 22:00
          </p>
        </div>
        {/* socials */}
        <div className="w-[176px] border-x-2 flex justify-around  text-[#F56411]">
          <a href="#" className="my-auto">
            <GrFacebookOption />
          </a>
          <a href="#" className="my-auto">
            <GrInstagram />
          </a>
          <a href="#" className="my-auto">
            <AiOutlineTwitter />
          </a>
          <a href="#" className="my-auto">
            <FiSearch />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;