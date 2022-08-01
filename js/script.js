$(function () {
    $('#offer-walls-slider').scrollbox({
      linear: true,
      direction: "h",
      step: 1,
      delay: 0,
      speed: 40,
      onMouseOverPause: false
    });
});


const single_point = document.querySelectorAll(".points > p");
let i = 0;
window.addEventListener("load", function(){
  setInterval(() => {
    if(i < single_point.length){
      single_point[i].classList.remove("d-none");
      i++;
    }else if (i == single_point.length){
      for (let j = 0; j < single_point.length; j++) {
        single_point[j].classList.add("d-none");
      }
      i++;
    }else if(i > single_point.length){
      i = 0;
      single_point[i].classList.remove("d-none");
      i++;
    }
  }, 2000);
})



// window.onload = function(){
//   setInterval(function(){
//     console.log("Hello");
//   }, 1000);
//  };