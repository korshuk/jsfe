$(function() {
  
  $('li:contains("Linux")').text('Windows');
  
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  
  $('li#one').remove();
});