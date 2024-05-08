import * as vscode from "vscode";
import parse from "style-to-object";
import tailwindToObject from "tailwind-to-object";
import DependenciesProvider from "./DependenciesProvider";
import { getClassFromPosition } from "./tools/handleTools";

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

// This method is called when your extension is deactivated
export function deactivate() {}
