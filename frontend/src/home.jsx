import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import './style.css'
const Home = () => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {

    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showLocation = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const map = L.map("map").setView([lat, lng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup("You are here!")
      .openPopup();
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  return (
    <div>
      <div className="header">
        <div className="time">{time}</div>
        <div className="search-bar">
          <input type="text" placeholder="Search buses, Bus Stop and more..." />
        </div>
      </div>
      <div className="title">RoutWise</div>

      <div className="content-container">
        <div className="info-section">
          <div className="info-box">
            <h4>Buses Around You</h4>
            <ol>
              <li>XYZ</li>
              <li>ABC</li>
            </ol>
          </div>
          <div className="info-box">
            <h4>Buses About to Depart</h4>
            <ol>
              <li>
                XYZ <button>Join</button>
              </li>
              <li>
                ABC <button>Join</button>
              </li>
            </ol>
          </div>
        </div>
        <div className="map-container">
          <div id="map" style={{ height: "400px" }}>Map loading...</div>
          <div className="map-buttons">
            <button onClick={locateMe}>Locate Me</button>
            <button>Add Location</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
