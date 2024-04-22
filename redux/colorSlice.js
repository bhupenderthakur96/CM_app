import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//  colors generated
  value: false,
  value1:false,
  value2:false
};

//A function to generate random RGB values
// const randomRgb = () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   return `rgb(${red}, ${green}, ${blue})`;
// };

//State slice
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state) => {
      // state.value = [...state.value, randomRgb()];
      state.value = true;
    },
    resetColor: (state) => {
      state.value = false;
    },
    drawerColor: (state) => {
      state.value1 = true;
    },
    customerColor: (state) => {
      state.value2 = true;
    },
    customerColor1: (state) => {
      state.value2 = false;
    },
  },
});

// Action creators are automatically generated for each case reducer function 
export const { setColor ,resetColor,drawerColor,customerColor,customerColor1} = colorSlice.actions;

export default colorSlice.reducer;