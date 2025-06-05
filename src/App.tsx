import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Equipo from "./pages/Equipo"; //sale en rojo, pero visual studio, al ponerlo en minúscula no se puede subir a heroku por la sensibilidad a las mayusculas o minusculas
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