var vote = '<div id="vote"><div class="third"><a href="http://example.org?vacancy=javascript"><img src="img/vac-js.png" id="javascript"/></a></div><div class="third"><a href="http://example.org?vacancy=php"><img src="img/vac-php.jpg" id="php"/></a></div><div class="third"><a href="http://example.org?vacancy=sales"><img src="img/vac-sales.jpg" id="sales"/></a></div></div>';

$('#selector').append(vote);


$('#selector a').on('click', function(e) {

  e.preventDefault();

  var queryString = 'vote=' + $(e.target).attr('id');

  $.get('votes.php', queryString, function(data) {
    
    $('#selector').html(data);
  
  });

});