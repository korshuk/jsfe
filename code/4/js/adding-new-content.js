$(function() {
  
  $('ul').before('<p class="notice">Just updated</p>');
  
  $('li.hot').prepend('+ ');

  var $newListItem = $('<li><em>Windows</em> DevOps Engineer</li>');
  
  $('li:last').after($newListItem);
});