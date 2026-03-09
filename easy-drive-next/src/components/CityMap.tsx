"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const cities = [
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Manchester", lat: 53.4808, lng: -2.2426 },
    { name: "Birmingham", lat: 52.4862, lng: -1.8904 },
    { name: "Leeds", lat: 53.8008, lng: -1.5491 },
    { name: "Liverpool", lat: 53.4084, lng: -2.9916 },
    { name: "Bristol", lat: 51.4545, lng: -2.5879 },
    { name: "Brighton", lat: 50.8225, lng: -0.1372 },
];

export default function CityMap() {
    return (
        <MapContainer
            bounds={[
                [49.8, -8.6],
                [58.8, 2.2],
            ]}
            scrollWheelZoom={false}
            className="h-full w-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {cities.map((city) => (
                <CircleMarker
                    key={city.name}
                    center={[city.lat, city.lng]}
                    radius={8}
                    pathOptions={{
                        color: "#ffffff",
                        weight: 2,
                        fillColor: "#ef4444",
                        fillOpacity: 1,
                    }}
                >
                    <Popup>
                        <strong>{city.name}</strong>
                    </Popup>
                </CircleMarker>
            ))}
        </MapContainer>
    );
}
