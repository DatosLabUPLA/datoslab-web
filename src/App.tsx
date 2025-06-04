import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Equipo from "./pages/Equipo";
import Proyectos from "./pages/Proyectos";
import Home from "./pages/Home";
import Root from "./componentes/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "equipo", element: <Equipo /> },
      { path: "proyectos", element: <Proyectos /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;