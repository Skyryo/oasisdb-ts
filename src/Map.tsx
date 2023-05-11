import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/'

const Map = () => {
  return (
    <div>
    <MapContainer
      center={[30,0]}
      zoom={2}
      zoomSnap={0.1}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
      style={{ height: "100vh", width: "75%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6809591,139.7673068]}>
        <Popup>
          <a href="">日本</a>
        </Popup>
      </Marker>
      <Marker position={[37.566295,126.977945]}>
        <Popup>
        <a href="">韓国</a>
        </Popup>
      </Marker>
      <Marker position={[39.904650,116.718487]}>
        <Popup>
        <a href="">中国</a>
        </Popup>
      </Marker>
      <Marker position={[55.761389,37.608937]}>
        <Popup>
        <a href="">ロシア</a>
        </Popup>
      </Marker>
      <Marker position={[38.895450,-77.015870]}>
        <Popup>
        <a href="">アメリカ</a>
        </Popup>
      </Marker>
      <Marker position={[-35.310693,149.116694]}>
        <Popup>
        <a href="">オーストラリア</a>
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default Map;