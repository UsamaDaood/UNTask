import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    transactions: [],
  };

  const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
      handleTransactions: (state, action) => {
        let { data} = action.payload;
      // let newItems = [];
        //newItems = [...state.transactions, data];
        //state.transactions = [...state.transactions] + data;
        state.transactions = [...state.transactions, data];
      },
    },
    extraReducers: builder => {

    },
  });
  export const {handleTransactions, } = transactionSlice.actions;
  export const transaction = transactionSlice.reducer;