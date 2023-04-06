import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import L from "leaflet";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: markerIcon.src,
//   iconRetinaUrl: markerIcon2x.src,
//   shadowUrl: markerShadow.src,
// });

const Map = () => {
  return (
    <MapContainer
      center={[34.9843, 135.7596]}
      zoom={2.5}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <TileLayer
        attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>'
        url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
      /> */}
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;


// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// async function getCountryName(lat: number, lng: number): Promise<string> {
//   const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=jsonv2`);
//   const data = await response.json();
//   return data.address.country;
// }

// function WorldMap() {
//   const [position, setPosition] = useState<L.LatLngExpression | null>(null);
//   const [countryName, setCountryName] = useState<string | null>(null);

//   async function handleClick(e: L.LeafletMouseEvent) {
//     const latlng = e.latlng;
//     const countryName = await getCountryName(latlng.lat, latlng.lng);
//     setPosition(latlng);
//     setCountryName(countryName);
//   }

//   return (
//     <MapContainer center={[0, 0]} zoom={3} onClick={handleClick}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {position && countryName && (
//         <Marker position={position}>
//           <Popup>{countryName}</Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// }

// export default WorldMap;