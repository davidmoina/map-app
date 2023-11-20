import { MapProvider, PlacesProvider } from "./context";
import { Home } from "./pages/Home";
import "./index.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <Home />
      </MapProvider>
    </PlacesProvider>
  );
};
