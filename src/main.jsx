import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Components/Route/Route";
import Authprovider from "./Components/Auth/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={appRouter} />
    </Authprovider>
  </React.StrictMode>
);
