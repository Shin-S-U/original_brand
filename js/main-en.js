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

  // Aboutセクション：画像が表示されたらスクロールを下方向にロック
  (() => {
    const aboutSection = document.getElementById("about");
    const visual = aboutSection?.querySelector(".about-block__visual");
    if (!aboutSection || !visual) return;

    let lockActivated = false;
    let maxScrollY = 0;
    const lockOffset = 200; // Aboutセクションの箱/画像よりさらに手前で止めるための余白
    const overshootGuard = 80; // モメンタムスクロールでの食い込み防止
    let momentumGuardId = 0;
    let momentumGuardTimer = 0;
    let originalScrollBehavior = "";
    let peekShown = false;
    let peekReady = false;
    let peekReadyTimer = 0;
    let peekProgress = 0;
    let imageAppearReady = false;
    let imageAppearTimer = 0;
    const imageAppearDelay = 700; // 画像が出始めるまでの中程度のディレイ(ms)
    const peekRevealDistance = 380; // 下スクロールの累積量に応じて画像を引き上げる距離
    let textProgress = 0;
    let textRevealAccum = 0;
    const textRevealDistance = 260; // 画像が出切ったあとに文字を出すためのスクロール量
    let textAppearReady = false;
    let textAppearTimer = 0;
    const textAppearDelay = 300; // 画像が出てからテキストが出るまでのディレイ(ms)
    let textLiftProgress = 0;
    let textLiftAccum = 0;
    const textLiftDistance = 240; // テキストを上部位置まで引き上げるスクロール量
    const textLiftMax = 270; // 上方向への移動量(px) を少し上げて最大位置を高める
    let textLiftReady = false;
    let textLiftReadyTimer = 0;
    const textLiftDelay = 900; // テキスト出現完了から持ち上げ開始までのディレイ(ms)
    let textLiftDelayAccum = 0;
    const textLiftDelayDistance = 300; // テキスト出現後に必要な追加スクロール量
    let textLiftDelayUnlocked = false;
    let cardAppearReady = false;
    let cardAppearTimer = 0;
    const cardAppearDelay = 300; // テキスト上昇完了からカード出現までのディレイ(ms)
    let topPairProgress = 0;
    let topPairAccum = 0;
    let bottomPairProgress = 0;
    let bottomPairAccum = 0;
    const topPairDistance = 220;
    const bottomPairDistance = 220;
    let bottomAppearReady = false;
    let bottomAppearTimer = 0;
    const bottomAppearDelay = 220; // 上段完了から下段開始までのディレイ(ms)
    let bottomDelayAccum = 0;
    const bottomDelayDistance = 140; // 下段開始前に必要な追加スクロール量

    const peekEl = (() => {
      const el = document.createElement("div");
      el.className = "aeris-peek";
      el.setAttribute("aria-hidden", "true");
      el.innerHTML = `
        <img src="images/aerisback.png" alt="">
        <div class="aeris-peek__content">
          <div class="aeris-peek__hero">
            <p class="aeris-peek__kicker"></p>
            <h2 class="aeris-peek__heading"></h2>
            <p class="aeris-peek__subtitle"></p>
            <p class="aeris-peek__copy"></p>
            <p class="aeris-peek__copy"></p>
          </div>
          <div class="aeris-peek__cards">
            <div class="aeris-peek__card aeris-peek__card--1">
              <div class="aeris-peek__card-title"></div>
              <p class="aeris-peek__card-text"></p>
            </div>
            <div class="aeris-peek__card aeris-peek__card--2">
              <div class="aeris-peek__card-title"></div>
              <p class="aeris-peek__card-text"></p>
            </div>
            <div class="aeris-peek__card aeris-peek__card--3">
              <div class="aeris-peek__card-title"></div>
              <p class="aeris-peek__card-text"></p>
            </div>
            <div class="aeris-peek__card aeris-peek__card--4">
              <div class="aeris-peek__card-title"></div>
              <p class="aeris-peek__card-text"></p>
            </div>
          </div>
        </div>
      `;
      return el;
    })();

    const hydratePeekContent = () => {
      const aerisSection = document.getElementById("aeris");
      if (!aerisSection) return;
      const getText = (selector) => aerisSection.querySelector(selector)?.textContent?.trim() || "";
      const kicker = getText(".aeris-kicker");
      const heading = getText(".aeris-heading");
      const subtitle = getText(".aeris-subtitle");
      const copies = Array.from(aerisSection.querySelectorAll(".aeris-copy"))
        .slice(0, 2)
        .map((el) => el.textContent?.trim() || "");
      const cards = Array.from(aerisSection.querySelectorAll(".aeris-principle-card")).slice(0, 4);
      const cardData = cards.map((card) => ({
        title: card.querySelector(".aeris-principle-title")?.textContent?.trim() || "",
        body: card.querySelector(".aeris-principle-text")?.textContent?.trim() || ""
      }));

      const hero = peekEl.querySelector(".aeris-peek__hero");
      if (!hero) return;
      hero.querySelector(".aeris-peek__kicker").textContent = kicker;
      hero.querySelector(".aeris-peek__heading").textContent = heading;
      hero.querySelector(".aeris-peek__subtitle").textContent = subtitle;
      const copyEls = hero.querySelectorAll(".aeris-peek__copy");
      copies.forEach((text, idx) => {
        if (copyEls[idx]) copyEls[idx].textContent = text;
      });

      const peekCards = peekEl.querySelectorAll(".aeris-peek__card");
      cardData.forEach((item, idx) => {
        const card = peekCards[idx];
        if (!card) return;
        const titleEl = card.querySelector(".aeris-peek__card-title");
        const bodyEl = card.querySelector(".aeris-peek__card-text");
        if (titleEl) titleEl.textContent = item.title;
        if (bodyEl) bodyEl.textContent = item.body;
      });
    };

    const showPeek = () => {
      if (peekShown) return;
      if (!peekEl.isConnected) {
        document.body.appendChild(peekEl);
      }
      hydratePeekContent();
      const header = document.querySelector(".site-header");
      const headerHeight = header?.offsetHeight || 0;
      peekEl.style.setProperty("--peek-top", `${headerHeight}px`);
      peekShown = true;
      peekReady = false;
      peekProgress = 0;
      peekEl.style.setProperty("--peek-progress", "0");
      peekEl.style.setProperty("--peek-dim", "0");
      peekEl.style.setProperty("--peek-text-progress", "0");
      peekEl.style.setProperty("--peek-text-opacity", "0");
      peekEl.style.setProperty("--peek-text-lift", "0");
      peekEl.style.setProperty("--peek-card-1", "0");
      peekEl.style.setProperty("--peek-card-2", "0");
      peekEl.style.setProperty("--peek-card-3", "0");
      peekEl.style.setProperty("--peek-card-4", "0");
      imageAppearReady = false;
      clearTimeout(imageAppearTimer);
      imageAppearTimer = 0;
      textProgress = 0;
      textRevealAccum = 0;
      textAppearReady = false;
      clearTimeout(textAppearTimer);
      textAppearTimer = 0;
      textLiftProgress = 0;
      textLiftAccum = 0;
      textLiftReady = false;
      clearTimeout(textLiftReadyTimer);
      textLiftReadyTimer = 0;
      textLiftDelayAccum = 0;
      textLiftDelayUnlocked = false;
      cardAppearReady = false;
      clearTimeout(cardAppearTimer);
      cardAppearTimer = 0;
      bottomAppearReady = false;
      clearTimeout(bottomAppearTimer);
      bottomAppearTimer = 0;
      bottomDelayAccum = 0;
      topPairProgress = 0;
      topPairAccum = 0;
      bottomPairProgress = 0;
      bottomPairAccum = 0;
      clearTimeout(peekReadyTimer);
      peekReadyTimer = window.setTimeout(() => {
        peekReady = true;
      }, 500); // いったん停止してから動き始めるまでの猶予
    };

    const advancePeek = (delta) => {
      if (!peekShown || !peekReady || delta === 0) return;

      const resetDelayedLift = () => {
        textLiftReady = false;
        clearTimeout(textLiftReadyTimer);
        textLiftReadyTimer = 0;
        textLiftDelayAccum = 0;
        textLiftDelayUnlocked = false;
      };

      if (delta > 0) {
        let remaining = delta;
        if (!imageAppearReady) {
          if (!imageAppearTimer) {
            imageAppearTimer = window.setTimeout(() => {
              imageAppearReady = true;
            }, imageAppearDelay);
          }
          return;
        }
        const next = peekProgress + delta / peekRevealDistance;
        const clamped = Math.max(0, Math.min(1, next));
        peekProgress = clamped;
        peekEl.style.setProperty("--peek-progress", String(clamped));
        const dimStrength = Math.max(0, Math.min(0.65, (clamped - 0.25) * 1.1)); // 少し出てから膜を強調
        peekEl.style.setProperty("--peek-dim", String(dimStrength));

        if (clamped >= 0.999) {
          if (!textAppearReady && !textAppearTimer) {
            textAppearTimer = window.setTimeout(() => {
              textAppearReady = true;
            }, textAppearDelay);
          }
          // テキスト出現
          if (textAppearReady && textProgress < 1) {
            const need = textRevealDistance * (1 - textProgress);
            const use = Math.min(remaining, need);
            textRevealAccum += use;
            remaining -= use;
            textProgress = Math.max(0, Math.min(1, textRevealAccum / textRevealDistance));
          }
          // テキスト上昇の準備
          if (textProgress >= 1 && !textLiftReady && !textLiftReadyTimer) {
            textLiftReadyTimer = window.setTimeout(() => {
              textLiftReady = true;
            }, textLiftDelay);
          }
          if (textProgress >= 1 && remaining > 0 && !textLiftDelayUnlocked) {
            const needDelay = Math.max(0, textLiftDelayDistance - textLiftDelayAccum);
            const useDelay = Math.min(remaining, needDelay);
            textLiftDelayAccum += useDelay;
            remaining -= useDelay;
            if (textLiftDelayAccum >= textLiftDelayDistance && textLiftReady) {
              textLiftDelayUnlocked = true;
            }
          }

        if (textProgress >= 1 && textLiftReady && textLiftDelayUnlocked && textLiftProgress < 1 && remaining > 0) {
          const need = textLiftDistance * (1 - textLiftProgress);
          const use = Math.min(remaining, need);
          textLiftAccum += use;
          remaining -= use;
          textLiftProgress = Math.max(0, Math.min(1, textLiftAccum / textLiftDistance));
        }
        if (textLiftProgress >= 1 && !cardAppearReady && !cardAppearTimer) {
          cardAppearTimer = window.setTimeout(() => {
            cardAppearReady = true;
          }, cardAppearDelay);
        }
        // 上段カード（左右）
        if (textLiftProgress >= 1 && cardAppearReady && topPairProgress < 1 && remaining > 0) {
          const need = topPairDistance * (1 - topPairProgress);
          const use = Math.min(remaining, need);
          topPairAccum += use;
          remaining -= use;
          topPairProgress = Math.max(0, Math.min(1, topPairAccum / topPairDistance));
        }
        if (topPairProgress >= 1 && !bottomAppearReady && !bottomAppearTimer) {
          bottomAppearTimer = window.setTimeout(() => {
            bottomAppearReady = true;
          }, bottomAppearDelay);
        }
        if (topPairProgress >= 1 && remaining > 0 && bottomDelayAccum < bottomDelayDistance) {
          const need = Math.max(0, bottomDelayDistance - bottomDelayAccum);
          const use = Math.min(remaining, need);
          bottomDelayAccum += use;
          remaining -= use;
        }
        // 下段カード（左右）
        if (textLiftProgress >= 1 && topPairProgress >= 1 && bottomAppearReady && bottomDelayAccum >= bottomDelayDistance && bottomPairProgress < 1 && remaining > 0) {
          const need = bottomPairDistance * (1 - bottomPairProgress);
          const use = Math.min(remaining, need);
          bottomPairAccum += use;
          remaining -= use;
          bottomPairProgress = Math.max(0, Math.min(1, bottomPairAccum / bottomPairDistance));
          }
        } else {
          textRevealAccum = 0;
          textProgress = 0;
          textLiftAccum = 0;
          textLiftProgress = 0;
      resetDelayedLift();
      cardAppearReady = false;
      clearTimeout(cardAppearTimer);
      cardAppearTimer = 0;
      topPairAccum = 0;
      topPairProgress = 0;
      bottomPairAccum = 0;
      bottomPairProgress = 0;
    }
      } else {
        // 逆スクロールで巻き戻す
        let remaining = Math.abs(delta);
        const stepBack = (progress, accum, distance) => {
          if (progress <= 0 || remaining <= 0) return { progress, accum };
          const use = Math.min(remaining, progress * distance);
          remaining -= use;
          const newAccum = Math.max(0, accum - use);
          const newProgress = Math.max(0, newAccum / distance);
          return { progress: newProgress, accum: newAccum };
        };

        // 下段カード → 上段カード → テキスト上昇 → テキスト出現 → 画像
        ({ progress: bottomPairProgress, accum: bottomPairAccum } = stepBack(
          bottomPairProgress,
          bottomPairAccum,
          bottomPairDistance
        ));

        ({ progress: topPairProgress, accum: topPairAccum } = stepBack(
          topPairProgress,
          topPairAccum,
          topPairDistance
        ));
        if (topPairProgress < 1) {
          bottomDelayAccum = 0;
          bottomAppearReady = false;
          clearTimeout(bottomAppearTimer);
          bottomAppearTimer = 0;
        }

        ({ progress: textLiftProgress, accum: textLiftAccum } = stepBack(
          textLiftProgress,
          textLiftAccum,
          textLiftDistance
        ));
        if (textLiftProgress < 1) {
          resetDelayedLift();
        }

        ({ progress: textProgress, accum: textRevealAccum } = stepBack(
          textProgress,
          textRevealAccum,
          textRevealDistance
        ));
        if (textProgress < 1) {
          resetDelayedLift();
          topPairAccum = 0;
          topPairProgress = 0;
          bottomPairAccum = 0;
          bottomPairProgress = 0;
          bottomDelayAccum = 0;
          bottomAppearReady = false;
          clearTimeout(bottomAppearTimer);
          bottomAppearTimer = 0;
          imageAppearReady = false;
          clearTimeout(imageAppearTimer);
          imageAppearTimer = 0;
        }

        const peekAccum = peekProgress * peekRevealDistance;
        if (remaining > 0 && peekAccum > 0) {
          const use = Math.min(remaining, peekAccum);
          const newAccum = Math.max(0, peekAccum - use);
          peekProgress = Math.max(0, newAccum / peekRevealDistance);
        }
        const dimStrength = Math.max(0, Math.min(0.65, (peekProgress - 0.25) * 1.1));
        peekEl.style.setProperty("--peek-dim", String(dimStrength));
      }

      const textOpacity = textProgress;
      peekEl.style.setProperty("--peek-progress", String(peekProgress));
      peekEl.style.setProperty("--peek-text-progress", String(textProgress));
      peekEl.style.setProperty("--peek-text-opacity", String(textOpacity));
      peekEl.style.setProperty("--peek-text-lift", `${textLiftProgress * textLiftMax}px`); // 目安で上方へ
      peekEl.style.setProperty("--peek-card-1", String(topPairProgress));
      peekEl.style.setProperty("--peek-card-2", String(topPairProgress));
      peekEl.style.setProperty("--peek-card-3", String(bottomPairProgress));
      peekEl.style.setProperty("--peek-card-4", String(bottomPairProgress));
      const cardFollowBase = 240; // テキスト直下に寄せるための基準オフセット
      const cardFollowLift = textLiftProgress * (textLiftMax * 0.6);
      peekEl.style.setProperty("--peek-card-follow", `${cardFollowBase - cardFollowLift}px`);
    };

    const calcLimit = () => {
      const sectionBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
      maxScrollY = Math.max(0, sectionBottom - window.innerHeight - lockOffset);
    };

    const clampScroll = () => {
      if (!lockActivated) return;
      if (window.scrollY > maxScrollY) {
        window.scrollTo({ top: maxScrollY, behavior: "auto" });
      }
    };

    const throttledClamp = throttle(clampScroll, 60);
    let touchStartY = 0;

    const startMomentumGuard = () => {
      if (!lockActivated) return;
      if (momentumGuardId) return;
      const loop = () => {
        clampScroll();
        momentumGuardId = requestAnimationFrame(loop);
      };
      momentumGuardId = requestAnimationFrame(loop);
      momentumGuardTimer = window.setTimeout(() => {
        cancelAnimationFrame(momentumGuardId);
        momentumGuardId = 0;
      }, 500);
    };

    const activateLock = () => {
      if (lockActivated) return;
      lockActivated = true;
      originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      document.body.classList.add("is-about-locked");
      document.documentElement.classList.add("is-about-locked");
      calcLimit();
      clampScroll();
      startMomentumGuard();
      showPeek();
    };

    const checkLockTrigger = () => {
      if (lockActivated) return;
      const rect = visual.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.75;
      if (rect.top <= triggerPoint) {
        activateLock();
      }
    };

    checkLockTrigger();

    window.addEventListener("scroll", () => {
      checkLockTrigger();
      throttledClamp();
    });
    window.addEventListener(
      "resize",
      throttle(() => {
        if (!lockActivated) return;
        calcLimit();
        clampScroll();
      }, 150)
    );
    window.addEventListener(
      "wheel",
      (event) => {
        if (!lockActivated) return;
        if (event.deltaY < 0) {
          if (peekShown && peekProgress > 0) {
            advancePeek(event.deltaY);
            event.preventDefault();
          }
          return;
        }
        const predictedY = window.scrollY + event.deltaY;
        if (predictedY >= Math.max(0, maxScrollY - overshootGuard)) {
          event.preventDefault();
          clampScroll();
          startMomentumGuard();
          showPeek();
          advancePeek(event.deltaY);
        }
      },
      { passive: false }
    );
    window.addEventListener(
      "touchstart",
      (event) => {
        const touch = event.touches[0];
        touchStartY = touch ? touch.clientY : 0;
      },
      { passive: true }
    );
    window.addEventListener(
      "touchmove",
      (event) => {
        if (!lockActivated) return;
        const touch = event.touches[0];
        if (!touch) return;
        const delta = touchStartY - touch.clientY;
        if (delta < 0) {
          if (peekShown && peekProgress > 0) {
            advancePeek(delta);
          }
          return;
        }
        const predictedY = window.scrollY + delta;
        if (predictedY >= Math.max(0, maxScrollY - overshootGuard)) {
          event.preventDefault();
          clampScroll();
          startMomentumGuard();
          showPeek();
          advancePeek(delta);
        }
      },
      { passive: false }
    );
  })();

  // Platformセクション：スクロール時のウェーブ演出
  (() => {
    const grid = document.querySelector(".product-showcase-grid");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".product-tile"));
    if (!cards.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-wave-visible"));
      return;
    }

    document.body.classList.add("platform-animate-ready");
    cards.forEach((card, index) => {
      card.style.setProperty("--wave-order", String(index));
    });

    const waveObserver = new IntersectionObserver(
      (entries) => {
        const hasVisibility = entries.some((entry) => entry.isIntersecting);
        if (!hasVisibility) return;
        cards.forEach((card) => card.classList.add("is-wave-visible"));
        waveObserver.disconnect();
      },
      { threshold: 0.35 }
    );

    waveObserver.observe(grid);
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
