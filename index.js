// Initialize map
let map = L.map('map').setView([40, -98], 4.4);

// TODO improve data handling
// Set markers for top 10 cities
const Dallas = L.marker([32.779167, -96.808891]).bindPopup('Avg salary: $102K\nJobs in state: 7,575').addTo(map); // 1
const Atlanta = L.marker([33.753746, -84.386330]).bindPopup('Avg salary: $106K\nJobs in state: 2,999').addTo(map); // 2
const Colorado_Springs = L.marker([38.846127, -104.800644]).bindPopup('Avg salary: $108K\nJobs in state: 2,663').addTo(map); // etc.
const Austin = L.marker([30.266666, -97.733330]).bindPopup('Avg salary: $111K\nJobs in state: 7,575').addTo(map);
const Denver = L.marker([39.742043, -104.991531]).bindPopup('Avg salary: $121K\nJobs in state: 2,663').addTo(map);
const Boston = L.marker([42.361145, -71.057083]).bindPopup('Avg salary: $126K\nJobs in state: 4,544').addTo(map);
const Seattle = L.marker([47.608013, -122.335167]).bindPopup('Avg salary: $129K\nJobs in state: 6,948').addTo(map);
const New_York = L.marker([40.730610, -73.935242]).bindPopup('Avg salary: $140K\nJobs in state: 5,058').addTo(map);
const San_Jose = L.marker([37.335480, -121.893028]).bindPopup('Avg salary: $147K\nJobs in state: 19,681').addTo(map);
const San_Francisco = L.marker([37.773972, -122.431297]).bindPopup('Avg salary: $154K\nJobs in state: 19,681').addTo(map);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFtaWUtZXYiLCJhIjoiY2wwOHo4MnNtMDhldjNpcGI3dzZzNWk3OSJ9.pTj0RqxIiwVUH1gnZcXN3w'
}).addTo(map);