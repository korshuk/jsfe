$('nav a').on('click', function(e) {

  e.preventDefault();

  var url = this.href;

  var $content = $('#content');

  $('nav a.current').removeClass('current');
  $(this).addClass('current');
  $('#container').remove();

  $.ajax({
    type: "GET",
    url: url,
    beforeSend: function() { 
      $content.append('<div id="load">Loading</div>');
    },
    complete: function() {
       console.log(1, new Date());
      $('#load').remove();
     
    },
    success: function(data) {
      console.log(2, new Date());
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    error: function() {
      $content.html('<div class="load">Please try again soon.</div>');
    }
  });

});