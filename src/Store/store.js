// import { configureStore } from "@reduxjs/toolkit";
// import { ProductsApi } from "../middleware/ProductsApi";
// import CartSlice from './CartSlice'

// export const store=configureStore({
//     reducer:{
//     [ProductsApi.reducerPath]:ProductsApi.reducer,
//     cart: CartSlice
// },
// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(ProductsApi.middleware)
// })




import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "../middleware/ProductsApi";
import cartReducer from "./CartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

const persistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ProductsApi.middleware),
});

export const persistor = persistStore(store);
