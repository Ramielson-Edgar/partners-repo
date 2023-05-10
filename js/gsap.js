gsap.registerPlugin(ScrollTrigger)
let timeline = gsap.timeline()

const tl = new TimelineLite();

 tl.to(".partnership-programs-hero",{
    scrollTrigger: {
        trigger:'.partnership-programs-hero',
        markers:true,
        start:'top bottom',
        scrub:1,
    },
 
    backgroundPosition:"bottom -50px center, top right -300px",
    ease: "none"
 })