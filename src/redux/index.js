/*********** Reduceres defined here *********/

import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
import { connectRouter } from "connected-react-router";
import encryptor from "./encryptor";
import searchHistory from "./history";

const userPersistConfig = {
  key: "think-learn-app",
  storage: storage,
  transforms: [encryptor],
  blacklist: ["router"]
};

export default history =>
  persistCombineReducers(userPersistConfig, {
    history: searchHistory,
    router: connectRouter(history)
  });
