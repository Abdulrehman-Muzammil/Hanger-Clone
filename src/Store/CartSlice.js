import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ProductsApi } from "../middleware/ProductsApi";
import { useSelector } from "react-redux";

const selectCart = (state) => state.cart;

const selectProductsFromApi = (state) =>
  ProductsApi.endpoints.getProducts.select()(state)?.data?.products || [];

export const cartItems = createSelector(
  [selectProductsFromApi, selectCart],
  (products, cart) => {
    return cart.list?.map(({ id, quantity,size,color }) => {
      const product = products.find((p) => p.id === id);
      return product ? { ...product, quantity,size,color } : null;
    }).filter(Boolean); // Remove nulls
  }
);

function ExistingCartItemIdx(state,action){
  return state.list.findIndex((ele)=> ele.id == action.payload.id)
}
const Slice =createSlice({
    name:'cart',
    initialState:{
        list:[]
    },
    reducers:{
        addCartItem(state,action){
      const ExistingIdx = ExistingCartItemIdx(state, action);
            if(ExistingIdx != -1 && state.list !== undefined){
           state.list[ExistingIdx].quantity+=1;
            }
            else{
            state.list.push({ ...action.payload, quantity: action.payload.quantity ,size:action.payload.size });
            }
        },
        removeCartItem(state,action)
        {
      const ExistingIdx = ExistingCartItemIdx(state, action);
         if(ExistingIdx != -1)
         {
         state.list.splice(ExistingIdx,1);
         }
        },
        IncreaseCartItemQuantity(state,action){
      const ExistingIdx = ExistingCartItemIdx(state, action);
        if(ExistingIdx ==-1) return
        state.list[ExistingIdx].quantity +=1
        },
        DecreaseCartItemQuantity(state,action){
      const ExistingIdx = ExistingCartItemIdx(state, action);
       if(ExistingIdx != -1 && state.list[ExistingIdx].quantity <= 1)
       {
       state.list.splice(ExistingIdx, 1);
       }
       else{
        state.list[ExistingIdx].quantity -=1
       }
        },
        AddItemSize(state,action)
        {
      const ExistingIdx = ExistingCartItemIdx(state, action);
      if(ExistingIdx !== -1)
      { 
       state.list[ExistingIdx]={...action.payload, size: action.payload.size };
      }
        } 
    }
})
export const {addCartItem,IncreaseCartItemQuantity,DecreaseCartItemQuantity,removeCartItem,AddItemSize,SetItemColor}=Slice.actions;

export default Slice.reducer