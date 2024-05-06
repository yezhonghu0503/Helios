import * as vscode from "vscode";

class DependenciesProvider implements vscode.WebviewViewProvider {
  context: vscode.ExtensionContext;
  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  // 实现 resolveWebviewView 方法，用于处理 WebviewView 的创建和设置
  resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext<unknown>,
    token: vscode.CancellationToken
  ): void | Thenable<void> {
    // 配置 WebviewView 的选项
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.context.extensionUri],
    };
    webviewView.webview.postMessage(
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    );
    // 获取插件根目录路径
    const extensionUri = this.context.extensionUri;

    // 构建本地JS文件的URI
    const jsUri = vscode.Uri.joinPath(
      extensionUri,
      "src",
      "assets",
      "index-DCHRS9XL.js"
    );
    const cssUri = vscode.Uri.joinPath(
      extensionUri,
      "src",
      "assets",
      "index-ZFf90ag7.css"
    );
    // 设置 WebviewView 的 HTML 内容，可以在这里指定要加载的网页内容
    webviewView.webview.html = `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" crossorigin src="${webviewView.webview.asWebviewUri(
      jsUri
    )}"></script>
    <link rel="stylesheet" crossorigin href="${webviewView.webview.asWebviewUri(
      cssUri
    )}">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
    `;
  }
}

export function activate(context: vscode.ExtensionContext) {
  // vscode.window.registerTreeDataProvider("epubTree", new EpubTreeProvider());
  const editor = vscode.window.registerWebviewViewProvider(
    "editor",
    new DependenciesProvider(context)
  );
  // editor.webview
  let disposable = vscode.window.onDidChangeTextEditorSelection((event) => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const position = editor.selection.active;
      const classMatch = getClassFromPosition(editor.document, position);
      if (classMatch) {
        vscode.window.showInformationMessage(`Style string: ${classMatch}`);
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
  const classRegExp = /class\b|className/g;
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
