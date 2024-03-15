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
  delay:2.3,
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
// tl.from("#page1-center2 h1, #page2",{
//   opacity:0
// })
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

function videoCursorAnimation(){
  

  var videoContenar = document.querySelector(" .video-content");
  var video = document.querySelector(".video-content video");

  videoContenar.addEventListener("mouseenter",function(){
    videoContenar.addEventListener("mousemove",function(position){

      gsap.to("#crsr",{
        opacity:0,
      })
      gsap.to(" .video-crsr",{
        left:position.x-400,
        y:position.y-170,
        scale:0.7,
      })
     
    }) 
  })
  
  videoContenar.addEventListener("mouseleave",function(){
    gsap.to("#crsr",{
      opacity:1,
    })
    gsap.to(" .video-crsr",{
      left:"75%",
      top:"-11%",
    })
   
  })

 var videocrsr = document.querySelector(".video-crsr");
 var flag = 0;

  videoContenar.addEventListener("click",function(){
   
    if(flag==0){
      video.play();
      video.style.opacity = 1;
    videocrsr.innerHTML = `<i class="ri-pause-fill"></i> ` ;
      gsap.to(".video-crsr" ,{
           scale:0.7,
      })
      flag = 1;
    }
      else{
        video.pause();
        video.style.opacity = 0;
      videocrsr.innerHTML = `<i class="ri-play-fill"></i> ` ;
        gsap.to(".video-crsr" ,{
             scale:0.7,
        })
        flag = 0;
      }
  })
  }
  videoCursorAnimation();

var flagAnimation =   document.querySelector("#page1-center3")
  flagAnimation.addEventListener("mousemove",function(position){
    
    gsap.to("#flag",{
      x:position.x,
      y:position.y,
      opacity:1,
    })
  })
  flagAnimation.addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity:0,
    })
  })

function sheryjsAnimation(){
  Shery.imageEffect(".image-div1",{
    style:3,
    // debug:true,
    gooey:true,
    config:{"uFrequencyX":{"value":8.4,"range":[0,100]},"uFrequencyY":{"value":6.87,"range":[0,100]},"uFrequencyZ":{"value":9.92,"range":[0,100]},"geoVertex":{"range":[1,64],"value":28.41},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7125565472551657},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":2.75,"range":[0,10]},"metaball":{"value":0.32,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.06,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
  })
  Shery.imageEffect(".image-div2",{
    style:3,
    // debug:true,
    gooey:true,
    config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":28.41},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9500624898114438},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":2.75,"range":[0,10]},"metaball":{"value":0.32,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.06,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
  })
}
sheryjsAnimation();

// using textillate.js  for textAnimation
var lastAnime = document.querySelector(".page6-content");
var lasttextAnime =document.querySelector(".page6-content h1");

  lastAnime.addEventListener("mouseenter",function(){
      gsap.from(".page6-content h1",{
        onStart:function(){
          $('.page6-content h1').textillate({ in: { effect: 'fadeIn' }} );
          lasttextAnime.style.fontSize = "7vw";
          lasttextAnime.style.fontFamily = "silk serif";
     
        }
       }) 

  })
  lastAnime.addEventListener("mouseleave",function(){     
     
        gsap.from(".page6-content h1",{
          onStart:function(){
            lasttextAnime.style.fontFamily = "plain light";
            $('.page6-content h1').textillate({ out: { effect: 'fadeOut' } });
          }
         }) 
})