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
      "家庭の栄養バランスを見守るスマート冷蔵庫。買い物データと賞味期限、家族ごとの健康ログを掛け合わせ、最適な補充とレシピを提案します。「足りないもの」「今食べるべきもの」を静かに整理し、キッチンの迷いを減らします。",
    stats: [
      {
        label: "CAPACITY",
        value: "610L",
        caption: "4〜5人家族の一週間分の食材をまとめて管理"
      },
      {
        label: "ZONES",
        value: "6 Cooling",
        caption: "肉・魚・野菜・飲料・ワイン・ベビーフード用の独立ゾーン制御"
      },
      {
        label: "ENERGY",
        value: "A+++",
        caption: "24時間AI解析しながらも低消費電力設計"
      }
    ],
    features: [
      {
        label: "在庫スキャンと消費予測",
        text: "棚カメラと重量センサーで食材を自動認識。残量と消費ペースから「なくなる前」に補充タイミングを提案。"
      },
      {
        label: "温度・湿度をゾーン別に最適化",
        text: "肉・魚・野菜・ワインなど、用途別に温度と湿度を自動調整。冷やしすぎ・乾燥しすぎを防ぎ、鮮度をキープ。"
      },
      {
        label: "栄養バランス & レシピ連携",
        text: "家族ごとの好みと栄養ログをAERISが解析し、「今日の冷蔵庫の中だけで作れる」レシピや一週間の献立案を提案。"
      }
    ],
    image: "images/m1.fridge.png",
    alt: "AERIS Pantry Fridge"
  },
  "m1-grass": {
    title: "AERIS Urban Glass",
    tag: "SUSTAINABILITY",
    tagline: "現実のまま、余計な画面を増やさないARグラス。",
    description:
      "スマホやディスプレイに視線を奪われず、目の前の現実にだけ必要な情報を重ねるARグラス。AERISが周囲のコンテキストとあなたの予定を読み取り、移動中や作業中に静かにサジェストします。音声は別途イヤホンを用意する必要はなく、フレーム内蔵の骨伝導スピーカーから、周囲にほとんど音漏れなく届きます。",
    stats: [
      {
        label: "DISPLAY",
        value: "45° FOV",
        caption: "両眼マイクロLEDによるシースルー投影"
      },
      {
        label: "WEIGHT",
        value: "36 g",
        caption: "一日かけても気になりにくい軽量フレーム"
      },
      {
        label: "RUNTIME",
        value: "19 h",
        caption: "日中フルに使えるバッテリーと急速充電"
      }
    ],
    features: [
      {
        label: "視界の端だけに出る\"Quiet Overlay\"",
        text: "ナビ、予定、ToDo、翻訳などを視界の隅だけに表示。視線を向けたときだけ情報が強調され、常に「現実が主役」のまま使えます。"
      },
      {
        label: "AERISと同期するコンテキスト情報",
        text: "カレンダーやメール、位置情報と連携し、「この駅で乗り換え」「この人とは前回こういう話をした」など、状況に合わせたメモをそっと表示。"
      },
      {
        label: "音漏れを抑えた骨伝導オーディオ",
        text: "独自の骨伝導技術で耳をふさがずに音声ガイドや通知を再生。骨伝導の課題だった音漏れの概念を無くし、周囲に内容が漏れない静かなリスニングを実現します。"
      }
    ],
    image: "images/m1.grass.png",
    alt: "AERIS Urban Glass"
  },
  "m1-horo": {
    title: "AERIS Holo Console",
    tag: "Interface",
    tagline: "空間全体をホログラムで拡張し、手ぶらで操るワークスペース。",
    description:
      "空間そのものをワークスペースに変えるホログラフィックコンソール。デスクの上だけでなく、部屋の壁や床にまでウィンドウやモデルを展開し、会議・制作・学習をジェスチャー操作だけで完結できます。",
    stats: [
      {
        label: "FOV",
        value: "170°",
        caption: "全身とワークスペースが収まる超広角ホログラム"
      },
      {
        label: "LATENCY",
        value: "12 ms",
        caption: "ジェスチャーと表示のズレを感じさせない低遅延レスポンス"
      },
      {
        label: "USERS",
        value: "4 Sync",
        caption: "最大4ユーザーが同じホロ空間をリアルタイム共有"
      }
    ],
    features: [
      {
        label: "フルボディジェスチャーで直感操作",
        text: "12台の深度カメラで指先から全身の動きまでトラッキング。クリックやドラッグ、拡大縮小も、空中ジェスチャーだけで完結します。"
      },
      {
        label: "AERISとつながるレイヤードUI",
        text: "AERISがメール・ドキュメント・アプリを整理し、必要な情報だけをホログラムのパネルとして呼び出し。タスクやタイムラインを空間上にレイヤー表示できます。"
      },
      {
        label: "離れた相手とも同じ場を共有",
        text: "マルチユーザー同期で、別の都市にいる同僚やクライアントとも同じホロボードを見ながら会議・レビュー・共同編集。身振りや位置もホログラム上に再現されます。"
      }
    ],
    image: "images/m1.horo.png",
    alt: "AERIS Holo Console"
  },
  "m1-key": {
    title: "AERIS Key Capsule",
    tag: "Security",
    tagline: "鍵・カード・トークンとデータ権限をひとつに集約するパーミッションハブ。",
    description:
      "住宅・車両・ワークスペースの鍵だけでなく、AERISが扱う重要データの保管庫。カプセル内に保存された認証情報やトークンはAERISだけがアクセス・更新でき、必要なときにだけ端末やサービスへ橋渡しします。専用クラウドと常時同期されているため、デバイスを紛失してもデータが失われることはありません。AERISが異常を自動検知してユーザーに報告し、必要に応じてカプセルのロックやメモリ内データの完全消去まで行うことができます。",
    stats: [
      { label: "Protocols", value: "NFC / UWB / BLE" },
      { label: "Battery", value: "1 year" },
      { label: "Ingress", value: "IP68" }
    ],
    features: [
      {
        label: "AERISと同期する権限ストレージ",
        text: "鍵やカード情報、ログイン用トークンをひとつのカプセルに集約。AERISからのみ読み書きが許可され、アプリやデバイスには必要なタイミングだけ安全に中継されます。"
      },
      {
        label: "AERISで生成したデータの受け渡しポート",
        text: "パスキーやワンタイムトークン、暗号鍵など、AERISに頼んで生成したデータを物理的に持ち出し可能。PCやスマートロック、車載システムにKey Capsuleを挿すだけで受け取りと認証が完了します。"
      },
      {
        label: "紛失時は自動キルスイッチ、発見時は再リンク可能",
        text: "紛失を検知するとAERISが自発的にクラウドとの同期を遮断し、カプセル内メモリを完全消去。復元は不可能になり、ただの物体へと化します。後から見つかった場合も、再ペアリング手順を踏めば、再び安全なキーとして利用できます。"
      }
    ],
    image: "images/m1.key.png",
    alt: "AERIS Key Capsule"
  },
  "m1-knob": {
    title: "AERIS Orbit Knob",
    tag: "CONTROL",
    tagline: "触れた瞬間に「誰か」を見分ける、AERIS連携ドアノブ。",
    description:
      "AERISと連携して施錠・解錠の状態を一元管理するスマートドアノブ。登録ユーザーがノブに手をかけた瞬間に手の形や握り方を認証し、遅延なくロックを解除します。非登録者が触れた場合は、その手情報と時刻を記録し、AERISを通じてすぐにユーザーへ通知します。",
    stats: [
      {
        label: "INPUTS",
        value: "Grip / Press",
        caption: "ノブへの接触と握り方を高精度センシング"
      },
      {
        label: "DISPLAY",
        value: "LED Ring",
        caption: "施錠状態やアラートを色とアニメーションで表示"
      },
      {
        label: "LATENCY",
        value: "8 ms",
        caption: "手をかけた瞬間に認証・解錠される体感ゼロレイテンシ"
      }
    ],
    features: [
      {
        label: "手認証で瞬時に解錠",
        text: "登録済みユーザーがノブに手をかけた瞬間、手の形・大きさ・握り方をもとに本人認証。ドアに触れた動きのままスムーズに開けられるよう、遅延を感じさせないロック解除を行います。"
      },
      {
        label: "非登録者の接触をAERISが記録・通知",
        text: "登録されていない手が触れた場合は、時刻や接触パターンをAERISが記録し、スマホやホームハブに即時通知。外出中でも不審なアクセスをリアルタイムで把握できます。"
      },
      {
        label: "施錠履歴とステータスをAERISが一元管理",
        text: "いつ・誰が・どのドアを開け閉めしたかをタイムラインで可視化。長時間開いたままの状態や夜間の解錠もAERISが検知し、必要に応じて自動施錠やユーザーへのリマインドを行います。"
      }
    ],
    image: "images/m1.knob.jpg",
    alt: "AERIS Orbit Knob"
  },
  "m1-lens": {
    title: "AERIS Lens HUD",
    tag: "Wearable",
    tagline: "視界に必要な情報だけを重ねる軽量ARレンズ。",
    description:
      "肉眼のままの視界に、必要な情報だけをそっと重ねるAERIS専用コンタクトレンズ。片目だけでもHUDとして使え、両目に装着すればより多くの情報を自然な奥行き感とともに表示できます。レンズ単体では音声を出さない設計のため、音を出せない環境でも視覚情報だけで状況を把握できますが、必要に応じてイヤホンなどのデバイスと併用して音声ガイドも利用できます。",
    stats: [
      {
        label: "Weight",
        value: "38g",
        caption: "装着していることを忘れる超軽量設計"
      },
      {
        label: "Battery",
        value: "28h",
        caption: "終日装着を想定したロングバッテリー"
      },
      {
        label: "Resolution",
        value: "2.5K / eye",
        caption: "文字情報もくっきり読める片眼2.5K相当の解像度"
      }
    ],
    features: [
      {
        label: "虹彩認証でパーソナルデータを安全に展開",
        text: "装着時に虹彩認証を行い、本人だけが情報を閲覧可能。通知やメモ、ヘルスデータは暗号化され、視界上にも「その人専用」のレイヤーとして表示されます。"
      },
      {
        label: "視線トラッキングとまばたきジェスチャでハンズフリー操作",
        text: "視線の位置と動きを高精度トラッキングし、「見る」「二度まばたきする」といった自然な動作だけで選択・スクロール・決定が可能。手をふさがずに操作できます。"
      },
      {
        label: "低遅延Wi-Fi 7でAERISと複数デバイスをリアルタイム同期",
        text: "スマートフォンやPC、LUXEデバイスと同時接続し、予定・ナビ・アラートを即時に共有。レンズ単体では音声出力を持たないため、周囲に音を漏らさずHUDとして通知を受け取れます。"
      }
    ],
    image: "images/m1.lens.png",
    alt: "AERIS Lens HUD"
  },
  "m1-neck": {
    title: "AERIS Neck Wave",
    tag: "AUDIO",
    tagline: "耳を塞がず、首から“自分だけ”に音が届くネックレス型イヤホン。",
    description:
      "首にかけて使うネックレス型イヤホン。<br>AERISがあなたの場所や状況を理解し、通知・読み上げ・BGMを首元からあなたの耳だけに届けます。<br>首から音を届ける独自の音響技術によって、ネックレスとして身に着けているだけで音が聞こえる不思議な体験を実現。外には音が一切聞こえず、周囲の人には再生していることさえ気づかれません。<br>マイクも内蔵しているため、AERISとの会話や通話もそのまま行えます。",
    stats: [
      {
        label: "PLAYBACK",
        value: "20h",
        caption: "一日中つけっぱなしでも安心の再生時間"
      },
      {
        label: "DRIVERS",
        value: "Dual 30mm",
        caption: "首元で定位する指向性ドライバー構成"
      },
      {
        label: "MODES",
        value: "Focus / Ambient",
        caption: "集中モードと環境モードをワンタップ切り替え"
      }
    ],
    features: [
      {
        label: "耳を塞がず、周囲には聞こえないピンポイント再生",
        text: "首から鼓膜までの経路だけに音を届ける独自の音響設計により、ネックレスとして付けているだけで自分にははっきり聞こえ、周囲には一切聞こえません。静かな場所でも、外出先でも、あなただけの音をこっそり再生できます。"
      },
      {
        label: "終日装着を前提にした快適フィット",
        text: "首や肩の動きに合わせて軽く追従するフレキシブルバンドと、長時間でも負担になりにくい重量バランス設計。歩行・デスク作業・家事など、日常の動きの中でも邪魔になりません。"
      },
      {
        label: "通知・読み上げ・翻訳をAERISが状況に合わせてミックス",
        text: "AERISが予定や位置情報をもとに、重要度の高い通知だけを首元で読み上げ。必要に応じてメールの要約やリアルタイム翻訳も追加し、その場にふさわしい情報だけを静かに届けます。"
      }
    ],
    image: "images/m1.neck.png",
    alt: "AERIS Neck Wave"
  },
  "m1-pen": {
    title: "AERIS Sync Pen",
    tag: "Creation",
    tagline: "紙もタブレットもホログラムも、同じ一筆でつながるスマートペン。",
    description:
      "普通のペンのように紙へも、スタイラスとしてタブレットへも、さらには空間に浮かぶホログラムにもそのまま書き込めるAERIS連携ペン。どこに書いた線やメモもすべてAERISクラウドに自動保存され、あとからデバイスを問わず同じノートとして確認・検索できます。",
    stats: [
      {
        label: "PRESSURE",
        value: "1024 lvl",
        caption: "筆圧1024段階で紙とデジタルの書き心地を忠実に再現"
      },
      {
        label: "LATENCY",
        value: "6ms",
        caption: "ペン先の動きと描画のズレを感じさせない低遅延"
      },
      {
        label: "STORAGE",
        value: "24h Offline",
        caption: "ネット接続がなくても1日分の筆記データを端末内に保存"
      }
    ],
    features: [
      {
        label: "紙・タブレット・ホログラムをまたいで同じノートに記録",
        text: "専用ペン先とトラッキングにより、紙のノート／タブレット画面／ホログラムキャンバスのどこに書いても、AERISクラウド上ではひとつのノートとして統合。後からタイムラインやページごとに振り返ることができます。"
      },
      {
        label: "筆圧1024段階と自動キャリブレーション",
        text: "1024段階の筆圧センサーが線の強弱やニュアンスをそのまま記録。ペン先の摩耗や書く面の違いはAERISが自動で補正し、いつでも安定した書き心地を保ちます。"
      },
      {
        label: "オフラインでも安全に保存、オンラインで即同期",
        text: "通信がない環境ではペン本体のストレージに24時間分のメモを暗号化して保持し、ネットに戻ったタイミングでAERISクラウドへ自動アップロード。書いた瞬間から失われず、どこからでも同じ内容にアクセスできます。"
      }
    ],
    image: "images/m1.pen.png",
    alt: "AERIS Sync Pen"
  },
  "m1-pods": {
    title: "AERIS Pods",
    tag: "AUDIO",
    tagline: "身体と状況を読み取り、“今の自分にちょうどいい音”だけを届ける完全ワイヤレス。",
    description:
      "通勤・作業・移動・休憩まで、一日中つけっぱなしを想定したAERIS連携の完全ワイヤレスイヤホン。耳の中のセンサーで心拍や体温、呼吸リズムをとらえ、AERISが集中度や疲労度を推定します。ノイズキャンセリングの強さや通知の量、流すコンテンツをその場その場で自動調整し、「今は深く集中したい」「今は安全優先で周りを把握したい」といった状態に合わせて音の世界を切り替えます。",
    stats: [
      {
        label: "PLAYBACK",
        value: "8h + Case",
        caption: "本体8時間＋ケース併用で一日分のバッテリー"
      },
      {
        label: "DRIVERS",
        value: "11mm",
        caption: "空間オーディオにも対応する大口径ドライバー"
      },
      {
        label: "ANC",
        value: "Hybrid",
        caption: "ハイブリッドANCと状況認識フィルターの組み合わせ"
      }
    ],
    features: [
      {
        label: "バイタル感知で音と通知を自動チューニング",
        text: "耳の中のセンサーが心拍・体温・呼吸リズムを計測し、AERISが集中度やストレス状態を推定。集中しているときは通知を控えめにし、疲れているときは静かなサウンドや休憩を提案するなど、その時のあなたに合った音環境へ自動調整します。"
      },
      {
        label: "危険や呼びかけだけを通すアラートフィルター",
        text: "空間マイクが周囲の音をリアルタイム解析し、クラクション・サイレン・自分の名前の呼びかけ・背後からの接近音など、危険や重要な音だけを選んでノイズキャンセリングを突破。音楽に没入していても、安全に関わるサインだけは聞き逃さないようにします。"
      },
      {
        label: "“瞬間ブックマーク”で会話や出来事をAERISが要約",
        text: "イヤホンをダブルタップすると、その瞬間をマーク。AERISが直前の会話や状況をもとに、「今の会議の決定事項」「さっき聞いたアイデア」などをテキストメモにまとめてクラウドへ保存します。あとからPodsのタイムラインを辿るだけで、一日の重要な場面を簡単に思い出せます。"
      }
    ],
    image: "images/m1.pods.png",
    alt: "AERIS Pods"
  },
  "m1-ring": {
    title: "AERIS Loop Ring",
    tag: "GESTURE",
    tagline: "指先のジェスチャーとバイタルで、AERISの操作＆認証を行うスマートリング。",
    description:
      "指にはめるだけで、AERISコネクションシステム全体のリモコンとIDトークンになるスマートリング。ARグラスやARコンタクト、ホログラムUIを指先のジェスチャーで操作しながら、血圧・心拍・体温・血中酸素・睡眠を24時間トラッキングします。少しでも健康に問題が生じそうな兆候があればAIから通知し、緊急時には自動通報まで実行。膨大な医療データに基づいて傾向から病気のリスクを推定し、必要に応じてAERISが受診を勧めてくれます。",
    stats: [
      {
        label: "SENSORS",
        value: "BP / HR / Temp / SpO₂",
        caption: "血圧・心拍・体温・血中酸素を常時モニタリング"
      },
      {
        label: "BATTERY",
        value: "1 week",
        caption: "フルトラッキングでも最大1週間連続駆動"
      },
      {
        label: "WATERPROOF",
        value: "Full Waterproof",
        caption: "完全防水設計で入浴や水泳中も外さず使用可能"
      }
    ],
    features: [
      {
        label: "ジェスチャーでAERISデバイスを一括コントロール＆認証",
        text: "指先のスワイプ・タップ・回転などの動きを検知し、ARグラス・ARコンタクト・ホログラムコンソールの操作を指一本で実現。対応するドアや端末、決済でもリングがIDトークンとして機能し、手をかざすだけで安全に認証できます。"
      },
      {
        label: "血圧を含むフルバイタルを24時間監視し、異常時は即アラート＆自動通報",
        text: "血圧・心拍・体温・血中酸素・睡眠リズムを常時トラッキングし、少しでも異常値や急激な変化があればAERISが即座に通知。危険と判断された場合は、事前設定に応じて緊急連絡先や救急サービスへ自動通報します。"
      },
      {
        label: "膨大な医療データに基づく予兆検知と受診リコメンド",
        text: "日々のバイタル推移を医療データベースと照合し、生活習慣病や体調悪化の兆候を早期に推定。リスクが高まりつつあると判断した際には、AERISが受診や検査のタイミング、相談先の候補まで提案してくれます。"
      }
    ],
    image: "images/m1.ring.png",
    alt: "AERIS Loop Ring"
  },
  "m1-speaker": {
    title: "AERIS Halo Speaker",
    tag: "AMBIENT",
    tagline: "音・光・ホログラムで、部屋そのものを一瞬で着せ替えるホームハブ。",
    description:
      "部屋のだいたい中央に置くだけで、空間全体をキャンバスに変えるAERISハブスピーカー。360°プロジェクションで壁や天井にホログラムを展開し、波紋や星空、都市の夜景からミニマルなインターフェースまで、気分に合わせて「部屋の模様」を丸ごと着せ替えられます。サウンドとイルミネーションもシーンと同期し、その日のムードやAERIS personaの提案に応じて、家の空気を一瞬で切り替えます。",
    stats: [
      {
        label: "DRIVERS",
        value: "8ch 360°",
        caption: "8ch 360°サウンドでホログラム空間と一体化したサラウンドを形成"
      },
      {
        label: "LIGHT",
        value: "16M Colors",
        caption: "1600万色のリングライトとウォールライティングをシーンに合わせて制御"
      },
      {
        label: "SYNC",
        value: "Whole-home",
        caption: "家中のAERISデバイスとホログラムシーンをマルチルーム同期"
      }
    ],
    features: [
      {
        label: "Room Skins：部屋ごと着せ替える360°ホログラム",
        text: "天井・壁・家具の位置をスキャンし、歪みを補正した360°ホログラムを投影。水面の揺らぎや森の木漏れ日、星空、SFライクなHUDなど、ライブラリから選んだ「スキン」で部屋全体の表情を一瞬で変えられます。"
      },
      {
        label: "シーンと連動して音・光・ホログラムを一括オート演出",
        text: "時刻や予定、天気、在宅状況をAERISが判断し、「集中」「リラックス」「ホームシアター」「スリープ」などのシーンを自動切り替え。BGM・音量・ホログラム・照明がまとめて最適なバランスに調整され、その瞬間に合った空気感を自動で作ります。"
      },
      {
        label: "お気に入りの空気を“シーン”として保存＆再現",
        text: "そのときの音・光・ホログラムの組み合わせをワンタップでスナップショット保存し、「雨の日の読書」「試験前集中」などの名前を付けて呼び出し可能。AERIS Lens HUD や Holo Console とも同期し、どの部屋でも同じシーンの空気を再現できます。"
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
