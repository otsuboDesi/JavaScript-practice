// parent/module.jからこのファイルの中身を推測

// 変数のエクスポート
export const subVariable = "subVariable";

// 関数のエクスポート
export function subFunction() {
  console.log("subFunction");
}

// クラスのエクスポート
export class SubClass {
  constructor() {
    console.log("SubClass");
  }
}

// デフォルトエクスポート
const defaultExport = {
  subVariable,
  subFunction,
  SubClass,
};

export default defaultExport;
