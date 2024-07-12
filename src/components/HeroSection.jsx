import React from "react";
import hero from "../assets/c90be82b93f2066608be1f96ef347467.png";

const HeroSection = ({ toggleModal }) => {
  return (
    <div className="bg-[#fff] py-20 flex  flex-col gap-10">
      <div className=" w-[740px] h-[64px] rounded-full border  self-center bg-[#EEF5FF]">
        <ul className="flex text-black py-5 px-10 gap-32 text-xl cursor-pointer">
          <a href="">
            <li className="hover:text-[#1A73E8]">Refer</li>
          </a>
          <a href="">
            <li className="hover:text-[#1A73E8]">Benefits</li>
          </a>
          <a href="">
            <li className="hover:text-[#1A73E8]">FAQs</li>
          </a>
          <a href="">
            <li className="hover:text-[#1A73E8]">Support</li>
          </a>
        </ul>
      </div>
      <div className="container  h-[600px] w-[1360px] bg-[#EEF5FF] mx-auto gap-30 text-center border flex items-center justify-center rounded-3xl">
        <div className=" h-[692px] flex justify-center text-start items-center flex-col gap-14">
          <h1 className="text-[78px] h-auto font-extrabold  px-10 text-black">
            Let's Learn & Earn
          </h1>

          <p className=" text-4xl font-bold px-10 mb-8 w-[502px] text-black">
            Get a chance to win <br />
            up-to
            <span className="text-4xl font-bold text-[#1A73E8]">
              {" "}
              Rs. 15,000{" "}
            </span>
          </p>
          <button
            onClick={toggleModal}
            className="bg-blue-500 self-start w-[192px] h-[54px]  ml-10 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Refer Now
          </button>
        </div>
        <div className="w-full overflow-hidden">
          <img src={hero} alt="" className=" h-[725px]" width={"814px"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
