import * as vscode from "vscode";
export function getClassFromPosition(
  document: vscode.TextDocument,
  position: vscode.Position
): string | null {
  // 从当前行向下搜索
  const classRegExp = /class\b|className|style/g;
  let currentLine = position.line;
  const currentLineText = document.lineAt(currentLine).text;
  if (!classRegExp.test(currentLineText)) {
    return null;
  }
  console.log(currentLine);
  let styleString = currentLineText.slice(currentLineText.indexOf('"') + 1);
  styleString = ~styleString.indexOf('"')
    ? styleString.slice(0, styleString.indexOf('"'))
    : `${styleString} ${getClassFromLine(
        document,
        currentLine + 1,
        ""
      ).trim()}`;
  return styleString;
}

export function getClassFromLine(
  document: vscode.TextDocument,
  lineNumber: number,
  rawString: string
): string {
  let lineText = document.lineAt(lineNumber).text;
  if (~lineText.indexOf('"')) {
    return `${rawString} ${lineText.slice(0, lineText.indexOf('"')).trim()}`;
  }
  rawString += `${lineText.slice(0, lineText.length).trim()}`;
  return getClassFromLine(document, lineNumber + 1, rawString);
}
