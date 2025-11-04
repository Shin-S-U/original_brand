// js/main.js
"use strict";

/* ===========================================================
   L.U.X.E. — Single page experience
   - Splash screen control (provided spec)
   - Smooth anchor scrolling & scroll spy
   - Reveal animation trigger for [data-animate]
   - Footer year auto update
   =========================================================== */

(() => {
  const splash = document.getElementById("splash");
  const end = () => document.body.classList.add("loaded");

  const hardKill = setTimeout(end, 10000);

  window.addEventListener("load", () => {
    clearTimeout(hardKill);
    setTimeout(end, 2400);
  });

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(end, 16000);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (!document.body.classList.contains("loaded")) {
        setTimeout(end, 1200);
      }
    });
  }

  if (splash) {
    splash.addEventListener("click", end);
  }
})();

const prefersReduced =
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const throttle = (fn, wait = 100) => {
  let last = 0;
  let timer = null;
  return (...args) => {
    const now = Date.now();
    const remaining = wait - (now - last);
    if (remaining <= 0) {
      last = now;
      fn(...args);
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        timer = null;
        fn(...args);
      }, remaining);
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start"
      });
    });
  });

  const updateActive = () => {
    const fromTop = window.scrollY + 150;
    let current = sections[0];
    for (const section of sections) {
      if (section.offsetTop <= fromTop) current = section;
    }
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current?.id}`;
      link.classList.toggle("is-active", isActive);
    });
  };

  if (sections.length) {
    updateActive();
    window.addEventListener("scroll", throttle(updateActive, 150));
    window.addEventListener("resize", throttle(updateActive, 200));
  }

  const animated = document.querySelectorAll("[data-animate]");
  if (animated.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    animated.forEach((el) => io.observe(el));
  } else {
    animated.forEach((el) => el.classList.add("is-visible"));
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
