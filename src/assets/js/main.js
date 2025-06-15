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


// ---------- Fade-out Page Transition on Link Click ----------
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Only animate internal links (skip anchors, external, or blank targets)
    const isSameSite = href && !href.startsWith("http") && !href.startsWith("#") && !this.target;

    if (isSameSite) {
      e.preventDefault();

      gsap.to("body", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => window.location.href = href
      });
    }
  });
});

// ---------- Title Entrance Animation on Page Load ----------
gsap.from("body", {
  opacity: 0,
  y: 20,
  duration: 1.8,
  ease: "power3.out"
});

gsap.registerPlugin(ScrollTrigger);

// Animate the entire header container
gsap.from("header", {
  opacity: 0,
  y: -40,
  duration: 1,
  ease: "power3.out"
});

// Animate each nav link
gsap.from(".header__link", {
  opacity: 0,
  y: -10,
  stagger: 0.1,
  delay: 0.4,
  duration: 0.5,
  ease: "power2.out"
});

// Hover scale effect for header links
document.querySelectorAll(".header__link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.08,
      duration: 0.2,
      ease: "power1.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.2,
      ease: "power1.inOut"
    });
  });
});
