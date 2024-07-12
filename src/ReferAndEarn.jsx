// src/ReferAndEarn.jsx
import React, { useState } from "react";

const ReferAndEarn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="logo.png" alt="Accredian" />
          </div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Courses
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Refer & Earn
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
          </nav>
          <div className="space-x-4">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Try for free
            </button>
          </div>
        </div>
      </header>

      <main
        className="flex flex-col items-center justify-center py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('background-image.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Let's Learn & Earn
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Get a chance to win up-to{" "}
          <span className="text-blue-600">Rs. 15,000</span>
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          onClick={handleOpen}
        >
          Refer Now
        </button>
      </main>

      {open && <ReferModal handleClose={handleClose} />}
    </div>
  );
};

const ReferModal = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    handleClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="referrerName"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="referrerName"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="referrerEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="referrerEmail"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="refereeName"
              className="block text-sm font-medium text-gray-700"
            >
              Friend's Name
            </label>
            <input
              type="text"
              id="refereeName"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="refereeEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Friend's Email
            </label>
            <input
              type="email"
              id="refereeEmail"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            className="w-full mt-2 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition"
            onClick={handleClose}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferAndEarn;
