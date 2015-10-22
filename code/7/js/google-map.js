function init() {
  var mapOptions = {
    center: new google.maps.LatLng(53.903977, 27.59044),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var map;                                  
  map = new google.maps.Map(document.getElementById('map'), mapOptions);//рисуем карту
}

//загружаем google скрипт
function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;