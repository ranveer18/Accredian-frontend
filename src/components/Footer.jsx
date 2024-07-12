import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold ">accredian</h2>
            <p className="text-xs">credentials that matter</p>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              Schedule 1-on-1 Call Now
            </button>
            <p className="mt-2 text-sm">Speak with our Learning Advisor</p>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-start ">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4 p-3">Programs</h3>
            <ul className="space-y-2">
              <li className="p-3">Data Science & AI</li>
              <li className="p-3">Product Management</li>
              <li className="p-3">Business Analytics</li>
              <li className="p-3">Digital Transformation</li>
              <li className="p-3">Business Management</li>
              <li className="p-3">Project Management</li>
              <li className="p-3">Strategy & Leadership</li>
              <li className="p-3">Senior Management</li>
              <li className="p-3">Fintech</li>
            </ul>
          </div>
          <div className="w-[600px]   mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries): pm@accredian.com</p>
            <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline: +91 9625811095</p>
            <p>Enrolled Student Helpline: +91 7969322507</p>
            <p>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </p>

            <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="text-lg font-semibold mb-4">Why Accredian</h3>
              <p>Follow Us</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
