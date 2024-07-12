import React from "react";
import howItWorksImage from "../assets/2c05e77a4b76d26c35bb05a554cb6838.png";

const HowItWorks = ({ toggleModal }) => {
  return (
    <section className="py-16 bg-[#EEF5FF] text-center w-screen text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">How Do I Refer?</h2>
        <div className="relative w-full max-w-4xl mx-auto">
          <img src={howItWorksImage} alt="How It Works" className="w-full" />
          <div className="absolute inset-0 flex gap-24 pl-28 items-center">
            <div className=" top-14  relative space-y-2">
              <div className=" w-40 h-40 rounded-full flex flex-col items-center justify-center ">
                <h1>1</h1>
                <span className="text-xs p-2">
                  Submit referrals easily via our website's referral section.
                </span>
              </div>
            </div>
            <div className=" top-14  relative space-y-2">
              <div className=" w-40 h-40 rounded-full flex flex-col items-center justify-center ">
                <h1>2</h1>
                <span className="text-xs p-3">
                  Earn rewards once your referral joins an Accredian program.
                </span>
              </div>
            </div>
            <div className=" top-14  relative space-y-2">
              <div className=" w-40 h-40 rounded-full flex flex-col items-center justify-center ">
                <h1>3</h1>
                <span className="text-xs p-2">
                  Both parties receive a bonus 30 days after program enrollment.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={toggleModal}
            className="py-2 px-6 bg-blue-500 text-white w-[192px] h-[54px] rounded-lg hover:bg-blue-700"
          >
            Refer Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
