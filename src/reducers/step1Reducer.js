// src/reducers/step1Reducer.js
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  contactNumber: '',
};

const step1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STEP1_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default step1Reducer;
