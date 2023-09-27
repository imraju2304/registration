// src/components/Preview.js
import React from 'react';
import { useSelector } from 'react-redux';

const Preview = ({ history }) => {
  const formDataStep1 = useSelector((state) => state.step1);
  const formDataStep2 = useSelector((state) => state.step2);

  const handleEditClick = () => {
    history.push('/profile'); // Navigate back to the profile page for editing
  };

  return (
    <div>
      <h2>Preview</h2>
      <div>
        <strong>Step 1 Data:</strong>
        <p>First Name: {formDataStep1.firstName}</p>
        {/* Display other Step 1 data fields */}
      </div>
      <div>
        <strong>Step 2 Data:</strong>
        <p>Gender: {formDataStep2.gender}</p>
        {/* Display other Step 2 data fields */}
      </div>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default Preview;
