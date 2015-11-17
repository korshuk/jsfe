var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;
console.log(nextItem);
prevItem.className = 'complete';
nextItem.className = 'cool';