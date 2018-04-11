/*SLIDESHOW*/

var slideIndex = 1;
showSlides(slideIndex);

/*next/previous*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*thumbnail images*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*HORIZONTAL NAV*/

/* TIME AND DATE */
/*
var d = new Date();

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("day number: " + d.getDay());

console.log(day[d.getDay()]);

console.log("month: " + d.getMonth());

var month = []; // modern way of writing: var month =new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


console.log(month[d.getMonth()]);

console.log(d.getHours());

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.toLocaleDateString());

//change default 24 hour time form to 12 hour time
var hour = (d.getHours());

console.log(hour);

var amPm = " ";

if (hour >= 11){
amPm = " pm";
}else {
amPm = " am";
}
console.log(amPm);

if (hour === 0){
     hour = 12;
  }else if (hour >= 13){
     hour = hour - 12;
  }else if (hour >= 1 && hour <= 9 ) {
      hour = "0" + hour;
}
console.log(hour);


var n = day[d.getDay()];
var m = month[d.getMonth()];
var min = d.getMinutes();

if ( min >=0 && min <= 9){
min = "0" + min;
} else {
min = min;
}
console.log (min);
//http://www.w3schools.com/jsref/met_document_getelementbyid.asp

document.getElementById("today").innerHTML =
n + ", " + d.getDate() +" " + m + " " + d.getFullYear();

document.getElementById("time").innerHTML = hour + ":" + min + amPm;
*/