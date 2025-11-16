// js/product.js
"use strict";

const productCatalog = {
  "m1-drone": {
    title: "AERIS Drone Courier",
    tag: "Mobility",
    tagline: "Silent flights redefine the city's last mile.",
    description:
      "An autonomous drone that links rooftops and balconies across the city. "
      + "AERIS understands your commands and schedule to deliver important items through near-silent flights.",
    stats: [
      { label: "Flight", value: "18km / 25min" },
      { label: "Payload", value: "2.5kg" },
      { label: "Noise", value: "35dB" }
    ],
    features: [
      "All-weather sensors dodge obstacles and turbulence in real time.",
      "Syncs with your personal schedule for immediate deliveries.",
      "Carbon blades and quiet propellers keep late-night flights considerate."
    ],
    image: "images/m1.drone.png",
    alt: "AERIS Drone Courier"
  },
  "m1-fridge": {
    title: "AERIS Pantry Fridge",
    tag: "Living",
    tagline: "AI watches household nutrition and restocks only what you need.",
    description:
      "A smart refrigerator that monitors your family's nutrition. It blends purchase data, expiration dates, "
      + "and individual health logs to suggest optimal restocks and recipes, quietly organizing what is missing and what should be eaten now.",
    stats: [
      {
        label: "CAPACITY",
        value: "610L",
        caption: "Stores a week's groceries for a family of four to five."
      },
      {
        label: "ZONES",
        value: "6 Cooling",
        caption: "Independent zones for meat, fish, produce, beverages, wine, and baby food."
      },
      {
        label: "ENERGY",
        value: "A+++",
        caption: "Low-power design even while running 24/7 AI analysis."
      }
    ],
    features: [
      {
        label: "Inventory scan & consumption forecasting",
        text: "Shelf cameras and weight sensors recognize groceries automatically and recommend replenishment timing before you run out."
      },
      {
        label: "Zone-tuned temperature & humidity",
        text: "Adjusts temperature and humidity per zone so meat, fish, produce, or wine all stay at peak freshness without over-chilling or drying out."
      },
      {
        label: "Nutrition balance & recipe guidance",
        text: "AERIS analyzes each family member's preferences and nutrition log to suggest recipes you can make with today's ingredients plus a weekly meal plan."
      }
    ],
    image: "images/m1.fridge.png",
    alt: "AERIS Pantry Fridge"
  },
  "m1-grass": {
    title: "AERIS Urban Glass",
    tag: "SUSTAINABILITY",
    tagline: "AR glasses that keep reality center stage without extra screens.",
    description:
      "AR glasses that overlay only the information you need onto real life without stealing your gaze toward phones or displays. "
      + "AERIS reads the surrounding context and your schedule to whisper suggestions while you travel or work. "
      + "Bone-conduction speakers built into the frame deliver audio with minimal leakage, so there is no need for separate earphones.",
    stats: [
      {
        label: "DISPLAY",
        value: "45 deg FOV",
        caption: "See-through projection via dual micro-LED optics."
      },
      {
        label: "WEIGHT",
        value: "36 g",
        caption: "Light enough to forget you're wearing them all day."
      },
      {
        label: "RUNTIME",
        value: "19 h",
        caption: "All-day battery plus fast charging."
      }
    ],
    features: [
      {
        label: "Quiet Overlay at the edge of your vision",
        text: "Displays navigation, schedules, to-dos, and translation only at the periphery. Information highlights only when you look at it, keeping reality as the hero."
      },
      {
        label: "Context cues synced with AERIS",
        text: "Connects to calendar, email, and location to gently surface situational notes like transfer reminders or the last topic you discussed with someone."
      },
      {
        label: "Bone-conduction audio with minimal leakage",
        text: "Custom bone conduction keeps your ears open while sending voice guidance and notifications without leaking content to people nearby."
      }
    ],
    image: "images/m1.grass.png",
    alt: "AERIS Urban Glass"
  },
  "m1-horo": {
    title: "AERIS Holo Console",
    tag: "Interface",
    tagline: "A workspace that expands the entire room with holograms and bare hands.",
    description:
      "A holographic console that turns the whole space into a workspace. "
      + "Windows and models extend beyond the desk to walls and floors, letting you finish meetings, creation, or learning with gestures alone.",
    stats: [
      { label: "FOV", value: "170 deg", caption: "Ultra-wide holograms that capture bodies and workspace." },
      {
        label: "LATENCY",
        value: "12 ms",
        caption: "Ultra-low latency so gestures and visuals stay in sync."
      },
      {
        label: "USERS",
        value: "4 Sync",
        caption: "Up to four users can share the same holo-space live."
      }
    ],
    features: [
      {
        label: "Full-body gesture control",
        text: "Twelve depth cameras track every movement from fingertips to posture, handling clicks, drags, and zooms entirely in mid-air."
      },
      {
        label: "Layered UI powered by AERIS",
        text: "AERIS organizes mail, documents, and apps, surfacing only the panels you need and layering tasks or timelines throughout the room."
      },
      {
        label: "Share the same room remotely",
        text: "Multi-user sync recreates gestures and positions so teammates or clients in other cities can collaborate on the same holo board."
      }
    ],
    image: "images/m1.horo.png",
    alt: "AERIS Holo Console"
  },
  "m1-key": {
    title: "AERIS Key Capsule",
    tag: "Security",
    tagline: "A permission hub that unifies keys, cards, tokens, and data access.",
    description:
      "More than a keychain, it is a vault for the sensitive data AERIS manages. "
      + "Only AERIS can read or refresh the credentials stored inside, bridging them to devices or services only when needed. "
      + "Always synced to a dedicated cloud, so losing the device never means losing data. AERIS detects anomalies, reports them, and can lock or wipe the capsule remotely.",
    stats: [
      { label: "Protocols", value: "NFC / UWB / BLE" },
      { label: "Battery", value: "1 year" },
      { label: "Ingress", value: "IP68" }
    ],
    features: [
      {
        label: "Permission storage synced with AERIS",
        text: "Aggregates keys, cards, and login tokens in a single capsule, where only AERIS is allowed to read or write. Apps and devices receive data safely just-in-time."
      },
      {
        label: "Physical port for AERIS-generated data",
        text: "Allows you to carry passkeys, one-time tokens, or encryption keys generated by AERIS. Plug the capsule into PCs, smart locks, or vehicles to transfer and authenticate instantly."
      },
      {
        label: "Auto kill switch on loss, painless relink when found",
        text: "If lost, AERIS cuts cloud sync and wipes local memory so it becomes an inert object. When recovered, a guided re-pairing process brings it back as a secure key."
      }
    ],
    image: "images/m1.key.png",
    alt: "AERIS Key Capsule"
  },
  "m1-knob": {
    title: "AERIS Orbit Knob",
    tag: "CONTROL",
    tagline: "A door knob that knows who touches it the instant you grip it.",
    description:
      "A smart knob that unifies lock status with AERIS. Registered users are authenticated by grip shape and instantly unlock; unregistered touches are logged and reported through AERIS.",
    stats: [
      {
        label: "INPUTS",
        value: "Grip / Press",
        caption: "High-precision sensing of contact and grip pattern."
      },
      {
        label: "DISPLAY",
        value: "LED Ring",
        caption: "Shows lock state and alerts with color and animation."
      },
      {
        label: "LATENCY",
        value: "8 ms",
        caption: "Feels instant from touch to unlock."
      }
    ],
    features: [
      {
        label: "Instant unlock with hand authentication",
        text: "Recognizes registered users by the shape, size, and motion of their grip so the door opens naturally with no perceived delay."
      },
      {
        label: "AERIS logs unregistered touches",
        text: "Records time and grip data for unknown hands and notifies your phone or home hub immediately so you can monitor suspicious access remotely."
      },
      {
        label: "Centralized lock history and status",
        text: "Timeline view shows who opened which door and when. AERIS detects long-open states or nighttime unlocks and auto-locks or reminds you when needed."
      }
    ],
    image: "images/m1.knob.jpg",
    alt: "AERIS Orbit Knob"
  },
  "m1-lens": {
    title: "AERIS Lens HUD",
    tag: "Wearable",
    tagline: "Featherweight AR lenses overlay only the info you need.",
    description:
      "AERIS contact lenses quietly layer information over natural eyesight. "
      + "Use one lens as a HUD or both for richer depth cues. They output no sound themselves, so you can take in visual cues even where audio is not allowed, while optional earphones handle voice guidance.",
    stats: [
      { label: "Weight", value: "38g", caption: "Ultra-light so you forget you're wearing them." },
      { label: "Battery", value: "28h", caption: "Long battery designed for all-day wear." },
      {
        label: "Resolution",
        value: "2.5K / eye",
        caption: "Crisp 2.5K-equivalent resolution per eye for text legibility."
      }
    ],
    features: [
      {
        label: "Iris authentication for personal data layers",
        text: "Performs iris scan at insertion so only you can view data. Notifications, notes, and health info appear as encrypted personal layers in your field of view."
      },
      {
        label: "Gaze tracking and blink gestures",
        text: "High-precision eye tracking lets you select, scroll, and confirm with natural actions like looking or double-blinking, leaving your hands free."
      },
      {
        label: "Low-latency Wi-Fi 7 sync",
        text: "Connects simultaneously to phones, PCs, and other LUXE devices to mirror schedules, navigation, and alerts instantly without leaking audio."
      }
    ],
    image: "images/m1.lens.png",
    alt: "AERIS Lens HUD"
  },
  "m1-neck": {
    title: "AERIS Neck Wave",
    tag: "AUDIO",
    tagline: "Necklace-style earphones that keep ears open yet send sound only to you.",
    description:
      "A necklace-style earphone that rests on your neck. "
      + "AERIS understands your location and situation, delivering notifications, readings, and BGM from your collar directly to your ears. "
      + "Custom acoustics make it feel as if sound appears from the necklace itself with zero leakage, and built-in microphones let you talk with AERIS or jump on calls.",
    stats: [
      { label: "PLAYBACK", value: "20h", caption: "Battery for carefree all-day wear." },
      { label: "DRIVERS", value: "Dual 30mm", caption: "Directional drivers that anchor audio around your neck." },
      { label: "MODES", value: "Focus / Ambient", caption: "One-tap switch between focus and ambient modes." }
    ],
    features: [
      {
        label: "Pinpoint playback only you can hear",
        text: "A unique acoustic path routes sound from neck to eardrum so you hear clearly while people nearby hear nothing - perfect for quiet spaces or commuting."
      },
      {
        label: "Comfort designed for all-day wear",
        text: "A flexible band follows neck and shoulder movement, and balanced weight keeps it unobtrusive through walking, desk work, or chores."
      },
      {
        label: "AERIS mixes notifications, readings, and translations",
        text: "Based on schedule and location, AERIS reads only the most important notifications at your collar, adding summaries or real-time translation when context calls for it."
      }
    ],
    image: "images/m1.neck.png",
    alt: "AERIS Neck Wave"
  },
  "m1-pen": {
    title: "AERIS Sync Pen",
    tag: "Creation",
    tagline: "A smart pen that links paper, tablets, and holograms with a single stroke.",
    description:
      "Write on paper like a regular pen, use it as a stylus on tablets, or draw directly onto floating holograms - the AERIS-connected pen keeps every stroke in sync. "
      + "All lines and notes automatically save to the AERIS cloud so you can review or search them later on any device.",
    stats: [
      {
        label: "PRESSURE",
        value: "1024 lvl",
        caption: "1024 pressure levels for natural handwriting on paper and digital surfaces."
      },
      { label: "LATENCY", value: "6ms", caption: "Low latency keeps ink aligned with the pen tip." },
      {
        label: "STORAGE",
        value: "24h Offline",
        caption: "Stores a full day's writing offline until it reconnects."
      }
    ],
    features: [
      {
        label: "Unified notebook across paper, tablet, and hologram",
        text: "Special tracking merges handwriting from notebooks, tablet screens, or hologram canvases into a single cloud notebook with timelines and pages."
      },
      {
        label: "1024-level pressure with auto calibration",
        text: "Captures nuance in every stroke and automatically compensates for pen-tip wear or different surfaces so writing feels consistent."
      },
      {
        label: "Secure offline storage, instant online sync",
        text: "Stores encrypted notes inside the pen when offline and uploads them automatically once reconnected, so nothing you write is ever lost."
      }
    ],
    image: "images/m1.pen.png",
    alt: "AERIS Sync Pen"
  },
  "m1-pods": {
    title: "AERIS Pods",
    tag: "AUDIO",
    tagline: "Truly wireless audio that reads your body and context to deliver the right sound.",
    description:
      "AERIS-connected true wireless earbuds designed to stay in all day for commuting, work, and rest. "
      + "In-ear sensors read heart rate, temperature, and breathing rhythm so AERIS can estimate focus or fatigue and adjust noise cancelation, notifications, and content on the fly.",
    stats: [
      { label: "PLAYBACK", value: "8h + Case", caption: "Earbuds last 8h, with a case for a full day's charge." },
      {
        label: "DRIVERS",
        value: "11mm",
        caption: "Large drivers ready for immersive spatial audio."
      },
      {
        label: "ANC",
        value: "Hybrid",
        caption: "Hybrid ANC plus situational filters."
      }
    ],
    features: [
      {
        label: "Vital sensing tunes sound & notifications",
        text: "Ear sensors monitor vitals so AERIS mutes notifications when you're deep in focus or suggests calm soundscapes when fatigue kicks in."
      },
      {
        label: "Alert filter lets only critical sounds through",
        text: "Spatial microphones analyze surroundings and allow only critical cues - sirens, horns, someone calling your name - to pass through the ANC wall."
      },
      {
        label: "\"Moment Bookmark\" summaries",
        text: "Double-tap to mark the moment. AERIS summarizes recent conversations or events into text notes, saving them to the cloud so you can replay your day via the Pods timeline."
      }
    ],
    image: "images/m1.pods.png",
    alt: "AERIS Pods"
  },
  "m1-ring": {
    title: "AERIS Loop Ring",
    tag: "GESTURE",
    tagline: "A smart ring that handles AERIS control and authentication via gestures and vitals.",
    description:
      "Slip it on and the ring becomes both remote and ID token for the entire AERIS connection system. "
      + "Control AR glasses, contacts, or holographic UIs with finger gestures while monitoring blood pressure, heart rate, temperature, oxygen, and sleep around the clock. "
      + "AI flags early signs of trouble, sends alerts, and can even trigger emergency calls.",
    stats: [
      {
        label: "SENSORS",
        value: "BP / HR / Temp / SpO2",
        caption: "Continuous monitoring of blood pressure, heart rate, temperature, and oxygen."
      },
      { label: "BATTERY", value: "1 week", caption: "Up to a week of full tracking on a charge." },
      { label: "WATERPROOF", value: "Full Waterproof", caption: "Fully waterproof for showers or swimming." }
    ],
    features: [
      {
        label: "Gesture control & authentication",
        text: "Detects swipes, taps, and rotations to control AR devices, and doubles as an ID token for doors, devices, or payments with a simple hand wave."
      },
      {
        label: "24/7 vital monitoring with instant alerts",
        text: "Tracks blood pressure, heart rate, temperature, oxygen, and sleep, alerting you - and optionally emergency contacts - when anomalies appear."
      },
      {
        label: "Predictive health recommendations",
        text: "Matches daily trends against medical datasets to estimate risks and propose doctor visits or tests before issues escalate."
      }
    ],
    image: "images/m1.ring.png",
    alt: "AERIS Loop Ring"
  },
  "m1-speaker": {
    title: "AERIS Halo Speaker",
    tag: "AMBIENT",
    tagline: "A home hub that restyles the room with sound, light, and holograms in seconds.",
    description:
      "Place it near the center of a room and the AERIS hub speaker turns the whole environment into a canvas. "
      + "360 deg projection paints walls and ceilings with holograms - from ripples and forests to sci-fi HUDs - while sound and illumination sync to the current mood or persona suggestion.",
    stats: [
      {
        label: "DRIVERS",
        value: "8ch 360 deg",
        caption: "Eight-channel 360 deg audio merges with hologram spaces."
      },
      {
        label: "LIGHT",
        value: "16M Colors",
        caption: "16 million-color ring and wall lighting matched to the scene."
      },
      {
        label: "SYNC",
        value: "Whole-home",
        caption: "Multi-room sync with every AERIS device and hologram scene."
      }
    ],
    features: [
      {
        label: "Room Skins",
        text: "Scans ceilings, walls, and furniture to correct distortion and project 360 deg holograms, instantly changing the room's expression with skins like rippling water, forest lights, starfields, or minimal HUDs."
      },
      {
        label: "Scene automation for sound, light, and holograms",
        text: "AERIS reads time, schedule, weather, and presence to switch between focus, relax, theater, or sleep modes, adjusting music, volume, holograms, and lighting as one."
      },
      {
        label: "Save and replay favorite atmospheres",
        text: "Capture the combination of sound, light, and hologram with one tap, name it \"Rainy Day Reading\" or \"Pre-exam Focus,\" and replay it anywhere - even synced to Lens HUD or Holo Console."
      }
    ],
    image: "images/m1.speaker.png",
    alt: "AERIS Halo Speaker"
  }
};

// This file only exposes productCatalog globally.
