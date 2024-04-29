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
    // 获取插件根目录路径
    const extensionUri = this.context.extensionUri;

    // 构建本地JS文件的URI
    const jsUri = vscode.Uri.joinPath(
      extensionUri,
      "src",
      "assets",
      "index-BOwuxVBA.js"
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
    //     webviewView.webview.html = `
    //     <!doctype html>
    // <html lang="en">
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Vite + React + TS</title>
    //     <script type="module" crossorigin src="${webviewView.webview.asWebviewUri(
    //       jsUri
    //     )}"></script>
    //     <link rel="stylesheet" crossorigin href="${webviewView.webview.asWebviewUri(
    //       cssUri
    //     )}">
    //   </head>
    //   <body>
    //     <div id="root"></div>
    //   </body>
    // </html>
    //     `;
  }
}

export function activate(context: vscode.ExtensionContext) {
  // vscode.window.registerTreeDataProvider("epubTree", new EpubTreeProvider());
  vscode.window.registerWebviewViewProvider(
    "editor",
    new DependenciesProvider(context)
  );
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
  const lineText = document.lineAt(position.line).text;
  const classMatch = getClassFromLine(lineText, position.character);
  if (classMatch) {
    return classMatch;
  }

  // 从当前行向上搜索
  // for (let i = position.line - 1; i >= 0; i--) {
  //   const line = document.lineAt(i);
  //   const classMatchUp = getClassFromLine(line.text, line.text.length);
  //   if (classMatchUp) {
  //     return classMatchUp;
  //   }
  // }

  // 从当前行向下搜索
  for (let i = position.line + 1; i < document.lineCount; i++) {
    const line = document.lineAt(i);
    console.log(line);
    const classMatchDown = getClassFromLine(line.text, 0);
    if (classMatchDown) {
      return classMatchDown;
    }
  }

  return null;
}

function getClassFromLine(
  lineText: string,
  cursorPosition: number
): string | null {
  // 从光标位置开始向右搜索，直到找到class属性
  let classIndex = lineText.indexOf('class="', cursorPosition);
  if (classIndex !== -1) {
    // 找到class属性后，继续向右搜索，直到找到样式字符串的起始位置
    const startQuoteIndex = lineText.indexOf('"', classIndex + 7);
    const endQuoteIndex = lineText.indexOf('"', startQuoteIndex + 1);
    if (startQuoteIndex !== -1 && endQuoteIndex !== -1) {
      const styleString = lineText.substring(
        startQuoteIndex + 1,
        endQuoteIndex
      );
      return styleString;
    }
  }
  return null;
}
// This method is called when your extension is deactivated
export function deactivate() {}
