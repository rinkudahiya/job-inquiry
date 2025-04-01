import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const JobInquiryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    qualification: '',
    jobRole: '',
    location: '',
    experience: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/summary', { state: { formData } });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-1/2 p-5 shadow-lg form">
        <div>
          <h2 className="text-2xl font-bold mb-4">Job Inquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <Input name="age" placeholder="Phone Number" value={formData.age} onChange={handleChange} required />
            <Input name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
            <Input name="jobRole" placeholder="Job Role" value={formData.jobRole} onChange={handleChange} required />
            <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
            <Input name="experience" placeholder="Experience (in years)" value={formData.experience} onChange={handleChange} required />
            <Input name="salary" type="number" placeholder="Expected Salary" value={formData.salary} onChange={handleChange} required />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white submit-btn">Submit</Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default JobInquiryForm;
