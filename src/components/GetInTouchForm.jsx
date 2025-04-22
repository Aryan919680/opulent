import React, { useState } from 'react';

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    businessType: 'Startup',
    service: 'Strategic Print Procurement',
    budget: 'Below ₹50,000',
    meetingTime: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can integrate API call here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-bold mb-4 mt-10">Comprehensive Client Requirement Form</h2>

      <div>
        <label className="block font-medium">Full Name:</label>
        <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border p-2 rounded" required />
      </div>

      <div>
        <label className="block font-medium">Company Name:</label>
        <input name="companyName" value={formData.companyName} onChange={handleChange} className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
      </div>

      <div>
        <label className="block font-medium">Phone Number:</label>
        <input name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" required />
      </div>

      <div>
        <label className="block font-medium">Business Type:</label>
        <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="Startup">Startup</option>
          <option value="SME">SME</option>
          <option value="Enterprise">Enterprise</option>
          <option value="Agency">Agency</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Select Required Service:</label>
        <select name="service" value={formData.service} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="Strategic Print Procurement">Strategic Print Procurement</option>
          <option value="Brand Design">Brand Design</option>
          <option value="Packaging Design">Packaging Design</option>
          <option value="Marketing Collateral">Marketing Collateral</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Budget Range:</label>
        <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="Below ₹50,000">Below ₹50,000</option>
          <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
          <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
          <option value="Above ₹5,00,000">Above ₹5,00,000</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Preferred Meeting Time:</label>
        <input
          type="datetime-local"
          name="meetingTime"
          value={formData.meetingTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Project Details/Requirements:</label>
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows="4"
          className="w-full border p-2 rounded"
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default GetInTouchForm;
