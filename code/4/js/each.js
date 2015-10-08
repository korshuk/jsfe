$(function() {
  
  $('li').each(function(index, item) {
        
    var id = this.id; //bad
    
    $(item).prepend('<strong>' + index + '</strong> ');

    $(this).append(' <span class="order">' + id + '</span>');
  
  });

});