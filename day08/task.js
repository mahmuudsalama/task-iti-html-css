var element = document.getElementById("colorcheck")
var color;
var elemntcolor = document.getElementsByClassName("changecolor")

function change(){
  color = element.value
  for(var i=0 ; i<elemntcolor.length;i++){
    elemntcolor[i].style.color =color
  }


}


navigator.geolocation.getCurrentPosition(function(x){
    console.log(x)
    initMap(x.coords.latitude,x.coords.longitude) 
   },function(){
       console.log("Allow to Reach Your Location");
   })
   function initMap(y,z) {
       const myLatLng = { lat: y, lng: z};
       const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 6,
         center: myLatLng,
       });
     
       new google.maps.Marker({
         position: myLatLng,
         map,
         title: "Hello World!",
       });
     }
     
//      window.initMap = initMap;

// function initMap() {
//     const myLatLng = { lat: latituded , lng: longituded };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: myLatLng,
//     });
  
//     new google.maps.Marker({
//       position: myLatLng,
//       map,
//       title: "Hello World!",
//     });
//   }
  
//   window.initMap = initMap;