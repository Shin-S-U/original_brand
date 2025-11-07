// js/product.js
"use strict";

const productCatalog = {
  "m1-drone": {
    title: "AERIS Drone Courier",
    tag: "Mobility",
    tagline: "静音フライトで都市のラストワンマイルを再定義。",
    description:
      "都市の屋上やバルコニーを結ぶ自律型ドローン。AERISがあなたの指示や予定を理解し、重要なアイテムを静音フライトで届けます。",
    stats: [
      { label: "Flight", value: "18km / 25min" },
      { label: "Payload", value: "2.5kg" },
      { label: "Noise", value: "35dB" }
    ],
    features: [
      "全天候センサーで障害物と気流をリアルタイム回避",
      "パーソナルスケジュールと同期し、緊急配送を即応",
      "カーボンブレードと静音プロペラで夜間運用にも対応"
    ],
    image: "images/m1.drone.png",
    alt: "AERIS Drone Courier"
  },
  "m1-fridge": {
    title: "AERIS Pantry Fridge",
    tag: "Living",
    tagline: "家庭の栄養をAIが観察し、必要なものだけを補充。",
    description:
      "家庭の栄養バランスを見守るスマート冷蔵庫。買い物データと健康ログを掛け合わせ、最適な補充とレシピを提案します。",
    stats: [
      { label: "Capacity", value: "610L" },
      { label: "Zones", value: "6 Cooling" },
      { label: "Energy", value: "A+++ " }
    ],
    features: [
      "在庫スキャンで食材を自動分類・消費期限を可視化",
      "温度ゾーンをAI制御し、ワインからベビー食品まで最適保存",
      "好みと栄養状態に合わせた調理プランをアプリへ送信"
    ],
    image: "images/m1.fridge.png",
    alt: "AERIS Pantry Fridge"
  },
  "m1-grass": {
    title: "AERIS Urban Garden",
    tag: "Sustainability",
    tagline: "屋内でも都市でも、季節を問わず収穫できる菜園モジュール。",
    description:
      "室内・屋上どこでも設置できる自律菜園モジュール。街区の気象データとリンクし、四季を問わずフレッシュなハーブを育てます。",
    stats: [
      { label: "Yield", value: "12株/週" },
      { label: "Water", value: "0.8L/日" },
      { label: "Footprint", value: "0.4㎡" }
    ],
    features: [
      "地域の気候データを学習し、照度と潅水をナノ単位で調整",
      "栄養素の偏りを検知して自動で溶液をブレンド",
      "成果物とCO₂削減量をダッシュボードで共有"
    ],
    image: "images/m1.grass.png",
    alt: "AERIS Urban Garden"
  },
  "m1-horo": {
    title: "AERIS Holo Console",
    tag: "Interface",
    tagline: "空間全体をホログラムで拡張し、手ぶらで操るワークスペース。",
    description:
      "空間全体をワークスペースに変えるホログラフィックUI。会議・制作・学習をジェスチャー操作だけで完結できます。",
    stats: [
      { label: "FOV", value: "170°" },
      { label: "Latency", value: "12ms" },
      { label: "Users", value: "4 Sync" }
    ],
    features: [
      "12カメラのモーションキャプチャで指先の動きまで取得",
      "AERIS personaと連携し、必要な情報を空間にレイヤー表示",
      "マルチユーザー同期で離れた同僚とも共同編集"
    ],
    image: "images/m1.horo.png",
    alt: "AERIS Holo Console"
  },
  "m1-key": {
    title: "AERIS Key Capsule",
    tag: "Security",
    tagline: "鍵・カード・トークンをひとつに集約するパーミッションハブ。",
    description:
      "住宅・車両・ワークスペースをひとつのトークンで管理。許可フローや履歴もAERISアプリで一元化できます。",
    stats: [
      { label: "Protocols", value: "NFC / UWB / BLE" },
      { label: "Battery", value: "14 days" },
      { label: "Ingress", value: "IP68" }
    ],
    features: [
      "マルチプロトコルでスマートロックやeSIMと直接通信",
      "ウルトラワイドバンド測位で置き忘れや盗難を即検知",
      "ゲスト共有リンクを生成し、時間帯や場所で自動失効"
    ],
    image: "images/m1.key.png",
    alt: "AERIS Key Capsule"
  },
  "m1-knob": {
    title: "AERIS Orbit Knob",
    tag: "Control",
    tagline: "触覚でAIを操る多機能ダイヤル。状況に応じて役割が変化。",
    description:
      "触覚でAIを操る多機能ダイヤル。照明・オーディオ・ロボティクスなど、AERISが文脈を理解して最適な操作に切り替えます。",
    stats: [
      { label: "Inputs", value: "Press / Tilt / Rotate" },
      { label: "Display", value: "1.9\" OLED" },
      { label: "Latency", value: "8ms" }
    ],
    features: [
      "圧力と回転を感知するデュアルセンサーで細かな指示が可能",
      "状況に応じてノブの表示が自動変化し、迷いをゼロに",
      "機械学習でよく使うジェスチャーをカスタムマクロ化"
    ],
    image: "images/m1.knob.jpg",
    alt: "AERIS Orbit Knob"
  },
  "m1-lens": {
    title: "AERIS Lens HUD",
    tag: "Wearable",
    tagline: "視界に必要な情報だけを重ねる軽量ARレンズ。",
    description:
      "視界に必要な情報だけを重ねる軽量レンズ。歩行時のナビや工場ラインのチェックも、音声なしで即座に把握できます。",
    stats: [
      { label: "Weight", value: "38g" },
      { label: "Battery", value: "6h" },
      { label: "Resolution", value: "2.5K / eye" }
    ],
    features: [
      "虹彩認証でパーソナルデータを安全に展開",
      "視線トラッキングでハンズフリー操作を実現",
      "低遅延Wi-Fi 7で複数デバイスとリアルタイム同期"
    ],
    image: "images/m1.lens.png",
    alt: "AERIS Lens HUD"
  },
  "m1-neck": {
    title: "AERIS Neck Wave",
    tag: "Audio",
    tagline: "耳を塞がずに本人だけへ届くネックスピーカー。",
    description:
      "首元に静かに装着するパーソナルスピーカー。AERISが周囲のノイズと予定を読み取り、声を出さずに情報を届けます。",
    stats: [
      { label: "Playback", value: "20h" },
      { label: "Drivers", value: "Dual 30mm" },
      { label: "Modes", value: "Focus / Ambient" }
    ],
    features: [
      "振動板と指向性スピーカーで本人だけに聞こえる音像を生成",
      "姿勢センサーで長時間装着でも快適にフィット",
      "通話・翻訳・通知をAERIS personaが状況に応じて読み上げ"
    ],
    image: "images/m1.neck.png",
    alt: "AERIS Neck Wave"
  },
  "m1-pen": {
    title: "AERIS Sync Pen",
    tag: "Creation",
    tagline: "紙もタブレットも同じ書き心地でクラウド同期。",
    description:
      "紙でもタブレットでも同じ書き心地を再現するスマートペン。アナログのメモがAERISクラウドに即座に同期されます。",
    stats: [
      { label: "Pressure", value: "1024 lvl" },
      { label: "Latency", value: "6ms" },
      { label: "Storage", value: "24h Offline" }
    ],
    features: [
      "筆圧1024段階を記録し、ペン先を自動校正",
      "オフラインでも端末内ストレージに24時間分保存",
      "音声メモやタスクをワンタップでAERISへ送信"
    ],
    image: "images/m1.pen.png",
    alt: "AERIS Sync Pen"
  },
  "m1-pods": {
    title: "AERIS Pods",
    tag: "Audio",
    tagline: "状況感知型の完全ワイヤレスで集中と安心を両立。",
    description:
      "状況感知型の完全ワイヤレスイヤーウェア。環境音とコミュニケーションをAERISがブレンドし、集中と安心を両立します。",
    stats: [
      { label: "Playback", value: "8h + Case" },
      { label: "Drivers", value: "11mm" },
      { label: "ANC", value: "Hybrid" }
    ],
    features: [
      "空間マイクで周囲のアラートだけを透過",
      "頭部トラッキングで臨場感ある空間オーディオを生成",
      "通勤モードや集中モードなどAIプリセットを自動切替"
    ],
    image: "images/m1.pods.png",
    alt: "AERIS Pods"
  },
  "m1-ring": {
    title: "AERIS Loop Ring",
    tag: "Gesture",
    tagline: "指先のジェスチャーとバイタルをさりげなく取得。",
    description:
      "指先の動きやバイタルを読み取るスマートリング。AERISがライフログとセットで分析し、次の行動を提案します。",
    stats: [
      { label: "Sensors", value: "HR / Temp / SpO₂" },
      { label: "Battery", value: "4 days" },
      { label: "Waterproof", value: "50m" }
    ],
    features: [
      "心拍・体温・睡眠を24時間トラッキング",
      "ジェスチャーで家電や移動手段をワンタップ起動",
      "本人確認をバイオメトリクスで実施し、決済や入退室に利用"
    ],
    image: "images/m1.ring.png",
    alt: "AERIS Loop Ring"
  },
  "m1-speaker": {
    title: "AERIS Halo Speaker",
    tag: "Ambient",
    tagline: "音と光で空間のムードを瞬時に切り替えるハブ。",
    description:
      "部屋の音と照明を一体で演出するハブスピーカー。AERIS personaが好みに合わせて空間サウンドを即興します。",
    stats: [
      { label: "Drivers", value: "8ch 360°" },
      { label: "Light", value: "16M Colors" },
      { label: "Sync", value: "Whole-home" }
    ],
    features: [
      "360°サウンドフィールドで部屋全体を均一にカバー",
      "イルミネーションが感情トーンと連動して変化",
      "マルチルーム同期で家中のAERISデバイスを束ねる"
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
    titleEl.textContent = "製品情報が見つかりません";
    descEl.textContent = "リンクが無効か、公開前のプロトタイプです。ギャラリーから別の製品をお試しください。";
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
  product.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresEl.appendChild(li);
  });
});
