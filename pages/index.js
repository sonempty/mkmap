import { Layout } from "../components/Layout";
import { Loader } from "@googlemaps/js-api-loader";
import { mapSettings, mapStyles } from "../components/Map/settings";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAuiwfZZV3km8nHMkJubmsj0voJYEeWJbc",
      version: "weekly",
      libraries: ["geometry"],
    });

    loader
      .load()
      .then((google) => {
        window.map = new google.maps.Map(
          document.getElementById("map"),
          mapSettings
        );

        window.markers = null;
        window.cl = null;
        window.mapStyles = mapStyles;

        // Sets the map on all markers in the array.
        window.setMapOnAll = function setMapOnAll(map) {
          for (let i = 0; i < window.markers.length; i++) {
            window.markers[i].setMap(map);
          }
        };

        // Removes the markers from the map, but keeps them in the array.
        window.hideMarkers = function hideMarkers() {
          setMapOnAll(null);
        };

        // Shows any markers currently in the array.
        window.showMarkers = function showMarkers() {
          setMapOnAll(map);
        };

        // Deletes all markers in the array by removing references to them.
        window.deleteMarkers = function deleteMarkers() {
          hideMarkers();
          window.markers = [];
        };

        //Move to current location
        if (window.yourPosMk) {
          window.yourPosMk.setMap(null);
          window.yourPosMk = null;
        }
        const locationButton = document.createElement("button");
        locationButton.textContent = "Your Location";
        locationButton.classList.add("custom-map-control-button");
        window.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
          locationButton
        );
        locationButton.addEventListener("click", () => {
          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                map.setCenter(pos);
                map.setZoom(16);
                const image =
                  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
                window.yourPosMk = new google.maps.Marker({
                  position: pos,
                  map,
                  icon: image,
                  title: "You are here!",
                });
              },
              () => {
                alert("Error: The Geolocation service failed.");
              }
            );
          } else {
            // Browser doesn't support Geolocation
            alert("Error: Your browser doesn't support geolocation.");
          }
        });
      })
      .catch((e) => {
        // do something
        console.log(e);
      });
  }, []);
  return (
    <Layout>
      <div id="map" className="w-full h-full"></div>;
    </Layout>
  );
}
