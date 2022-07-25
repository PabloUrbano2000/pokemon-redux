import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// todo para el redux
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";

import thunk from "redux-thunk";

import { logger } from "./middlewares";
import rootReducer from "./reducers/rootReducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const composeAlt =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers: any = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
