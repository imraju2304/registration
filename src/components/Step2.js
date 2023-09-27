// src/components/Step2.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Step2 = () => {
  const step2Data = useSelector((state) => state.step2);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_STEP2_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      <h2>Step 2: Additional Information</h2>
      {/* Add input fields for gender, interests, location, and about */}
    </div>
  );
};

export default Step2;
