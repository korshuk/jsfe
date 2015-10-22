var elMap = document.getElementById('loc'); 
var msg = 'Ничего на вышло(';

elMap.textContent = 'Поиск местоположения...';

if (Modernizr.geolocation) {

  navigator.geolocation.getCurrentPosition(success, fail);
 
} else {
  
  elMap.textContent = msg;

}

function success(location) {
  msg = '<h3>Долгота:<br>';
  msg += location.coords.longitude + '</h3>';
  msg += '<h3>Широта:<br>';
  msg += location.coords.latitude + '</h3>';
  elMap.innerHTML = msg;
}

function fail(msg) {
  elMap.textContent = msg;
  console.log(msg.code);
}