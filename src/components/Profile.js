// src/components/Profile.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const formDataStep1 = useSelector((state) => state.step1);
  const formDataStep2 = useSelector((state) => state.step2);
  const dispatch = useDispatch();

  // Define local state for editing
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Update Redux state with edited data
    dispatch({ type: 'UPDATE_STEP1_DATA', payload: formDataStep1 });
    dispatch({ type: 'UPDATE_STEP2_DATA', payload: formDataStep2 });
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <strong>Step 1 Data:</strong>
        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={formDataStep1.firstName}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_STEP1_DATA',
                payload: { firstName: e.target.value },
              })
            }
          />
        ) : (
          <p>First Name: {formDataStep1.firstName}</p>
        )}
        {/* Display other Step 1 data fields */}
      </div>
      <div>
        <strong>Step 2 Data:</strong>
        {isEditing ? (
          <input
            type="text"
            name="gender"
            value={formDataStep2.gender}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_STEP2_DATA', payload: { gender: e.target.value } })
            }
          />
        ) : (
          <p>Gender: {formDataStep2.gender}</p>
        )}
        {/* Display other Step 2 data fields */}
      </div>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default Profile;
