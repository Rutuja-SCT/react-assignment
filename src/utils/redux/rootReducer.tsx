import { combineReducers } from "redux";
import { userReducer } from "./slices/userSlice";
import projectSlice from "./slices/projectSlice";
import { apiSlice } from "./api/apiSlice";

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
export default rootReducer;
