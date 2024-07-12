import React from "react";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: 7000,
    refereeBonus: 9000,
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: 9000,
    refereeBonus: 11000,
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
];

const Benefits = ({ toggleModal }) => {
  return (
    <div className="p-8 bg-[#fff] text-[#333] flex flex-col items-center gap-10">
      <h2 className="text-2xl font-bold text-center mb-8 py-10">
        What Are The <span className="text-[#1A73E8]">Referral Benefits? </span>
      </h2>
      <div className="flex gap-24 items-center justify-center">
        <div className=" w-60  border-r border-gray-300 shadow-xl drop-shadow-2xl">
          <ul className="space-y-2 py-2">
            <li className="cursor-pointer p-3 bg-[#1A73E8] h-12 border-b">
              All Programs
            </li>
            <li className="cursor-pointer p-3 border-b-black">
              Product Management
            </li>
            <div className="h-[1px] ml-3 w-48 bg-[#00000069]"></div>
            <li className="cursor-pointer p-3">Strategy & Leadership</li>
            <div className="h-[1px] ml-3 w-48 bg-[#00000069]"></div>

            <li className="cursor-pointer p-3">Business Management</li>
            <div className="h-[1px] ml-3 w-48 bg-[#00000069]"></div>

            <li className="cursor-pointer p-3">Fintech</li>
            <div className="h-[1px] ml-3 w-48 bg-[#00000069]"></div>

            <li className="cursor-pointer p-3">Senior Management</li>
            <div className="h-[1px] ml-3 w-48 bg-[#00000069]"></div>

            <li className="cursor-pointer p-3">Data Science</li>
            <div className="h-[1px] ml-3 w-48 bg-[#00000069]"></div>

            <li className="cursor-pointer p-3">Digital Transformation</li>
            <div className="h-[1px] ml-3 w-48 bg-[#00000069]"></div>

            <li className="cursor-pointer p-3">Business Analytics</li>
          </ul>
        </div>
        <div className="w-[#921px] h-[#560px] flex flex-col">
          <table className="w-full table-auto border-none rounded-3xl shadow-xl drop-shadow-2xl">
            <thead>
              <tr className=" bg-[#1A73E859] text-[#1350A0]">
                <th className="px-4 py-3 ">Programs</th>
                <th className="px-4 py-3 ">Referrer Bonus</th>
                <th className="px-4 py-3 ">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className="bg-[#EBF3FF] rounded-3xl">
                  <td className="px-6 pr-16 py-3 w-96">{program.name}</td>
                  <td className="px-6 py-3 ">₹ {program.referrerBonus}</td>
                  <td className="px-6 py-3 ">₹ {program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className=" mt-7 px-6 py-2 text-[#3C4852] bg-inherit border-[#3C4852] font-medium text-xs rounded-md self-end">
            Show More
          </button>
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
  );
};

export default Benefits;
