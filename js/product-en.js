// js/product.js
"use strict";

const productCatalog = {
  "m1-drone": {
    title: "AERIS Drone Courier",
    tag: "Mobility",
    tagline: "Silent flight redefines the urban last mile.",
    description:
      "An autonomous drone that links rooftops, balconies, and sky bridges throughout the city. AERIS interprets your instructions and calendar to deliver essential items quietly exactly when you need them.",
    stats: [
      { label: "Flight", value: "18km / 25min" },
      { label: "Payload", value: "2.5kg" },
      { label: "Noise", value: "35dB" }
    ],
    features: [
      "All-weather sensors dodge obstacles and turbulent air in real time.",
      "Syncs with your personal schedule to dispatch urgent deliveries instantly.",
      "Carbon blades and hushed props keep late-night missions discreet."
    ],
    image: "images/m1.drone.png",
    alt: "AERIS Drone Courier"
  },
  "m1-fridge": {
    title: "AERIS Pantry Fridge",
    tag: "Living",
    tagline: "AI observes household nutrition and restocks only what matters.",
    description:
      "A smart fridge that watches your family’s nutritional balance by combining shopping data, expiration dates, and each member’s health log. It quietly organizes what is missing and what should be eaten now, reducing hesitation in the kitchen.",
    stats: [
      {
        label: "CAPACITY",
        value: "610L",
        caption: "Manages a week of groceries for a family of four to five"
      },
      {
        label: "ZONES",
        value: "6 Cooling",
        caption: "Independent zones for meat, fish, produce, drinks, wine, and baby food"
      },
      {
        label: "ENERGY",
        value: "A+++",
        caption: "Low-power design even while AI analyzes data 24/7"
      }
    ],
    features: [
      {
        label: "Inventory scanning & consumption forecasts",
        text: "Shelf cameras and weight sensors recognize ingredients automatically, and AERIS proposes restocking before items run out by comparing remaining volume with your pace of use."
      },
      {
        label: "Zone-specific temperature & humidity",
        text: "Automatically tunes temperature and humidity for meat, fish, produce, wine, and more, preventing over-chilling or drying so freshness lasts longer."
      },
      {
        label: "Nutrition balance & recipe pairing",
        text: "AERIS studies each family member’s preferences and nutrition log to suggest recipes you can cook with what’s already inside or plan an entire week of menus."
      }
    ],
    image: "images/m1.fridge.png",
    alt: "AERIS Pantry Fridge"
  },
  "m1-grass": {
    title: "AERIS Urban Glass",
    tag: "SUSTAINABILITY",
    tagline: "AR glasses that keep reality center stage.",
    description:
      "These AR glasses overlay only essential information without stealing your gaze from the real world. AERIS reads the surrounding context and your schedule to quietly suggest what you need while commuting or working. Built-in bone-conduction speakers deliver audio with almost no sound leakage, so no separate earphones are required.",
    stats: [
      {
        label: "DISPLAY",
        value: "45° FOV",
        caption: "See-through projection via dual micro-LED displays"
      },
      {
        label: "WEIGHT",
        value: "36 g",
        caption: "Ultra-light frame that stays comfortable all day"
      },
      {
        label: "RUNTIME",
        value: "19 h",
        caption: "Battery lasts through a full day and fast-charges"
      }
    ],
    features: [
      {
        label: "'Quiet Overlay' at the edge of your view",
        text: "Navigation, schedules, to-dos, and translations appear near the periphery and intensify only when you look at them, so reality stays the hero."
      },
      {
        label: "Context synced with AERIS",
        text: "Syncs calendar, mail, and location data to quietly remind you about transfers, recent conversations, and contextual notes."
      },
      {
        label: "Leak-free bone-conduction audio",
        text: "Proprietary conduction speakers play guidance and alerts without blocking your ears and without leaking content to the people around you."
      }
    ],
    image: "images/m1.grass.png",
    alt: "AERIS Urban Glass"
  },
  "m1-horo": {
    title: "AERIS Holo Console",
    tag: "Interface",
    tagline: "Expand entire rooms with holograms and work hands-free.",
    description:
      "A holographic console that turns the room itself into a workspace. Windows and models spill across walls and floors, so meetings, creation, and learning can be completed with gestures alone.",
    stats: [
      {
        label: "FOV",
        value: "170°",
        caption: "Ultra-wide holograms fit your whole body and workspace"
      },
      {
        label: "LATENCY",
        value: "12 ms",
        caption: "Low-latency response keeps gestures perfectly aligned"
      },
      {
        label: "USERS",
        value: "4 Sync",
        caption: "Up to four users share the same holo space in real time"
      }
    ],
    features: [
      {
        label: "Full-body gestures for intuitive control",
        text: "Twelve depth cameras track everything from fingertips to full-body movement, completing clicks, drags, and zooms with mid-air gestures."
      },
      {
        label: "Layered UI connected to AERIS",
        text: "AERIS organizes mail, documents, and apps into holographic panels so tasks and timelines can float as layered information in the room."
      },
      {
        label: "Share a space with remote teams",
        text: "Multi-user sync lets teammates or clients in other cities stand around the same holo board for meetings, reviews, and co-editing with gestures reproduced as holograms."
      }
    ],
    image: "images/m1.horo.png",
    alt: "AERIS Holo Console"
  },
  "m1-key": {
    title: "AERIS Key Capsule",
    tag: "Security",
    tagline: "A permission hub that unifies keys, cards, tokens, and data rights.",
    description:
      "More than a key for homes, vehicles, or offices, Key Capsule is a vault for sensitive data managed by AERIS. Only AERIS can access and refresh the credentials stored inside, handing them to devices or services only when required. A dedicated cloud keeps it synced, so your data persists even if the device is lost, and AERIS can remotely lock or wipe the capsule when something looks suspicious.",
    stats: [
      { label: "Protocols", value: "NFC / UWB / BLE" },
      { label: "Battery", value: "1 year" },
      { label: "Ingress", value: "IP68" }
    ],
    features: [
      {
        label: "Permission storage synced with AERIS",
        text: "Aggregates keys, card data, and login tokens inside one capsule. Only AERIS can read or write them, relaying credentials to apps and devices securely only when needed."
      },
      {
        label: "Port for data generated by AERIS",
        text: "Physically carry passkeys, one-time tokens, or encryption keys that AERIS creates. Insert Key Capsule into a PC, smart lock, or vehicle system to hand off data and authenticate instantly."
      },
      {
        label: "Auto kill switch on loss, relink when found",
        text: "If the capsule is lost, AERIS severs cloud sync and fully wipes its memory, turning it into inert hardware. If it is recovered later, a secure re-pairing flow lets you use it again."
      }
    ],
    image: "images/m1.key.png",
    alt: "AERIS Key Capsule"
  },
  "m1-knob": {
    title: "AERIS Orbit Knob",
    tag: "CONTROL",
    tagline: "A smart doorknob that knows who touches it.",
    description:
      "Orbit Knob works with AERIS to centrally manage every lock and unlock. The moment a registered user grabs the knob, it authenticates grip shape and releases the lock with no perceptible delay. Non-registered touches are logged with time and pattern and immediately reported through AERIS.",
    stats: [
      {
        label: "INPUTS",
        value: "Grip / Press",
        caption: "High-precision sensing of grip contact and pressure"
      },
      {
        label: "DISPLAY",
        value: "LED Ring",
        caption: "Shows lock status and alerts with color and motion"
      },
      {
        label: "LATENCY",
        value: "8 ms",
        caption: "Feels instant with sub-10 ms authentication latency"
      }
    ],
    features: [
      {
        label: "Instant unlock with hand recognition",
        text: "Authenticates registered users by hand shape and grip the moment they touch the knob, unlocking smoothly without interrupting the motion of opening the door."
      },
      {
        label: "AERIS logs and alerts on unknown touches",
        text: "If an unregistered hand makes contact, AERIS records the pattern and timestamp and notifies your phone or home hub in real time, even when you are away."
      },
      {
        label: "Unified lock history via AERIS",
        text: "Visualizes who opened which door and when, flags doors left open too long or unlocked overnight, and can auto-lock or send reminders as needed."
      }
    ],
    image: "images/m1.knob.jpg",
    alt: "AERIS Orbit Knob"
  },
  "m1-lens": {
    title: "AERIS Lens HUD",
    tag: "Wearable",
    tagline: "Featherweight AR lenses that overlay only what you need.",
    description:
      "Contact lenses designed for AERIS that gently layer information onto your natural vision. Use one eye as a HUD or both eyes for richer depth cues. The lenses omit speakers, letting you receive visual cues even in silent environments while pairing with earphones when audio is required.",
    stats: [
      {
        label: "Weight",
        value: "38g",
        caption: "So light you forget you are wearing them"
      },
      {
        label: "Battery",
        value: "28h",
        caption: "Battery supports full-day wear"
      },
      {
        label: "Resolution",
        value: "2.5K / eye",
        caption: "2.5K-per-eye resolution keeps text crisp"
      }
    ],
    features: [
      {
        label: "Iris authentication protects personal data",
        text: "Performs iris authentication at wear, ensuring only the owner can view notifications, notes, and health data rendered as their personal visual layer."
      },
      {
        label: "Hands-free control via gaze & blink gestures",
        text: "Tracks gaze position and motion precisely so natural actions—looking, blinking twice—handle selection, scrolling, and confirmation without using your hands."
      },
      {
        label: "Low-latency Wi-Fi 7 keeps every device in sync",
        text: "Connects simultaneously to phones, PCs, and L.U.X.E. devices to share schedules, navigation, and alerts in real time, all without leaking audio into the environment."
      }
    ],
    image: "images/m1.lens.png",
    alt: "AERIS Lens HUD"
  },
  "m1-neck": {
    title: "AERIS Neck Wave",
    tag: "AUDIO",
    tagline: "Necklace-style audio that speaks only to you without covering your ears.",
    description:
      "A necklace-style earphone you simply wear around your neck.<br>AERIS understands your location and situation, delivering notifications, readings, and music straight from the collar to your ears alone.<br>Proprietary acoustics send sound along the path from neck to eardrum, so people nearby cannot hear it and may not even realize audio is playing.<br>An integrated microphone lets you talk to AERIS or join calls seamlessly.",
    stats: [
      {
        label: "PLAYBACK",
        value: "20h",
        caption: "Playback you can trust for all-day wear"
      },
      {
        label: "DRIVERS",
        value: "Dual 30mm",
        caption: "Directional drivers that localize audio at your neck"
      },
      {
        label: "MODES",
        value: "Focus / Ambient",
        caption: "Tap to swap between Focus and Ambient modes"
      }
    ],
    features: [
      {
        label: "Private playback without blocking your ears",
        text: "Sound travels only along the neck-to-eardrum path, so you hear every detail while the outside world hears nothing—perfect for quiet spaces and public settings alike."
      },
      {
        label: "Comfort engineered for all-day wear",
        text: "A flexible band follows neck and shoulder movement, and the balanced weight stays unobtrusive through walking, desk work, or chores."
      },
      {
        label: "AERIS mixes notifications, narration, and translation",
        text: "Based on your schedule and location, AERIS decides which notifications to read aloud, adds email summaries or live translation as needed, and keeps delivery subtle."
      }
    ],
    image: "images/m1.neck.png",
    alt: "AERIS Neck Wave"
  },
  "m1-pen": {
    title: "AERIS Sync Pen",
    tag: "Creation",
    tagline: "A smart pen that links paper, tablets, and holograms with one stroke.",
    description:
      "Write on paper like a normal pen, on tablets like a stylus, or directly into holograms suspended in space. Every line and note is captured to the AERIS cloud so the same notebook is available and searchable on any device.",
    stats: [
      {
        label: "PRESSURE",
        value: "1024 lvl",
        caption: "1024 levels of pressure keep the feel of ink and digital identical"
      },
      {
        label: "LATENCY",
        value: "6ms",
        caption: "Low latency keeps strokes perfectly synced with the tip"
      },
      {
        label: "STORAGE",
        value: "24h Offline",
        caption: "Stores a full day of notes offline when there’s no network"
      }
    ],
    features: [
      {
        label: "One notebook across paper, tablets, and holograms",
        text: "Dedicated tracking merges handwriting from paper, screens, or holo canvases into a single cloud notebook that you can review by page or timeline later."
      },
      {
        label: "1024-level pressure with automatic calibration",
        text: "Pressure sensors capture nuance, while AERIS compensates for tip wear or surface differences to keep the writing feel consistent."
      },
      {
        label: "Safe offline storage, instant sync when online",
        text: "Stores 24 hours of encrypted notes inside the pen when offline and uploads them automatically the moment it reconnects, so nothing is ever lost."
      }
    ],
    image: "images/m1.pen.png",
    alt: "AERIS Sync Pen"
  },
  "m1-pods": {
    title: "AERIS Pods",
    tag: "AUDIO",
    tagline: "Truly wireless earbuds that deliver the sound your body needs right now.",
    description:
      "AERIS-connected earbuds engineered for all-day wear—from commuting to focused work to breaks. Sensors inside your ear read heart rate, temperature, and breathing rhythm so AERIS can infer focus or fatigue levels, then auto-adjust noise canceling, notification volume, and content to match your state.",
    stats: [
      {
        label: "PLAYBACK",
        value: "8h + Case",
        caption: "8 hours plus the case equals a full day of battery"
      },
      {
        label: "DRIVERS",
        value: "11mm",
        caption: "Large 11 mm drivers ready for spatial audio"
      },
      {
        label: "ANC",
        value: "Hybrid",
        caption: "Hybrid ANC combined with situational awareness filters"
      }
    ],
    features: [
      {
        label: "Vitals-aware tuning for sound and notifications",
        text: "Internal sensors capture heart rate, temperature, and breathing to estimate focus or stress. AERIS tones notifications down when you are deep in flow and suggests calm audio or breaks when you are fatigued."
      },
      {
        label: "Alert filter lets only critical sounds through",
        text: "Spatial mics analyze surroundings and let only critical cues—sirens, horns, your name, footsteps from behind—break through ANC so you stay safe while immersed."
      },
      {
        label: "“Instant bookmark” summaries",
        text: "Double-tap to mark the moment; AERIS captures the preceding conversation or context and saves a text summary—meeting decisions, fresh ideas—directly to the cloud for later review."
      }
    ],
    image: "images/m1.pods.png",
    alt: "AERIS Pods"
  },
  "m1-ring": {
    title: "AERIS Loop Ring",
    tag: "GESTURE",
    tagline: "A smart ring that controls and authenticates AERIS with gestures and vitals.",
    description:
      "Slip it on and Loop Ring becomes both remote control and ID token for the entire AERIS connection system. Operate AR glasses, contacts, or holographic UIs with finger gestures while tracking blood pressure, heart rate, temperature, oxygen, and sleep 24/7. AERIS alerts you to irregularities, can escalate emergencies automatically, and recommends care based on medical trend data.",
    stats: [
      {
        label: "SENSORS",
        value: "BP / HR / Temp / SpO₂",
        caption: "Continuously monitors BP, heart rate, temperature, and oxygen"
      },
      {
        label: "BATTERY",
        value: "1 week",
        caption: "Up to one week of runtime with full tracking enabled"
      },
      {
        label: "WATERPROOF",
        value: "Full Waterproof",
        caption: "Fully waterproof for baths or swimming without removal"
      }
    ],
    features: [
      {
        label: "Gesture control plus instant authentication",
        text: "Detects swipes, taps, and rotations to steer AR glasses, contacts, or holo consoles, while also acting as an ID token for doors, devices, and payments—just raise your hand."
      },
      {
        label: "24/7 vitals monitoring with auto alerts",
        text: "Tracks blood pressure, heart rate, temperature, oxygen, and sleep rhythm continuously and notifies you immediately if values drift or spike, even auto-calling preset contacts or emergency services when necessary."
      },
      {
        label: "Predictive insights backed by medical data",
        text: "Compares your daily vitals with a medical database to estimate disease risk early and recommends when to seek care or testing if trends become concerning."
      }
    ],
    image: "images/m1.ring.png",
    alt: "AERIS Loop Ring"
  },
  "m1-speaker": {
    title: "AERIS Halo Speaker",
    tag: "AMBIENT",
    tagline: "A home hub that reskins an entire room with sound, light, and holograms.",
    description:
      "Place Halo Speaker near the center of a room and the whole space becomes a canvas. 360° projection paints walls and ceilings with holograms—from rippling water and forests to futuristic HUDs—while sound and illumination synchronize to match the scene or the mood AERIS proposes.",
    stats: [
      {
        label: "DRIVERS",
        value: "8ch 360°",
        caption: "8-channel 360° audio blends perfectly with holo spaces"
      },
      {
        label: "LIGHT",
        value: "16M Colors",
        caption: "16 million-color ring and wall lighting adapt to every scene"
      },
      {
        label: "SYNC",
        value: "Whole-home",
        caption: "Keeps AERIS devices and hologram scenes in sync across rooms"
      }
    ],
    features: [
      {
        label: "Room Skins: 360° holograms that change the entire space",
        text: "Scans ceilings, walls, and furniture to project distortion-free holograms—rippling water, forest light, starfields, sci-fi HUDs—transforming the room in moments."
      },
      {
        label: "Auto scenes for sound, light, and holograms",
        text: "AERIS reads time, schedule, weather, and presence to switch scenes like Focus, Relax, Home Theater, or Sleep, adjusting BGM, volume, holograms, and lighting in unison."
      },
      {
        label: "Save and replay your favorite atmosphere",
        text: "Snapshot any mix of audio, light, and holograms with one tap, name it—'Rainy Reading,' 'Exam Focus'—and recall it anywhere, synchronized with Lens HUD or Holo Console."
      }
    ],
    image: "images/m1.speaker.png",
    alt: "AERIS Halo Speaker"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "";
  const product = productCatalog[id];

  const tagEl = document.getElementById("detail-tag");
  const titleEl = document.getElementById("detail-title");
  const descEl = document.getElementById("detail-description");
  const taglineEl = document.getElementById("detail-tagline");
  const statsEl = document.getElementById("detail-stats");
  const featuresEl = document.getElementById("detail-features");
  const imageEl = document.getElementById("detail-image");
  const messageEl = document.getElementById("detail-message");

  if (!product) {
    tagEl.textContent = "Product";
    titleEl.textContent = "Product information not found";
    descEl.textContent =
      "The link may be invalid or points to a prototype that is not yet public. Please return to the gallery and try another device.";
    taglineEl.textContent = "";
    statsEl.innerHTML = "";
    statsEl.hidden = true;
    featuresEl.innerHTML = "";
    imageEl.hidden = true;
    messageEl.hidden = false;
    return;
  }

  tagEl.textContent = product.tag;
  titleEl.textContent = product.title;
  descEl.textContent = product.description;
  taglineEl.textContent = product.tagline || "";
  taglineEl.hidden = !product.tagline;
  imageEl.src = product.image;
  imageEl.alt = product.alt || product.title;
  imageEl.hidden = false;
  messageEl.hidden = true;

  statsEl.innerHTML = "";
  if (Array.isArray(product.stats) && product.stats.length) {
    product.stats.forEach((stat) => {
      const li = document.createElement("li");
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = stat.label ?? "";
      const value = document.createElement("span");
      value.className = "value";
      value.textContent = stat.value ?? "";
      li.append(label, value);
      statsEl.appendChild(li);
    });
    statsEl.hidden = false;
  } else {
    statsEl.hidden = true;
  }

  featuresEl.innerHTML = "";
  if (Array.isArray(product.features) && product.features.length) {
    featuresEl.hidden = false;
    product.features.forEach((feature) => {
      const li = document.createElement("li");
      if (typeof feature === "string") {
        li.textContent = feature;
      } else if (feature && typeof feature === "object") {
        if (feature.label) {
          const strong = document.createElement("strong");
          strong.textContent = feature.label;
          li.appendChild(strong);
        }
        if (feature.text) {
          const span = document.createElement("span");
          span.textContent = feature.label ? ` ${feature.text}` : feature.text;
          li.appendChild(span);
        }
        if (!feature.label && !feature.text) {
          li.textContent = String(feature);
        }
      } else {
        li.textContent = String(feature ?? "");
      }
      featuresEl.appendChild(li);
    });
  } else {
    featuresEl.hidden = true;
  }
});
