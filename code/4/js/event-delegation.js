$(function() {
  var listItem, itemStatus, eventType;
  
  var obj = {
    counter : 1
  };

 // var counter = 1;

  $('ul').on('click mouseover', ':not(#four)', obj, function(e) {

      obj.counter = obj.counter + 1;

      listItem = 'Item: ' + e.target.textContent + '<br />';
      
      itemStatus = 'Counter: ' + e.data.counter + '<br />';
      
      eventType = 'Event: ' + e.type;
      
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});