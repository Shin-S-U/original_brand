// js/main.js
"use strict";

/* ===========================================================
   L.U.X.E. — Core interactions
   - Auto year update
   - Smooth in-page scrolling (respects reduced motion)
   - ScrollSpy (active nav link)
   - Reveal on scroll for [data-rise] via IntersectionObserver
   =========================================================== */

(function () {
  // ===== Preferences
  const prefersReduced =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ===== Helpers
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Throttle utility (for scroll events)
  const throttle = (fn, wait = 100) => {
    let last = 0, timer = null;
    return (...args) => {
      const now = Date.now();
      const remain = wait - (now - last);
      if (remain <= 0) {
        last = now;
        fn(...args);
      } else if (!timer) {
        timer = setTimeout(() => {
          last = Date.now();
          timer = null;
          fn(...args);
        }, remain);
      }
    };
  };

  // ===== Init when DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    // 1) Auto year update
    const yearEl = $("#y");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // 2) Smooth in-page scrolling (+ accessibility)
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href === "#" || href === "#0") return;

        // Top shortcut
        if (href === "#top") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
          return;
        }

        // Normal anchors
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        // Allow for sticky header offset using scroll-margin-top in CSS
        target.scrollIntoView({
          behavior: prefersReduced ? "auto" : "smooth",
          block: "start"
        });

        // Manage focus for a11y without jump
        const prevTabIndex = target.getAttribute("tabindex");
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        setTimeout(() => {
          if (prevTabIndex === null) target.removeAttribute("tabindex");
          else target.setAttribute("tabindex", prevTabIndex);
        }, 600);

        // Update URL hash without page jump
        if (history && history.pushState) {
          history.pushState(null, "", `#${id}`);
        } else {
          location.hash = `#${id}`;
        }
      });
    });

    // 3) ScrollSpy (active nav link)
    const navLinks = $$('nav a[href^="#"]');
    const sections = navLinks
      .map((a) => $(a.getAttribute("href")))
      .filter(Boolean);

    const updateActive = () => {
      const y = window.scrollY + 120; // early activation
      let current = sections[0];
      for (const sec of sections) {
        if (sec.offsetTop <= y) current = sec;
      }
      navLinks.forEach((a) => {
        const isActive = a.getAttribute("href") === `#${current.id}`;
        if (isActive) a.classList.add("is-active");
        else a.classList.remove("is-active");
      });
    };

    if (sections.length) {
      updateActive();
      document.addEventListener("scroll", throttle(updateActive, 100), { passive: true });
      window.addEventListener("resize", throttle(updateActive, 150));
    }

    // 4) Reveal on scroll for [data-rise]
    const riseEls = $$("[data-rise]");
    if (riseEls.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      riseEls.forEach((el) => io.observe(el));
    }
  });
})();
