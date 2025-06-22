// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ---------- Hover Effect on Thumbnails ----------
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, {
      scale: 1.03,
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      duration: 0.2,
      ease: "power2.out"
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(el, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.2,
      ease: "power2.inOut"
    });
  });
});

// ---------- Scroll-in Animation for Thumbnails ----------
gsap.utils.toArray(".thumbnail").forEach(thumbnail => {
  gsap.from(thumbnail, {
    scrollTrigger: {
      trigger: thumbnail,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    scale: 0.92,
    rotationX: 6,
    transformOrigin: "top center",
    duration: 0.7,
    ease: "power4.out"
  });
});


// ---------- Year Sorting ----------
const filterButtons = document.querySelectorAll(".filter-by-rating");
const grid = document.getElementById("thumbnail-grid");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedRating = button.dataset.rating;

    // Remove active from all buttons, add to clicked one
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Animate thumbnails visibility based on rating
    thumbnails.forEach(thumb => {
      const thumbRating = thumb.dataset.rating;
      const shouldShow = selectedRating === "all" || thumbRating === selectedRating;

      if (shouldShow) {
        gsap.set(thumb, { display: "block" }); 
        gsap.to(thumb, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(thumb, {
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => gsap.set(thumb, { display: "none" })
        });
      }
    });
  });
});

// ---------- Sliding Animation for Year Sorting ----------
const filterByRating = document.getElementById('filter-button');

// Create a timeline paused by default
const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(".filter-by-rating", {
  x: -40,
  opacity: 1,
  display: "flex",
  duration: 0.6,
  ease: "back.inOut(1.7)",
  stagger: 0.1,

});

filterByRating.addEventListener("click", () => {
  // Play or reverse depending on current state
  tl.reversed() ? tl.play() : tl.reverse();
  filterByRating.classList.toggle("active", !tl.reversed());
});