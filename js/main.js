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

  // Companyセクション：テキストボックスと画像の高さを同期
  (() => {
    const grid = document.querySelector(".about-block__grid2");
    if (!grid) return;

    const copy = grid.querySelector(".about-copy");
    const visual = grid.querySelector(".about-block__visual");
    if (!copy || !visual) return;

    const mq = window.matchMedia("(max-width: 980px)");
    const resetHeights = () => {
      copy.style.minHeight = "";
      visual.style.minHeight = "";
    };

    const syncHeights = () => {
      resetHeights();
      if (mq.matches) return;
      const target = Math.max(copy.offsetHeight, visual.offsetHeight);
      copy.style.minHeight = `${target}px`;
      visual.style.minHeight = `${target}px`;
    };

    const throttledSync = throttle(syncHeights, 150);
    window.addEventListener("resize", throttledSync);
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", syncHeights);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(syncHeights);
    }
    window.addEventListener("load", syncHeights);

    const img = visual.querySelector("img");
    if (img && !img.complete) {
      img.addEventListener("load", syncHeights, { once: true });
    }

    syncHeights();
  })();

  // Gallery: inline detail switcher
  try {
    const grid = document.querySelector(".gallery-grid");
    const detail = document.getElementById("gallery-detail");

    if (grid && detail && typeof productCatalog === "object") {
      // ホイールの縦スクロールを横スクロールに変換（ギャラリー範囲内）
      grid.addEventListener(
        "wheel",
        (e) => {
          // 縦方向の入力が強い場合のみ横スクロールに割り当て
          if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

          const atStart = grid.scrollLeft <= 0;
          const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1;
          const goingLeft = e.deltaY < 0;
          const goingRight = e.deltaY > 0;

          // まだスクロール余地があるときだけページスクロールを止める
          if ((goingRight && !atEnd) || (goingLeft && !atStart)) {
            e.preventDefault();
            grid.scrollBy({ left: e.deltaY, behavior: "auto" });
          }
        },
        { passive: false }
      );

      const renderDetail = (id) => {
        const p = productCatalog[id];
        if (!p) return;
        detail.innerHTML = `
          <div class="detail-grid">
            <div class="detail-visual">
              <img src="${p.image}" alt="${(p.alt || p.title || "").replace(/"/g, '&quot;')}">
            </div>
            <div class="detail-copy">
              <h1>${p.title || ""}</h1>
              ${p.tag ? `<p class="detail-tagline">${p.tag}</p>` : ""}
              ${p.tagline ? `<p class=\"lead\">${p.tagline}</p>` : ""}
              ${p.description ? `<p>${p.description}</p>` : ""}
              ${Array.isArray(p.stats) && p.stats.length ? `
                <ul class="detail-stats">
                  ${p.stats
                    .map(
                      (s) => `<li><span class="label">${s.label}</span><span class="value">${s.value}</span></li>`
                    )
                    .join("")}
                </ul>` : ""}
              ${Array.isArray(p.features) && p.features.length ? `
                <ul class="detail-features">
                  ${p.features.map((f) => `<li>${f}</li>`).join("")}
                </ul>` : ""}
            </div>
          </div>
        `;
      };

      grid.addEventListener("click", (e) => {
        const btn = e.target.closest(".gallery-item");
        if (!btn) return;
        const id = btn.dataset.id;
        if (!id) return;
        e.preventDefault();
        grid.querySelectorAll(".gallery-item").forEach((b) => b.classList.toggle("is-active", b === btn));
        renderDetail(id);
        detail.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      });

      if (!detail.innerHTML.trim()) {
        detail.innerHTML = '<p class="detail-message">製品を選択すると詳細が表示されます。</p>';
      }
    }
  } catch (_) {
    // fail quietly if productCatalog is not available
  }

  // AI teaser: static image
  try {
    const media = document.querySelector(".ai-teaser__media");
    if (media) {
      media.innerHTML = '<img src="images/AERISmodel.png" alt="AERIS AIモデル" loading="lazy" />';
    }
  } catch (_) {
    // no-op
  }


  });
