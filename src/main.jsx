import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayoutes from "./Components/MainLayoutes.jsx";
import Home from "./Components/Home.jsx";
import Contacts from "./Components/Contacts.jsx";
import About from "./Components/About.jsx";
import Login from "./Components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <About />,
      },
      {
        path: "/about",
        element: <Contacts />,
      },
      {
        path: "login",
        element: <Login />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
