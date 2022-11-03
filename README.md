# ポケモン　バトルスタジアム

ブートキャンプ３　 Pair Project

# 概要

自分の好きなポケモンを選んで交互に技を繰り出そう！

プレー人数　：2 人

勝利条件　　：相手ポケモンの HP を先に 0 にした方が勝ち

# 目的

以下の実装練習を目的に置き、誰でも楽しめるゲームの開発を目標とした。

- リンターとフォーマッターの設定
- テストの実装
- コミットメッセージの練習
- README の作成
- 外部 API の使用(Pokemon API)
- ソースコードのデプロイ

# 使用(作成)環境

- MacOS
- package.json
- "mocha": "^8.2.1"
- "chai": "^4.2.0"
- "dependencies":{ "node-fetch": "^1.7.3"}

# 遊び方

1. **プルダウンより好きなポケモンを選び、「選択」ボタンをクリック**
2. **お互いにポケモンを選択したらバトル開始です（BGM が流れます）**
   - BGM が不要な場合は左上の「BGM ON/OFF」ボタンをクリックすることで変更可能です
3. **「あなたのターンです」と表示のあるプレーヤー側にて技を選択すると相手の HP が減少します。**
   - 与えるダメージはランダム数のため同じダメージ数を与えられる訳ではありません。
   - 技の発動時に効果音が鳴ります。
   - 技の発動後、ターンが交代します。（表示が「相手のターンです」に変更される）
4. **(3)を交互に繰り返します。**
5. **どちらかの HP が 0 となった場合ゲーム終了です。**
   - HP が 0 となった場合、HP 表示が「倒された！」に変更します。
   - 「あなたの勝ちです！」（「あなたの負けです！」）と表示されます。

# 最後に

README を閲覧いただき誠にありがとうございます。

本ゲームは以下よりご利用可能です。

お時間ございましたら是非、遊んでみてください。
