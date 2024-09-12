gsap.from(".line h1",{
   y : 100,
 stagger:0.25,
durition:0.6,
delay:0.5,
})
 var h5timer = document.querySelector("#line1-part1 h5")
 var grow = 0
setInterval(function(){
    if(grow<100){
          h5timer.innerHTML = grow++
    }else{
      h5timer.innerHTML = grow
    }  
},40)

 var tl = gsap.timeline()
 tl.from("#.line h1",{
  y:150,
  stagger:0.25,
  duration:0.6,
  delay:0.5
 })
 tl.from("#line1-part1, .line h2")
tl.to("#loader",{
   opacity : 0,
onStart:function(){
  var h5timer = document.querySelector("#line1-part1 h5");
 var grow = 0;
setInterval(function(){
    if(grow<100){
          h5timer.innerHTML = grow++;
    }else{
      h5timer.innerHTML = grow;
    }  
},40);

},
});
tl.to(".line h2")
  animation:"anime"
tl.to("#loader",{
  opacity:0,
  duration:0.5,
  delay:4
});
tl.from("#page1",{
  delay:0.2,
  y:1600,
  duration:2.5,
  opacity:0,
  ease:power4
})
tl.to("#loader",{
  display:"none"
})
