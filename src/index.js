console.log("I am working")
const makeMarker = require("./marker")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYWxld29vIiwiYSI6ImNrMTZtZWdseDA0dWQzaHBiNnR6YTlmNHUifQ.N_og79fmb9tVROcSUfN_Xw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker =  makeMarker('Activity', [-74.009151, 40.705086])

marker.addTo(map)

// const markerDomEl = document.createElement("div");

// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
