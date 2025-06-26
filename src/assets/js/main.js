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
  ease: "power2.out",
});


// Hover scale effect for header links
document.querySelectorAll("#infoIcon").forEach(link => {
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

// ---------- Overlay Effects ----------
const infoIcon = document.getElementById('infoIcon');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeOverlay');

infoIcon.addEventListener('click', () => {
    overlay.style.display = 'flex';
    gsap.fromTo(overlay, 
        { opacity: 0 },
        { opacity: 1, 
          duration: 0.5, 
          ease: "power2.out" }
    );
});

closeBtn.addEventListener('click', () => {
  gsap.to(overlay, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => overlay.style.display = 'none'
  });
});

gsap.registerPlugin(Flip);

const container1 = document.querySelector(".header__menu "),
      container2 = document.querySelector(".overlay__content"),
      box = document.querySelector("#infoIcon");

document.querySelector("#infoIcon").addEventListener("click", () => {
  const state = Flip.getState(box, {props: "backgroundColor,borderRadius"});
  
  box.classList.toggle("active");
  if (box.parentElement === container1) {
    container2.appendChild(box);
  } else {
    container1.appendChild(box);
  }
  
	Flip.from(state, {
		duration: 1
	});
});
