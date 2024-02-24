//locomotive applying
function locomotivescrolltrAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotivescrolltrAnimation();

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
  // edit this
  // delay:2.3,
  delay:0,
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
