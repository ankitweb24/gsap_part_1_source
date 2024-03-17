// gsap.to('.box', {
//     y : 250,
//     delay : 1,
//     duration : 2,
//     scale : .6,
//     background : "orange",
//     rotate : 360
// })
// gsap.from('.box', {
//     y : 250,
//     delay : 1,
//     duration : 2,
//     scale : .6,
//     background : "orange",
//     rotate : 360
// })

// gsap.to('h1, h2, h3', {
//     x : 300,
//     duration : 1,
//     delay : 1,
//     // stagger : 1,
//     repeat : -1,
//     yoyo : true
// })

// gsap.to('#box1', {
//     x : 400,
//     duration : 1,
//     delay : .5
// })
// gsap.to('#box2', {
//     x : 500,
//     duration : 1,
//     delay : 1
// })
// gsap.to('#box3', {
//     x : 600,
//     duration : 1,
//     delay : 1.5
// })

const tl = gsap.timeline();

tl.to("#box1", {
  x: 400,
  duration: 1,
  delay : .5
});
tl.to("#box2", {
  x: 500,
  duration: 1,
});
tl.to("#box3", {
  x: 600,
  duration: 1,
});
