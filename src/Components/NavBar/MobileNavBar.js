import React, { useState } from "react";
import BoxLogo from "../../Assets/BoxLogo.svg";
import DropDownOff from "../../Assets/DropDownOff.svg";
import DropDownOn from "../../Assets/DropDownOn.svg";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="mx-[32px] mdplus:mx-[146px] mt-[16px] mdplus:mt-[47px]">
        <div className="flex justify-between pb-[21px] border-b border-black">
          <img src={BoxLogo} alt="BoxLogo" />
          {!isOpen ? (
            <img
              src={DropDownOn}
              alt="DropDownOff"
              onClick={() => handleClick()}
            />
          ) : (
            <img
              src={DropDownOff}
              alt="DropDownOff"
              onClick={() => handleClick()}
            />
          )}
        </div>
      </div>

      {!isOpen && (
        <div
          className={`bg-[#000000] w-full h-[90px] z-[100] fixed top-[70px] p-4 ${
            isOpen ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <h1 className="text-white mb-2 underline tracking-[6px] hover:bg-white hover:text-black transform hover:scale-105">
            Explore
          </h1>
          <h1 className="text-white underline tracking-[6px] hover:bg-white hover:text-black transform hover:scale-105">
            Contact
          </h1>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
