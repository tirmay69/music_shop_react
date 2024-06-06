import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Catalog from "./pages/Catalog";
import "./index.css";
import Payment from "./pages/Payment";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Catalog",
    element: <Catalog />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
