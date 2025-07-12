import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoading: (_, action: PayloadAction<boolean>) => action.payload,
    },
});

export const { setLoading } = loadingSlice.actions;

export const store = configureStore({
    reducer: {
        loading: loadingSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;