// src/reducers/step2Reducer.js
const initialState = {
  gender: '',
  interests: [],
  location: '',
  about: '',
};

const step2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STEP2_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default step2Reducer;
