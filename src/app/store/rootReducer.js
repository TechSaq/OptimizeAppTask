import { combineReducers } from "redux";
import { campaignReducer } from "./reducers";

export const rootReducer = combineReducers({
  campaign: campaignReducer
});
