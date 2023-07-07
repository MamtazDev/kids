import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//  colors generated,
  base:"",
  targettedCur: [],
};

//A function to generate random RGB values
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

//State slice
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    // setColor: (state) => {
    //   state.value = [...state.value, randomRgb()];
    // },
    setBaseCurr: (state, action) => {
      state.base = action.payload;
    },
    setTargettedCurr: (state, action) => {
      state.targettedCur = [...state.targettedCur, action.payload];
    },
  },
});

// Action creators are automatically generated for each case reducer function 
export const { setColor, setBaseCurr, setTargettedCurr } = colorSlice.actions;

export default colorSlice.reducer;