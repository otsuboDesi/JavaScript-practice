// Windowオブジェクトはない
// そのため、Windowオブジェクトにアクセスしようとしたらエラーが発生する。
// Node.jsのグローバルオブジェクトには"global"という識別子で定義されている
// globalにsetTimeout等が入っている

// console.log( window );
// エラーが発生します！
// その代わりGlobalオブジェクトが使用できる
console.log(global);

// {
//     global: [Circular *1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//         [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//         [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//     }
// }

// グローバルオブジェクトは記述を省略できる

global.setTimeout(() => {
  console.log("hello");
}, 1000);
