import * as React from "react";
window.React = React;
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store";
import App from "./ui/App";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error(`couldn't find root element`);
}

ReactDOM.createRoot(rootEl).render(app);
