# L.U.X.E. – Original Brand Site

学校での制作課題（オリジナルブランドサイト制作）として作成した Web サイトです。  
近未来の AI プラットフォームブランド「L.U.X.E.」を想定し、  
**ストーリー性のある 1 ページ構成**と**静かなインタラクション**を意識してデザイン・実装しました。

---

## 🌐 公開URL

- GitHub Pages: https://shin-s-u.github.io/original_brand/

---

## 🖥 サイト概要

本サイトは、日本語版 / 英語版を持つ **1ページ構成のブランドサイト（LP）** です。  
ブランドコンセプト、AERIS（OUR AI）、プラットフォーム、デバイス、ビジョン、セキュリティ、問い合わせまでを  
縦スクロールで一連のストーリーとして閲覧できるように構成しています。

主なポイント:

- ヒーローセクションからフッターまでの一貫した情報設計
- JA / EN の言語切り替えに対応（`index.html` / `index-en.html`）
- デバイスカード選択で下部のプレビュー・詳細が切り替わる UI

---

## ✨ 特徴

- **JA / EN 言語切り替え構成**  
  - `index.html`：日本語版  
  - `index-en.html`：英語版
- **デバイスギャラリー & プレビュー**  
  - `Devices` セクションでカードを選択すると、下部コンソールの内容が切り替わるインタラクション
- **ミニマル & 近未来的な UI**  
  - 余白・タイポグラフィを重視したレイアウト
- **レスポンシブ対応**  
  - PC / タブレット / スマートフォンでの閲覧を想定したスタイル調整

---

## 🧩 使用技術

- **HTML Living Standard**
- **CSS3**
  - Flexbox
  - Animation / Transition
  - Media Queries（レスポンシブデザイン）
- **JavaScript (ES6)**
  - ナビゲーションやセクション切り替えなどの DOM 操作
  - Devices セクションのプレビュー切り替え処理

---

## 📁 ディレクトリ構成

```bash
.
├─ index.html          # 日本語版トップページ
├─ index-en.html       # 英語版トップページ
├─ css/
│  ├─ reset.css        # リセットCSS
│  ├─ style.css        # 全体の共通スタイル
│  └─ about.css        # 一部セクション用の追加スタイル
├─ js/
│  ├─ main.js          # ナビ・スクロール処理など共通スクリプト
│  ├─ product.js       # Devices (JA) 用スクリプト
│  └─ product-en.js    # Devices (EN) 用スクリプト
├─ images/             # 本番で使用している画像
├─ fonts/              # Webフォント
├─ concept.images/     # コンセプト段階で作成した未使用画像
└─ README.md