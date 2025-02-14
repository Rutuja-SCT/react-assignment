import { Middleware, configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./slices/userSlice";
import {
  PersistConfig,
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {  useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./slices/apiSlice";


const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  (middleware) => Boolean(middleware),
);

//create persisted store for getting data after page refresh or close
const persistConfig = {
  key: "user",
  version: 1,
  storage: storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares, apiSlice.middleware),
});

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector ;

setupListeners(store.dispatch);

export default store;
