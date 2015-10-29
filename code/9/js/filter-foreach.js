$(function() {

  var people = [
    {
      name: 'Игорь',
      rate: 120
    },
    {
      name: 'Саша',
      rate: 80
    },
    {
      name: 'Женя',
      rate: 75
    },
    {
      name: 'Сергей',
      rate: 20
    }
  ];

  var results = [];

  people.forEach(function(person) {
    if (person.rate >= 65 && person.rate <= 90) {
      results.push(person);
    }
  });


  var $tableBody = $('<tbody></tbody>');
  for (var i = 0; i < results.length; i++) {
    var person = results[i];
    var $row = $('<tr></tr>');
    $row.append($('<td></td>').text(person.name));
    $row.append($('<td></td>').text(person.rate));
    $tableBody.append( $row );
  }

  $('thead').after($tableBody);
});