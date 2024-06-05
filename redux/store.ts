import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
///------

// import ProductReducer from "@/redux/productSlice";

//----
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { postSlice } from "@/redux/postSlice";
import productSlice from "./productSlice";
import cartSlice from "@/redux/cartSlice";

export const makeStore = configureStore({
  reducer: {
    // Products: ProductReducer,
    Post: postSlice.reducer,
    Product: productSlice,
    Cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

// export default store

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export type AppStore = ReturnType<typeof store>
