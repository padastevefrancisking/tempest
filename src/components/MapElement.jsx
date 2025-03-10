import "./Components.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"; 
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function MapUpdater({ coords }) {
    const map = useMap();

    useEffect(() => {
        if (map && coords) {
            map.setView(coords, 12, { animate: true });
        }
    }, [coords, map]);

    return null;
}

function MapElement({ weather }) {  
    const center = weather?.coord 
        ? [weather.coord.lat, weather.coord.lon] 
        : [10.6833, 124.8333];  // Default location

    return (
        <MapContainer 
            center={center} 
            zoom={12} 
            className="w-full h-[300px]">

            <TileLayer 
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            
            <MapUpdater coords={center} />

            <Marker position={center} />
        </MapContainer>
    );
}

export default MapElement;
