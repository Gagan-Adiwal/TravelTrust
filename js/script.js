function toggleMenu(){

document.querySelector(".nav-links").classList.toggle("active");

}

function selectTour(tourName){

document.getElementById("tourInput").value = tourName;

window.scrollTo({

top:document.querySelector(".form-container").offsetTop - 80,

behavior:"smooth"

});

}