
function LoadingAnimation(){
  var tl = gsap.timeline();

tl.from(".line h1", {
  y: 200,
  duration: 0.6,
  stagger: 0.20,
  delay: 0.1,
});

tl.from(".line1-par1", {
  opacity: 0,
  onStart: function () {
    var load = document.querySelector(".line1-par1 h5");
    var count = 0;
    setInterval(function () {
      if (count < 100) {
        count++;
        load.innerHTML = count;
      } else {
        load.innerHTML = count;
      }
    }, 30);
  },
});

tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
})

tl.to("#loader",{
  opacity:0,
  duration:0.2,
  //edit this section
  // delay:2.3
  delay:1
})

tl.from("#page1",{
  delay:0.2,
  y:1600,
  opacity:0,
  duration:0.5,
  ease:Power3,
})

tl.to("#loader",{
    display:"none",
})
tl.from(".nav-part2 h2",{
  y:100,
  stagger:0.2,
})
tl.from(".page1-center h1",{
   y:150,
  stagger:0.1,
  duration:0.3
})
tl.from("#page1-center3 h2,#page1-center3 h3",{
  y:150,
  stagger:0.1,
  duration:0.1
})
}
LoadingAnimation();
function CursorAnimation(){
  document.addEventListener("mousemove",function(position){
    gsap.to("#crsr",{
     left:position.x,
     top:position.y
    })
 })
 
 
 Shery.makeMagnet(".nav-part2 h2" /* Element to target.*/, {
   //Parameters are optional.
   // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   // duration: 1,
 });
}
CursorAnimation();
