// packageのインポート
// NOTE: npmでインストールしたパッケージはパッケージ名だけでインポートができる
import express from "express";

const app = express();
// ポートを3000番に設定
const port = 3000;

app.get("/", (req, res) => {
  // "Hello World!"をレスポンスとして返却
  res.send("Hello World!");
});
// NOTE: rewはリクエストに関する値やメソッドが格納されたオブジェクト
// NOTE: resはレスポンスに関する値やメソッドを保持するオブジェクト

// サーバーを起動
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`); // サーバー起動後に実行される
});

// ここまで書いた後、terminalで `node index.js`を実行(cdを使いこのフォルダの階層にしておくこと)
// 起動したサーバーを停止したいときは [Ctrl] + [C]

// NOTE: サーバーの実装を変更したときには、サーバーを再起動する必要がある。
// nodemonというパッケージを使用すれば、コード更新時に自動的にサーバーを再起動することもできる
