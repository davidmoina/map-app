import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp.tsx";

if (!navigator.geolocation) {
  alert("Tu navegador no soporta la geolocalización");
  throw new Error("Navigator does not support geolocation");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
