mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
})
// console.log(coordinates);

const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(coordinates) //Listing.geometry.coordinates
    .addTo(map);
