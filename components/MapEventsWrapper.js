import { useMapEvents } from "react-leaflet";

export default function MapEventsWrapper({ onMapClick }) {
    useMapEvents({
        click: (e) => {
            onMapClick(e.latlng);
        },
    });
    return null;
}
