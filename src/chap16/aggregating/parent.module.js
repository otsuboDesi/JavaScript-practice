// sub.module.jsの機能をparent.module.jsというファイルにモジュール集約する

// デフォルトエクスポートを含むすべての機能をエクスポート
export * from "./sub.module.js";

// デフォルトエクスポートを含むすべての機能をsubObjectオブジェクトのプロパティとしてエクスポート
export * as subObject from "./sub.module.js";

// 特定の機能だけエクスポート
export { subVariable, subFunction, SubClass } from "./sub.module.js";

// 別名を付けてエクスポート
export {
  subVariable as exportedVariable,
  subFunction as exportedFunction,
  SubClass as ExportedClass,
} from "./sub.module.js";

// デフォルトエクスポートを再エクスポート
export { default } from "./sub.module.js";
