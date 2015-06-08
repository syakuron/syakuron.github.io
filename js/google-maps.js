/*function initialize() {
  var gsp = new google.maps.LatLng(51.508742, -0.120850);
  
  var pengaturan = {
    zoom: 5,
    center: gsp
  }
  var map = new google.maps.Map(document.getElementById('googleMap'), pengaturan);

  var img ="../images/map-marker.svg"
  var tanda = new google.maps.Marker({
    map: map,
    position: gsp,
    icon:img   
  });
  
}
google.maps.event.addDomListener(window, 'load', initialize;*/

  function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("maps"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);