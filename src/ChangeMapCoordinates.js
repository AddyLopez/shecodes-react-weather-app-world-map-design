import { useMap } from "react-leaflet";

export default function ChangeMapCoordinates(props) {
  const map = useMap();
  map.flyTo([props.coords.lat, props.coords.lon], 8);
  return null;
}
