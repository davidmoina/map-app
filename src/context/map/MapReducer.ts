import { Map, Marker } from "mapbox-gl";
import { MapState } from "./MapProvider";

type MapAction =
  | { type: "setMap"; payload: Map }
  | { type: "setMarkers"; payload: Marker[] }
  | { type: "setRouteInfo"; payload: { distance: number; duration: number } };

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };

    case "setMarkers":
      return {
        ...state,
        markers: action.payload,
      };

    case "setRouteInfo":
      return {
        ...state,
        routeInfo: action.payload,
      };

    default:
      return state;
  }
};
