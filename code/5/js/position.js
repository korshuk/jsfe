$(function() {
  
  var $window = $(window);
  
  var $slideAd = $('#slideAd');
  
  var endZone = $('#footer').offset().top - $window.height() - 800;

  $window.on('scroll', function() {
    
    console.log('scrollTop: ', $window.scrollTop(), ' Height + scroll: ', $window.scrollTop() + $window.height());
    
    if (endZone < $window.scrollTop()) {
      
      $slideAd.animate({ 'right': '0px' }, 250);
    
    } else {
      
      $slideAd.stop(true).animate({ 'right': '-285px' }, 250);
    //https://api.jquery.com/stop/   why remove queued animation
    }

  });

});