// CommonJSを使ったエクスポート

// module.exportsとexportsの参照先のオブジェクトを一致させる
// module.exportsとexportsに同じオブジェクトを設定する
module.exports = exports = {
  // exportedFunctionをオブジェクトに追加
  exportedFunction: function () {},
};

// exportsに新しいプロパティを追加
exports.exportedVariable = "これはエクスポートされます。";

// module.exportsの内容をコンソールに出力
console.log(module.exports);
// > { exportedFunction: function () {}, exportedVariable: "これはエクスポートされます。" }

// NOTE:exportsは、あくまでmodule.exportsを省略した形で記述できるようにしたもの
// 最終的にmodule.exportsが参照している先のオブジェクトがエクスポート対象のモジュール（モジュール外から使用可能な変数や関数が格納されているオブジェクト）となる。
