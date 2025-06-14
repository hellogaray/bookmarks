const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      duration: 0.1,
      ease: "power2.out"
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(el, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.1,
      ease: "power2.inOut"
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".thumbnail").forEach(thumbnail => {
  gsap.from(thumbnail, {
    scrollTrigger: {
      trigger: thumbnail,
      start: "top 85%",  // when top of thumbnail hits 85% of viewport height
      toggleActions: "play none none none",
      // markers: true, // Uncomment to debug start/end points
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    ease: "power3.out"
  });
});
