import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectItems = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;

export const selectVisibleItems = createSelector(
    [selectItems, selectNameFilter],
    (items, textFilter) => {
      return items.filter((item) =>
        item.name.toLowerCase().includes(textFilter)
      );
    }
  );
