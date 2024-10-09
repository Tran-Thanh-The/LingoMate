import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseData } from '@/types/interface/CourseData';

interface CartState {
  course: CourseData | null;
}

const initialState: CartState = {
  course: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCourseToCart: (state, action: PayloadAction<CourseData>) => {
      if (!state.course) {
        state.course = action.payload;
        localStorage.setItem('cart', JSON.stringify(action.payload));
      }
    },
    clearCart: (state) => {
      state.course = null;
      localStorage.removeItem('cart');
    },
    loadCourseFromLocalStorage: (state) => {
      const course = localStorage.getItem('cart');
      if (course) {
        state.course = JSON.parse(course);
      }
    },
  },
});

export const { addCourseToCart, clearCart, loadCourseFromLocalStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
