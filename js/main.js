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
  const htmlLang = (document.documentElement.getAttribute("lang") || "ja").toLowerCase();
  const isEnglish = htmlLang.startsWith("en");
  const galleryCopy = {
    placeholderHeadline: isEnglish
      ? "Select a device to reveal its details"
      : "デバイスを選択して詳細を表示",
    placeholderNote: isEnglish
      ? "* Click any card above to switch this console into that device’s UI."
      : "* 上のカードをクリックすると、このコンソールがそれぞれのデバイス用 UI に切り替わります。"
  };
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
    const prevBtn = document.querySelector(".gallery-nav--prev");
    const nextBtn = document.querySelector(".gallery-nav--next");
    const detail = document.getElementById("gallery-detail");
    const hasCatalog = typeof productCatalog === "object";
    const baseDetailClasses = detail?.className?.trim() || "";
    const orbitTemplate =
      document.getElementById("orbit-template")?.innerHTML.trim() || "";
    const placeholderMessage = `
      <div class="hud-console">
        <div class="hud-console__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="hud-console__grid">
          <div class="hud-console__media">
            <span class="hud-console__badge">DEVICE PREVIEW</span>
            <div class="hud-console__frame" aria-hidden="true">
              <div class="hud-console__orbit"></div>
              <div class="hud-console__placeholder">
                <span>SELECT A PRODUCT ABOVE</span>
              </div>
            </div>
          </div>
          <div class="hud-console__copy">
            <div class="hud-console__kicker">PRODUCT DETAIL</div>
            <div class="hud-console__headline-row">
              <h3 class="hud-console__headline">${galleryCopy.placeholderHeadline}</h3>
              <span class="hud-console__status">Idle Console</span>
            </div>
            <div class="hud-console__specs">
              <span class="hud-console__pill">PRIMARY SPEC — — —</span>
              <span class="hud-console__pill">SECONDARY — — —</span>
              <span class="hud-console__pill">NOISE / RANGE — — —</span>
            </div>
            <p class="hud-console__note">${galleryCopy.placeholderNote}</p>
          </div>
        </div>
      </div>
    `;

    const applyDetailClasses = (extraClass = "") => {
      if (!detail) return;
      const classes = [baseDetailClasses, extraClass].filter(Boolean).join(" ").trim();
      detail.className = classes;
    };

    const markEmptyState = () => {
      if (!detail) return;
      detail.dataset.state = "empty";
      applyDetailClasses();
    };

    const markFilledState = () => {
      if (!detail) return;
      delete detail.dataset.state;
      applyDetailClasses("product-orbit");
    };

    const buildSpecGrid = (stats) => {
      if (!Array.isArray(stats) || !stats.length) return "";
      return `
        <div class="spec-grid">
          ${stats
            .map(
              (s = {}) => `
                <article class="spec-card">
                  ${s.label ? `<div class="spec-label">${s.label}</div>` : ""}
                  ${s.value ? `<div class="spec-value">${s.value}</div>` : ""}
                  ${s.caption ? `<div class="spec-caption">${s.caption}</div>` : ""}
                </article>
              `
            )
            .join("")}
        </div>
      `;
    };

    const buildFeatureList = (features) => {
      if (!Array.isArray(features) || !features.length) return "";
      return `
        <div class="feature-list">
          <div class="feature-list-title">Key Features</div>
          ${features
            .map((feature) => {
              const item = typeof feature === "string" ? { label: feature } : feature || {};
              return `
                <div class="feature-item">
                  <div class="feature-bullet"></div>
                  ${item.label ? `<div class="feature-label">${item.label}</div>` : ""}
                  ${item.text ? `<div class="feature-text">${item.text}</div>` : ""}
                  ${!item.label && !item.text ? `<div class="feature-label">${feature || ""}</div>` : ""}
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    };

    if (detail && detail.dataset.state === "empty") {
      if (!detail.innerHTML.trim()) {
        detail.innerHTML = placeholderMessage;
      }
      markEmptyState();
    }

    if (grid) {
      // ホイールの縦スクロールを横スクロールに変換（ギャラリー範囲内）
      grid.addEventListener(
        "wheel",
        (e) => {
          if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

          const atStart = grid.scrollLeft <= 0;
          const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1;
          const goingLeft = e.deltaY < 0;
          const goingRight = e.deltaY > 0;

          if ((goingRight && !atEnd) || (goingLeft && !atStart)) {
            e.preventDefault();
            grid.scrollBy({ left: e.deltaY, behavior: "auto" });
          }
        },
        { passive: false }
      );

      const syncNavState = () => {
        const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
        if (prevBtn) {
          prevBtn.disabled = grid.scrollLeft <= 0;
        }
        if (nextBtn) {
          nextBtn.disabled = grid.scrollLeft >= maxScroll - 1;
        }
      };

      const throttledNavState = throttle(syncNavState, 120);

      const paginate = (direction) => {
        const offset = grid.clientWidth ? grid.clientWidth * 0.9 : 320;
        grid.scrollBy({
          left: offset * direction,
          behavior: prefersReduced ? "auto" : "smooth"
        });
      };

      if (prevBtn) {
        prevBtn.addEventListener("click", () => paginate(-1));
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => paginate(1));
      }

      grid.addEventListener("scroll", throttledNavState);
      window.addEventListener("resize", throttledNavState);
      syncNavState();

      grid.querySelectorAll(".gallery-item").forEach((btn) => btn.classList.remove("is-active"));
    }

    if (grid && detail && hasCatalog) {
      const renderOrbitDetail = () => {
        if (!orbitTemplate) return false;
        detail.innerHTML = orbitTemplate;
        markFilledState();
        return true;
      };

      const renderDetail = (id) => {
        if (id === "m1-drone" && renderOrbitDetail()) {
          return;
        }
        const p = productCatalog[id];
        if (!p) return;
        const mediaTag = p.tag
          ? `<div class="media-tag"><span class="media-tag-dot"></span><span>${p.tag.toUpperCase()}</span></div>`
          : "";
        const mediaContent = p.image
          ? `<img src="${p.image}" alt="${(p.alt || p.title || "").replace(/"/g, '&quot;')}" loading="lazy">`
          : `<span>${p.title || "AERIS"}</span>`;

        detail.innerHTML = `
          <div class="product-media">
            <div class="product-image-frame">
              ${mediaContent}
              ${mediaTag}
            </div>
          </div>
          <div class="product-copy">
            <div>
              ${p.tag ? `<div class="product-kicker">${p.tag}</div>` : ""}
              ${p.title ? `<h1 class="product-title">${p.title}</h1>` : ""}
              ${p.tagline ? `<div class="product-subtitle">${p.tagline}</div>` : ""}
              ${p.description ? `<p class="product-lead">${p.description}</p>` : ""}
            </div>
            ${buildSpecGrid(p.stats)}
            ${buildFeatureList(p.features)}
          </div>
        `;
        markFilledState();
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
        detail.innerHTML = placeholderMessage;
        markEmptyState();
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
