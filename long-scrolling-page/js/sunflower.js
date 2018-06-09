//sunflower seed animation -- needs fixing
var seed = document.getElementById ("seed");

window.onscroll = function(){

  var fromTop = window.pageYOffset;

  console.log(fromTop);

  seed.style.top = fromTop * 0.89 + "px";

  seed.style.transform = "rotate("+ fromTop +"deg)";

  if(fromTop < 7000){
    seed.style.transform = "rotate(0 deg)";
    }else{
      seed.style.transform = "none()";
    }
}
/*
//fact 1
var heightfact = document.getElementById("heightfact");

window.onscroll = function(){

  var y = window.pageYOffset;

  console.log(y);

  counter.style.top = 400 + y * .97 + "px";

  counter.innerHTML = y + "px";

  if(y > 1000){

    console.log("Scroll for a Sunflower Fact!");

  }else{

  console.log("");
 }

};
*/
