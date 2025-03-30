import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Slider from '../components/Slider';

const SummaryPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const [internStatus, setInternStatus] = useState(0);
  const [internDate, setInternDate] = useState('');

  const handleSliderChange = (value) => {
    setInternStatus(value);
  };

  const handleDateChange = (e) => {
    setInternDate(e.target.value);
  };

  const statusOptions = ['Applied', 'Not Selected', 'Selected for Intern'];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-2/3 p-5 shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-4">Summary of  Application</h2>
          <div className="space-y-2 mb-6">
            <p><strong>Name:</strong> {formData?.name}</p>
            <p><strong>Age:</strong> {formData?.age}</p>
            <p><strong>Qualification:</strong> {formData?.qualification}</p>
            <p><strong>Job Role:</strong> {formData?.jobRole}</p>
            <p><strong>Location:</strong> {formData?.location}</p>
            <p><strong>Experience:</strong> {formData?.experience} years</p>
            <p><strong>Expected Salary:</strong> ${formData?.salary}</p>
          </div>

          <div className="mb-4">
            <label className="font-bold">Internship Status:</label>
            <Slider
              min={0}
              max={2}
              step={1}
              value={internStatus}
              onChange={(e) => handleSliderChange(parseInt(e.target.value))}
              className="my-2 w-full"
            />
            <p className="text-lg font-semibold">{statusOptions[internStatus]}</p>
          </div>

          <div className="mb-4">
            <label className="font-bold block mb-1">Internship Start Date:</label>
            <Input type="date" value={internDate} onChange={handleDateChange} />
          </div>

          
        </div>
      </Card>
    </div>
  );
};

export default SummaryPage;
