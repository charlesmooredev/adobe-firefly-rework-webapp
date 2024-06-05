import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../configureStore.ts';
import FireflyEffectData = App.Data.FireflyEffectData;

export interface EffectsState {
  activeEffects: FireflyEffectData[];
}

const initialState: EffectsState = {
  activeEffects: [],
};

export const effectsSlice = createSlice({
  name: 'effects',
  initialState,
  reducers: {
    addActiveEffect: (state, action: PayloadAction<FireflyEffectData[]>) => {
      state.activeEffects = action.payload.concat(...state.activeEffects);
    },
    resetAuth: () => {
      return initialState;
    },
  },
});

const selectSlice = (state: RootState) => state.effects || initialState;
export const selectActiveFireflyEffects = createSelector([selectSlice], state => state.activeEffects);

export const { resetAuth, addActiveEffect } = effectsSlice.actions;

export default effectsSlice.reducer;
