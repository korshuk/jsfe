
var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    
    var newContent = '';
    for (var i = 0; i < responseObject.vacancies.length; i++) {
      newContent += '<div class="vacancy">';
      newContent += '<img src="' + responseObject.vacancies[i].image + '" />';
      newContent += '<p><b>' + responseObject.vacancies[i].name + '</b><br></p>';
      newContent += '</div>';
    }

   
    document.getElementById('content').innerHTML = newContent;

  }
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);