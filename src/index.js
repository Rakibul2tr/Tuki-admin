import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import { store } from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import ReactDOM from 'react-dom';
import {store} from "../src/app/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
     <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
    <App />
   
  </Provider>
);
