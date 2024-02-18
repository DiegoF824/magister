import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/01-home/home.jsx";
import Personagens from "./pages/02-personagens/personagens.jsx";
import Reinos from "./pages/03-reinos/reinos.jsx";
import Magia from "./pages/04-magia/magia.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/magister/",
    element: <App />,
    children: [
      {
        path: "/magister/",
        element: <Home />,
      },
      {
        path: "/magister/personagens",
        element: <Personagens />,
      },
      {
        path: "/magister/reinos",
        element: <Reinos />,
      },
      {
        path: "/magister/magia",
        element: <Magia />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
