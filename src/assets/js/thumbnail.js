// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, Flip);

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


// ---------- Filter  ----------
const filterButtons = document.querySelectorAll(".filter-by-rating");
const grid = document.getElementById("thumbnail-grid");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedRating = button.dataset.rating;

    // Remove active from all buttons, add to clicked one
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Capture initial state
    const state = Flip.getState(thumbnails);

    // Filter thumbnails
    thumbnails.forEach(thumb => {
      const thumbRating = thumb.dataset.rating;
      const shouldShow = selectedRating === "all" || thumbRating === selectedRating;
      thumb.style.display = shouldShow ? "inline-flex" : "none";
    });

    // Animate to new state
    Flip.from(state, {
      duration: 0.5,
      scale: true,
      ease: "power1.inOut",
      stagger: 0.02,
      absolute: true,
          onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 1}),
    onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0, duration: 1})

    });

  });
});

// ---------- Sliding Animations  ----------
gsap.utils.toArray(".thumbnail").forEach(thumbnail => {
  // Scroll-in animation (triggered when element enters viewport)
  gsap.from(thumbnail, {
    opacity: 0,
    y: 60,
    scale: 0.92,
    rotationX: 6,
    transformOrigin: "top center",
    duration: 0.7,
    ease: "power4.out",
    scrollTrigger: {
      trigger: thumbnail,
      start: "top 90%",
      toggleActions: "play none none none" // play on enter only
    }
  });

  // Scroll-out (scrubbed) animation when element scrolls out of view toward top
  gsap.fromTo(thumbnail,
    {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    {
      opacity: 0,
      y: -60,
      scale: 0.92,
      ease: "power2.out",
      scrollTrigger: {
        trigger: thumbnail,
        start: "top 2rem",   // When top is near top of viewport
        end: "top -550px",   // Fully scrolled out
        scrub: true,
      },
    }
  );
});
