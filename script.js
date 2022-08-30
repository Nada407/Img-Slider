// steppppps of Event
//Element , Event , Action

var imgsList = Array.from(document.getElementsByClassName("img-item"));
var lightboxcontainer = document.querySelector(".lightbox-container"); //here want to select first class with this name
var lightboxitem = document.querySelector(".lightbox-item"); //here want to select first class with this name
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var closeButton = document.getElementById("close");

var currentIndex = 0;
for (var i = 0; i < imgsList.length; i++) {
  imgsList[i].addEventListener("click", function (e) {
    currentIndex = imgsList.indexOf(e.target); //bgeb kol ma3lomat el evenet ely tam 3leh el click , w rkmha kam
    var imgsrc = e.target.getAttribute("src");
    lightboxcontainer.classList.replace("d-none", "d-flex");
    lightboxitem.style.backgroundImage = `url(${imgsrc})`; //to get attribute form css
  });
}
function nextSlide() {
  currentIndex++; // Next img
  if (currentIndex == imgsList.length) {
    currentIndex = 0;
  }
  var imgsrc = imgsList[currentIndex].getAttribute("src"); //src of next img
  lightboxitem.style.backgroundImage = `url(${imgsrc})`; //to get attribute form css
}


function prevSlide() {
  currentIndex--; // Next img
  if (currentIndex < 0) {
    currentIndex = imgsList.length - 1; //to be in the last img
  }
  var imgsrc = imgsList[currentIndex].getAttribute("src"); //src of next img
  lightboxitem.style.backgroundImage = `url(${imgsrc})`; //to get attribute form css
}

function closeSlider(){
  lightboxcontainer.classList.replace("d-flex", "d-none");

}
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
closeButton.addEventListener("click",closeSlider);
// make the slider working with keyBoard buttons 
document.addEventListener('keydown',function(){
  document.addEventListener('keydown',function(e){
    if(e.key=='ArrowRight'){
      nextSlide();
    }
    else if(e.key =='ArrowLeft'){
      prevSlide();
    }
    else if(e.key =='Escape'){
      closeSlider();
    }
  })





})
