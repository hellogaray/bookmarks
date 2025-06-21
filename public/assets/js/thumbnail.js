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
const filterByRating = document.getElementById('main-body__title');

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