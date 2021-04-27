mapboxgl.accessToken = 'pk.eyJ1Ijoic2xvd2Jybzg5MCIsImEiOiJja28wYXdxYTEwYzBoMnduczk3NG45aWQ3In0.cURYaqRwuaFTIYz3VMICWQ';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});