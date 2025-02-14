import { combineReducers } from "redux";
import { userReducer } from "./slices/userSlice";

import { apiSlice } from "./slices/apiSlice";

const rootReducer = combineReducers({
  user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
export default rootReducer;
