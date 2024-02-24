import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import AntdProvider from "./context/AntdProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AntdProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AntdProvider>
    </React.StrictMode>
);
