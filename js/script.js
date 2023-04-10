const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
    if(burger.classList.contains("active")) {
        gsap.to(".links", {x: "100%" });
        gsap.to(".line", { stroke: "white"});
    }else{
        gsap.to(".links", {x: "0%" });
        gsap.to(".line", { stroke: "black"});
    }
    burger.classList.toggle("active");
});










//var textWrapper = document.querySelector(".loader-text");
//textWrapper.innerHTML = textWrapper.textContent.replace(
  //  /\S/g,
    //"<span class='letter'>$&</span"
//);

//anime.timeline().add({
  //  targets: ".loader-text .letter",
  //  translateX: [40, 0],
  //  translateZ: 0,
  //  opactiy: [0, 1],
   // easing: "easeOutExpo",
  //  duration: 1200,
  //  delay: (el, i) => 2400 + 30 * i,
//});

//gsap.from(".loader-wrapper", 2, {
//    scale: 0.8,
 //   ease: "power1.inOut",
//});

//gsap.from(".loader", 2, {
 //   top: "100%",
 //   ease: "power3.inOut",
//});

//gsap.to(".loader-wrapper, .pre-loader", 1, {
 //   scale: 1.2,
  //  opactiy: 0,
  //   display: "none",
 //   ease: "power3.inOut",
 //   delay: 2,
//},
//"-=1"
//);

//gsap.from(".revealer", 1, {
 //   width: "0",
  //  ease: "power3.inOut",
  //  delay: 3,
//});

//gsap.to(".revealer", 0.8, {
 //   left: "100%",
  //  ease: "power3.inOut",
  //  delay: 4,
//});

//gsap.to(".loader-text-wrapper", 0.3, {
 //   opactiy: 0,
 //   display: "none",
  //  ease: "power3.inOut",
  //  delay: 4,
//});

//gsap.to(".loader-text-wrapper", 0.3, {
  //  opactiy: 0,
  //  display: "none",
   // ease: "power3.inOut",
  //  delay: 4,
//});


