// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice
const likedCardsSlice = createSlice({
  name: 'likedCards',
  initialState: { cards: [] },
  reducers: {
    addLikedCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeLikedCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
  },
});

// Actions
export const { addLikedCard, removeLikedCard } = likedCardsSlice.actions;

// Reducer
export const likedCardsReducer = likedCardsSlice.reducer;

// Store
const store = configureStore({
  reducer: {
    likedCards: likedCardsReducer,
  },
});

export default store;
