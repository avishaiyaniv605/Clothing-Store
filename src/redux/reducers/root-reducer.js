import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import directoryReducer from "./directoryReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import shopReducer from "./shopReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitlist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
