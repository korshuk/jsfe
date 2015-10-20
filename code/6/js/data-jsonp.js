function showVacancies(data) {
  var newContent = '';
 
    var newContent = '';
    for (var i = 0; i < data.vacancies.length; i++) {
      newContent += '<div class="vacancy">';
      newContent += '<img src="' + data.vacancies[i].image + '" />';
      newContent += '<p><b>' + data.vacancies[i].name + '</b><br></p>';
      newContent += '</div>';
    }


    document.getElementById('content').innerHTML = newContent;
}