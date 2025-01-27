# タイピングゲーム

このプロジェクトは、無造作な単語の組み合わせを使用したタイピングゲームです。プレイヤーは表示された単語をできるだけ早く正確に入力することを目指します。

## 構成

- `src/app.ts`: アプリケーションのエントリーポイント。ゲームの初期化とメインループを管理します。
- `src/components/Game.ts`: ゲームの状態を管理する`Game`クラスを含みます。
- `src/utils/wordGenerator.ts`: 無造作な単語の組み合わせを生成するユーティリティ関数を提供します。
- `src/types/index.ts`: ゲームで使用される型やインターフェースを定義します。
- `tsconfig.json`: TypeScriptの設定ファイル。
- `package.json`: npmの設定ファイル。

## インストール

1. リポジトリをクローンします。
   ```
   git clone <リポジトリのURL>
   ```
2. プロジェクトディレクトリに移動します。
   ```
   cd typing-game
   ```
3. 依存関係をインストールします。
   ```
   npm install
   ```

## 実行方法

ゲームを実行するには、以下のコマンドを使用します。
```
npm start
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。