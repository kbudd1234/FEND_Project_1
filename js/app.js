function initMap() {
  
  var myLatLng = {lat: 41.757123, lng: -88.07540699999998};
  console.log(myLatLng);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  var contentString = '<div style="color:black" id="content">'+
      '<h1>Hello World</h1><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i><i class="glyphicon glyphicon-tree-deciduous"></i>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
//  var imageHome = 'img/home.png';

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Home',
//    icon: imageHome
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}