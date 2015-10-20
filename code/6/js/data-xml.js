
var xhr = new XMLHttpRequest();

xhr.onload = function() {
 if (xhr.status === 200) { 

    var response = xhr.responseXML;
    var vacancies = response.getElementsByTagName('vacancy');

    for (var i = 0; i < vacancies.length; i++) {
      var container, image, requirement, name;
      
      container = document.createElement('div'); 
      container.className = 'vacancy';

      image = document.createElement('img');
      image.setAttribute('src', getNodeValue(vacancies[i], 'map'));
      container.appendChild(image);

      name = document.createElement('h3');
      name.appendChild(document.createTextNode(getNodeValue(vacancies[i], 'name')));
      container.appendChild(name);

      requirement = document.createElement('p');
      requirement.appendChild(document.createTextNode(vacancies[i].getElementsByTagName('requirement')[0].firstChild.nodeValue));
      container.appendChild(requirement);

      requirement = document.createElement('p');
      requirement.appendChild(document.createTextNode(vacancies[i].getElementsByTagName('requirement')[1].firstChild.nodeValue));
      container.appendChild(requirement);



      document.getElementById('content').appendChild(container);
    }
  }

  function getNodeValue(obj, tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

};

xhr.open('GET', 'data/data.xml', true);
xhr.send(null);