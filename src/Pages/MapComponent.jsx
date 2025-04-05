import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [38.0858, 37.8746];

// Marker ikonlarını düzelt
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png"
});

// 🎯 Harita render'dan sonra yeniden çizilsin
const ResizeFix = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200); // biraz gecikmeyle daha stabil çalışır
  }, [map]);

  return null;
};

const MapComponent = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer center={position} zoom={15} style={{ width: "100%", height: "100%" }}>
        <ResizeFix />
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div>
              Doğu Mahallesi, Doğu 27 Sk. No:5<br />
              Doğanşehir / Malatya <br />
              <a
                href="https://www.google.com/maps?q=38.0858,37.8746"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps’te Aç
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
