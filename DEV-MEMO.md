# DEV-MEMO

## Phase 0: PLAN レビュー

### 気になる点・確認事項

#### 1. `vite.config.ts` は必要か？
- PLAN のディレクトリ構成に含まれるが、`astro.config.mjs` の `vite` ブロックで代替可能。
- 当面は削除し、後で markdown-it プラグインなどが必要になったら `astro.config.mjs` に追記する方針。
- → **結論: 削除。必要性が出たら後から追加する。**

#### 2. SideBar のナビデータ管理方式
選択肢:
- (a) Astro の frontmatter / `Astro.props` で各ページから渡す（動的）
- (b) 専用の `nav.json` を `public/` に配置し Vue 側で fetch（執筆者に優しい）
- (c) `SideBar.vue` 内にハードコード（簡単だが拡張性低）
- → **結論: 試作段階は (c) で最小構成。レイアウト安定後に Astro.props 経由の (a) に移行。**

#### 3. VitePress テーマの再現範囲
- Layout + NavBar のみ（最小）
- または SideBar + TOC + Footer まで含めるか？
- → **結論: まず Layout + NavBar + SideBar（簡易版）で PoC。安定したら Footer / TOC を追加。**

#### 4. NavBar.vue の実装方針
- ロゴ / リンク配列を props で受け取る汎用コンポーネントにする。
- → **後で Astro.props から注入できるようにするため。**

#### 5. 動作確認後の拡張予定
- 多言語対応（`src/pages/ja/`, `src/pages/en/`）
- markdown-it プラグイン追加
- カスタムテーマカラー
