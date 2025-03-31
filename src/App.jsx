
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobInquiryForm from './pages/JobInquiryForm';
import SummaryPage from './pages/SummaryPage';

const App = () => {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<JobInquiryForm />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  


  );
};

export default App;
