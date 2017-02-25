import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'heat-map',
  template : `
	<div id="map_canvas" style="height: 600px; width: 800px;"></div>
  `
})
export class MapComponent implements OnInit{
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/crimes');
  }

  ngOnInit() {



var map, pointarray, heatmap; 

let taxiData = [];

function initialize() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(41.8057495,-87.8705634),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);

    pointArray = new google.maps.MVCArray(taxiData);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
    });

    heatmap.setMap(map);

    listeningFirebaseRefs = [];
      currCrimes = {};
      currCrimesKeys = [];

    // AIzaSyDHyiI31YHTNIylA6_otrWZWiN5tZiK7QA
      var HttpClient = function() {
          this.get = function(aUrl, aCallback) {
              var anHttpRequest = new XMLHttpRequest();
              anHttpRequest.onreadystatechange = function() { 
                  if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                      aCallback(anHttpRequest.responseText);
              }

              anHttpRequest.open( "GET", aUrl, true );            
              anHttpRequest.send( null );
          }
      }

      function startDatabaseQueries() {
        var crimesRef = firebase.database().ref('crimes').limitToLast(100);

        var fetchPosts = function(crimesRef) {
          crimesRef.on('child_added', function(data) {
            if (currCrimesKeys.length > 25) {
              delete currCrimes[currCrimesKeys.shift()];
              taxiData.shift();
            }

            currCrimes[data.key] = data.val();
            currCrimesKeys.push(data.key);

            var address = data.val().location.replace("XX", "00");
            address += ", CHICAGO, IL";
            console.log(address);
            var client = new HttpClient();
            client.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + "&key=AIzaSyDHyiI31YHTNIylA6_otrWZWiN5tZiK7QA", function(response) {
                responseObj = JSON.parse(response);
                currCrimes[data.key].lat = responseObj.results[0].geometry.location.lat;
                currCrimes[data.key].lng = responseObj.results[0].geometry.location.lng;
                currCrimes[data.key].weight = 1;

                taxiData.push(new google.maps.LatLng(responseObj.results[0].geometry.location.lat, responseObj.results[0].geometry.location.lng));
                heatmap.setData(taxiData);
            });


            console.log("Added; " + currCrimes);

          });
          crimesRef.on('child_changed', function(data) { 
            currCrimes[data.key] = data.val();

            console.log("Changed; " + currCrimes);
          });
          crimesRef.on('child_removed', function(data) {
            delete currCrimes[data.key];

            for(var i = 0; i < currCrimesKeys.length; i++){
              if (currCrimesKeys[i] == data.key){
                currCrimesKeys.splice(i, 1);
              }
            }

            console.log("Removed; " + currCrimes);
          });
        };

        // Fetching and displaying all posts of each sections.
        fetchPosts(crimesRef);

        // Keep track of all Firebase refs we are listening to.
        listeningFirebaseRefs.push(crimesRef);
      }

      startDatabaseQueries();
}

function toggleHeatmap() {
    heatmap.setMap(map);
}

function changeGradient() {
    var gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ]
    heatmap.setOptions({
        gradient: heatmap.get('gradient') ? null : gradient
    });
} 












  
  }

}

