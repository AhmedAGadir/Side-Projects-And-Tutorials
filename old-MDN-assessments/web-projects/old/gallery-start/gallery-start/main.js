var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');


  for (var i = 0; i < 6; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  newImage.replace(xxx,'images/pic' + i +'.jpg');
  thumbBar.appendChild(newImage);

  // where i start getting confused 
  newImage.onclick = function () {
  	displayedImage.setAttribute('src',named)
  }

  }

  var source = newImage.getAttribute("src")

  function named() {}

//where i stop getting confused

btn.onclick = function() {
var className = btn.getAttribute('class');
if (classname === 'dark') {
btn.setAttribute('class','light');
btn.textContent = 'Lighten'; 
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}
else {
btn.setAttribute('class','dark');
btn.textContent = 'Darken';
overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}