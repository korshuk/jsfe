
$('#salary').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){
    var d = new Date();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var sec = d.getSeconds();
    
    var msg = '<h3>Средняя зарплата</h3>';
    
    $.each(data, function(key, val) {
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    
    msg += '<br>Last update: ' + hrs + ':' + mins + ':' + sec + '<br>';
    
    $('#rates').html(msg);
  }).fail( function() {
    
    $('#rates').text('Всё сломалось ничего не работает!');
  
  }).always( function() {
     
     var reload = '<a id="refresh" href="#">';
     
     reload += '<img src="img/refresh.png" alt="refresh" /></a>';
     
     $('#reload').html(reload);
     
     $('#refresh').on('click', function(e) {
       
       e.preventDefault();
       
       loadRates();
     
     });
  }); 
}

loadRates();