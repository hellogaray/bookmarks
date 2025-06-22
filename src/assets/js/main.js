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
gsap.from("main", {
  opacity: 0,
  y: -100,
  duration: 1.8,
  ease: "power4.out",
});

gsap.from("header", {
  opacity: 0,
  y: -100,
  duration: 1.8,
  ease: "power4.out",
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

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})