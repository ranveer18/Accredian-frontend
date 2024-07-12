import React, { useState } from "react";

const ReferralModal = ({ toggleModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referredName: "",
    referredEmail: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Referrer Name is required";
    if (!formData.email) formErrors.email = "Referrer Email is required";
    if (!formData.referredName) formErrors.referredName = " Name is required";
    if (!formData.referredEmail)
      formErrors.referredEmail = " Email is required";
    if (!formData.message) formErrors.message = "Message is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://accredian-backend-o384.onrender.com/api/referrals",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        alert("Referral submitted successfully!");
        toggleModal();
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Name</label>
            <input
              type="text"
              name="referredName"
              value={formData.referredName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.referredName && (
              <span className="text-red-500 text-sm">
                {errors.referredName}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Email</label>
            <input
              type="email"
              name="referredEmail"
              value={formData.referredEmail}
              onChange={handleChange}
              className="w-full mt-1 p-2 border-2 rounded"
            />
            {errors.referredEmail && (
              <span className="text-red-500 text-sm">
                {errors.referredEmail}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="mr-4 py-2 px-4 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
