$(function() {
  var ids = '';
  var $listItems = $('li');
  var $header = $('h1');
  var $four = $('#four');

  $listItems.on('click', function() {
        
    $(this).toggleClass('hot');
  
  });

  
  $header.on('click', function () {
    
    $listItems.trigger('click');

    $four.trigger('isSoftEvent', {status: 'custom event'});

  });

  
  $four.on('isSoftEvent', function (e, data) {
    //not e.data.status
    $(this).text(data.status);
  
  });

});