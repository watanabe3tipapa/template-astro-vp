# template-astro-vp

概要

このリポジトリは Astro と Vue を組み合わせたテンプレートです（現状: テスト中）。リポジトリに含まれる package.json ではプロジェクト名が `my-hybrid-docs` として設定されており、Astro と Vue を使ったサイト／ドキュメント向けの構成が確認できます。プロジェクトの公開ページ（ホームページ）は以下です。

https://watanabe3tipapa.github.io/template-astro-vp/

主な内容 / 技術スタック

- Astro（@ 4.x 系）
- Vue 3（@ 3.5.x 系）
- @astrojs/vue 統合

- TypeScript（開発依存）

package.json に定義されている npm スクリプト（確認済み）:

- npm run dev — 開発サーバ起動（astro dev）
- npm run build — ビルド（astro build）
- npm run preview — ビルド後のプレビュー（astro preview）

開始方法（リポジトリに明示されている事実のみ）

1. 依存パッケージをインストールします。

   npm install

2. 開発サーバを起動します。

   npm run dev

3. ビルドとプレビュー

   npm run build
   npm run preview

注意: Node.js やパッケージマネージャーの具体的なバージョン要件はリポジトリ内で明示されていません。

プロジェクト構成（ルートに存在する主なファイル・ディレクトリ）

- .github
- .gitignore
- DEV-MEMO.md
- astro.config.mjs
- package-lock.json
- package.json
- public/
- src/
- tsconfig.json

それぞれの内容の詳細は該当ファイルを参照してください。開発メモは DEV-MEMO.md にあります。

開発・保守状態

- リポジトリ説明には「テスト中」と記載されています。現在のステータスはテスト中（開発・試験段階）です。
- デフォルトブランチ: main
- 最終更新日時（リポジトリ情報）: 2026-08-09

ライセンス

- リポジトリ内にライセンスの明示は確認できませんでした。ライセンス情報が必要な場合はリポジトリ所有者に確認してください。

参考リンク

- ホームページ: https://watanabe3tipapa.github.io/template-astro-vp/
