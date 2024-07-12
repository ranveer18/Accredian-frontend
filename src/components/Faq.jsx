import React, { useState } from "react";

const faqs = [
  {
    question:
      "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer:
      "The minimum system configuration required is a computer with at least 4GB of RAM, 2GHz processor, and a stable internet connection.",
  },
];

const ReferralBenefits = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="p-24 flex flex-col items-center justify-center">
      <div className="mb-8 bg-[#fff] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="flex gap-10 ">
          <div className="flex justify-center items-center flex-col mb-8 gap-5">
            <button className="px-6 py-3 w-[210px] bg-white text-black border-[#333] rounded-md shadow-md hover:border-[#fff]">
              Eligibility
            </button>
            <button className="px-6 py-3 w-[210px] bg-white text-black border-[#333] rounded-md shadow-md hover:border-[#fff]">
              How To Use?
            </button>
            <button className="px-6 py-3 w-[210px] bg-white text-black border-[#333] rounded-md shadow-md hover:border-[#fff]">
              Terms & Conditions
            </button>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3
                  className={`text-lg font-semibold w-[918px] ${
                    activeFaq === index ? "text-blue-600" : ""
                  }`}
                >
                  {faq.question}
                </h3>
                {activeFaq === index && (
                  <p className="mt-2 w-[918px] px-3 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1A73E8] w-[1160px] h-[170px] flex justify-center gap-52 items-center  text-white text-center p-6 rounded-lg shadow-md">
        <div className="flex gap-64 justify-center  items-center text-start">
          <div>
            <h3 className="text-lg font-bold">
              Want to delve deeper into the program?
            </h3>
            <p className="mt-2">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
          <button className="ml-4 px-6 py-2 bg-white text-[#1A73E8] font-bold rounded-md">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralBenefits;
