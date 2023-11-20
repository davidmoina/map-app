import { useContext } from "react";
import { BtnMyLocation, MapView, ReactLogo, SearchBar } from "../components";
import { RouteInfo } from "../components/RouteInfo";
import { MapContext } from "../context";

export const Home = () => {
  const { routeInfo } = useContext(MapContext);

  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
      {routeInfo && (
        <RouteInfo
          distance={routeInfo?.distance}
          duration={routeInfo?.duration}
        />
      )}
    </div>
  );
};
