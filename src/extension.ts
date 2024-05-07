import * as vscode from "vscode";
import parse from "style-to-object";
import tailwindToObject from "tailwind-to-object";
import DependenciesProvider from "./DependenciesProvider";

export function activate(context: vscode.ExtensionContext) {
  // vscode.window.registerTreeDataProvider("epubTree", new EpubTreeProvider());
  const editorProvider = new DependenciesProvider(context);
  vscode.window.registerWebviewViewProvider("editor", editorProvider);
  // editor.webview
  let disposable = vscode.window.onDidChangeTextEditorSelection((event) => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const position = editor.selection.active;
      const classMatch = getClassFromPosition(editor.document, position);
      if (classMatch) {
        // 发送样式数据到webview
        let styleObj: any = {};

        if (~classMatch.indexOf(":")) {
          styleObj = parse(classMatch);
        } else {
          styleObj = tailwindToObject(classMatch);
        }
        console.log(styleObj);
        editorProvider.webviewView?.webview.postMessage(classMatch);
      }
    }
  });

  context.subscriptions.push(disposable);
}

function getClassFromPosition(
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

function getClassFromLine(
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
// This method is called when your extension is deactivated
export function deactivate() {}
