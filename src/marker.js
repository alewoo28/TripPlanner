
const makeMarker = require("mapbox-gl")


const icons = {
  Activity: 'http://i.imgur.com/WbMOfMl.png',
Hotel: 'http://i.imgur.com/D9574Cu.png',
Restaurant: 'http://i.imgur.com/cqR6pUI.png',
}


const builderMarker = function(activityType, coordinates) {

  const markerDomEl = document.createElement("div");

  markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = `url(${icons[activityType]})`;

const newMarker = new makeMarker.Marker(markerDomEl).setLngLat(coordinates)

return newMarker

}

module.exports = builderMarker



