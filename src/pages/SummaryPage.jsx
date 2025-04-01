import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Input from "../components/Input";
import Slider from "../components/Slider";

const SummaryPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const [internStatus, setInternStatus] = useState(0);
  const [internDate, setInternDate] = useState("");

  const handleSliderChange = (value) => {
    setInternStatus(value);
  };

  const handleDateChange = (e) => {
    setInternDate(e.target.value);
  };

  const statusOptions = ["Applied", "Not Selected", "Selected for Intern"];

  return (
    <div classNameName="flex items-center justify-center h-screen bg-gray-100">
      <div className="sidebar">
        <div className="logo"></div>
        <ul className="menu">
          <li className="common" id="dashboard">
            <a href="#">
              <img src="./images/dashboard.svg" alt="" />
              Dashboard
            </a>
          </li>
          <div className="small">PEOPLE</div>
          <li className="common">
            <a href="#">Employee</a>
          </li>
          <li id="team" className="common">
            <a href="#">Team</a>
          </li>
          <div className="small">MANAGEMENT</div>
          <li className="common">
            <a href="#">Attendance</a>
          </li>
          <li className="common">
            <a href="#">Leaves</a>
          </li>
          <li className="common">
            <a href="#">Expense</a>
          </li>
          <li className="common">
            <a href="#">Assets</a>
          </li>
          <li className="common">
            <a href="#">Reports</a>
          </li>
          <div className="small">PAYROLL</div>
          <li className="common">
            <a href="#">Dashboard</a>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="header-topic">Team Management</div>
        <div className="header-base">Manage new Employee</div>
        <div className="header-options">
          <span className="header-dashboard">Name</span>
          <span className="header-dashboard">Phone No</span>
          <span className="header-dashboard">Qualification</span>
          <span className="header-dashboard">Job Role</span>

          <span className="header-dashboard">Location</span>

          <span className="header-dashboard">Experience</span>
          <span className="header-dashboard">Expected Salary</span>
          <span className="header-dashboard">Intern Status</span>
        </div>
        <hr className="header-line" />
        <div className="main-body">
          <div className="emplyee-detail">
            <span>
              <strong>{formData?.name}</strong>
            </span>
            <span>
              <strong>{formData?.age}</strong>
            </span>
            <span>
              <strong>{formData?.qualification}</strong>
            </span>
            <span>
              <strong>{formData?.jobRole}</strong>
            </span>
            <span>
              <strong>{formData?.location}</strong>
            </span>
            <span>
              <strong>{formData?.experience} years</strong>
            </span>
            <span>
              <strong>${formData?.salary}</strong>
            </span>
            <span classNameName="mb-4 " id="intern-statuss">
              <div className="slider">
                <Slider
                  min={0}
                  max={2}
                  step={1}
                  value={internStatus}
                  onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                  classNameName="my-2 w-full "
                />
                <p classNameName="text-lg font-semibold">
                  {statusOptions[internStatus]}
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
