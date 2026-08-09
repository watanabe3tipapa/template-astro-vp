---
title: "Getting Started"
layout: ../../layouts/DocLayout.astro
---

# Getting Started

このドキュメントは **Astro + VitePress** ハイブリッドのサンプルです。

## Vue Component Example

<VueComponentExample client:idle />

## Installation

```bash
npm install
npm run dev
```

## Project Structure

```
my-hybrid-docs/
├── src/
│   ├── components/      # Vue コンポーネント
│   ├── layouts/         # Astro レイアウト
│   ├── pages/           # Markdown ページ
│   └── styles/          # グローバル CSS
├── public/              # 静的アセット
├── astro.config.mjs
├── tsconfig.json
└── package.json
```
