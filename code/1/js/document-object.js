var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<b>page address: </b>' + document.URL + '<br />';
msg += '<b>page address: </b>' + window.location + '<br />';
msg += '<b>W L: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;