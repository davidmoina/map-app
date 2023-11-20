import { useContext } from "react";
import { PlacesContext } from "../context";
import { Loading } from ".";

export const MapView = () => {
  const { userLocation, isLoading } = useContext(PlacesContext);

  if (isLoading) {
    return <Loading />;
  }

  return <div>{userLocation?.join(",")}</div>;
};
