function init() {

  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(53.903977, 27.59044),
    mapTypeId: google.maps.MapTypeId.ROADMAP, //SATTELITE

    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE, //SMALL, LARGE, DEFAULT
      position: google.maps.ControlPosition.TOP_CENTER
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, //HORIZONTAL_BAR, DEFAULT
      position: google.maps.ControlPosition.TOP_LEFT
    },
    streetViewControl: false
  };


  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;