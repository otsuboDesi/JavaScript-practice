// expressモジュールをインポート
import express from "express";

// expressアプリケーションのインスタンスを作成
const app = express();
const port = 3000;

// テンプレートエンジンの指定
// EJSテンプレートエンジンを使用する設定
app.set("view engine", "ejs");

// 公開用フォルダをpublicとして追加
// 静的ファイルを提供するためにpublicフォルダを設定
app.use(express.static("public"));

// ルートURL（"/"）へのGETリクエストを処理
app.get("/", (req, res) => {
  // countdownパラメータの値を取得
  const countdown = req.query.countdown;

  if (countdown) {
    // テンプレートの読み込み
    // countdownパラメータをテンプレートに渡してindex.ejsをレンダリング
    res.render("index.ejs", { countdown: countdown });
  } else {
    // countdownパラメータがない場合のエラーメッセージ
    res.send("countdownパラメータを設定してください。");
  }
});

// アプリケーションが指定したポートでリクエストをリッスン
app.listen(port, () => {
  // サーバが起動したときにコンソールに出力するメッセージ
  console.log(`listening at http://localhost:${port}?countdown=5`);
});
