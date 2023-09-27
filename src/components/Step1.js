// src/components/Step1.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Step1 = () => {
  const step1Data = useSelector((state) => state.step1);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_STEP1_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input
        type="text"
        name="firstName"
        value={step1Data.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      {/* Add input fields for last name, email, and contact number */}
    </div>
  );
};

export default Step1;
