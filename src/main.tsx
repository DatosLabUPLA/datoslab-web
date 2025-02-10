// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No se encontró el elemento root en el DOM.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);

