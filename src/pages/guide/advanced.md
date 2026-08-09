---
title: "Advanced Usage"
layout: ../../layouts/DocLayout.astro
---

# Advanced Usage

テンプレートのカスタマイズ方法について説明します。

## Customizing Theme Colors

`src/styles/global.css` で CSS 変数を上書きします。

## Adding Sidebar Items

frontmatter の `sidebarItems` を編集するか、`Layout.vue` の props を拡張します。

## Markdown Plugins

`astro.config.mjs` の `vite` ブロックで markdown-it プラグインを追加できます。

```js
// astro.config.mjs
export default defineConfig({
  vite: {
    plugins: [markdownItAnchor]
  }
})
```

## Adding New Pages

1. `src/pages/` に `.md` ファイルを作成
2. frontmatter に `layout` と `sidebarItems` を設定
3. 開発サーバーが自動でルーティング
