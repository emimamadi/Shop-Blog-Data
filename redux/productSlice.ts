import {
  createSlice,
  createAction,
  configureStore,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";

import { products } from "@/data/data";

interface IssuesState {
  issues: {};
  loading: boolean;
  error: string | null;
  data: string[];
  category: [] | string[] | null;
}
const initialState: IssuesState = {
  issues: {},
  loading: false,
  error: null,
  data: [],
  category: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: products,
    issues: {},
    category: [""],
  },
  reducers: {

    getProducts:(state)=>{

      state.issues=state.data
    },

    searchProduct: (state, action: PayloadAction<string[]>) => {
      console.log("state.data = ", state.data);
      console.log(action.payload);

      state.issues = state.data.filter((item: any) =>
        item.title.includes(action.payload)
      );

      // const items = Object.values(state.issues);
    },

    priceProduct: (state, action: PayloadAction<number[]>) => {
      console.log("action.payload 0 = ", action.payload[0]);
      console.log("action.payload  1 = ", action.payload[1]);

      state.issues = state.data.filter(
        (item: any) =>
          action.payload[0] < item.price && item.price < action.payload[1]
      );

     
    },

    categoryProduct: (state, action: PayloadAction<string[]>) => {
      console.log(action.payload);

      action.payload[0]
        ? state.category.push(action.payload[1])
        : (state.category = state.category.filter(
            (x) => x !== action.payload[1]
          ));

      state.issues = [
        ...state.data.filter((item: any) =>
          state.category.includes(item.category)
        ),
      ];
    },
  },
});

export const { priceProduct, searchProduct, categoryProduct,getProducts } =
  productSlice.actions;

export default productSlice.reducer;
