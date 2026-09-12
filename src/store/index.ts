import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import localeReducer from "./localeSlice";

const localePersistConfig = {
  key: "locale",
  storage,
};

const persistedLocaleReducer = persistReducer(
  localePersistConfig,
  localeReducer
);

export const makeStore = () =>
  configureStore({
    reducer: {
      locale: persistedLocaleReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];