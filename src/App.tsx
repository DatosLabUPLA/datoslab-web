// App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Equipo from "./pages/equipo";
import Proyectos from "./pages/proyectos";
import Home from "./componentes/Home";
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
