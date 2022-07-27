$(function () {
    $('#offer-walls-slider').scrollbox({
      linear: true,
      direction: "h",
      step: 1,
      delay: 0,
      speed: 40
    });
});


const single_point = document.querySelectorAll(".points > p");
let i = 0;
window.addEventListener("load", function(){
  setInterval(() => {
    if(i < single_point.length){
      single_point[i + 1].classList.remove("d-none");
      // return;
    }
    i++;
  }, 2000);
})



// window.onload = function(){
//   setInterval(function(){
//     console.log("Hello");
//   }, 1000);
//  };