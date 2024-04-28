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
      "index-C2hl2N81.js"
    );
    const cssUri = vscode.Uri.joinPath(
      extensionUri,
      "src",
      "assets",
      "index-Dw3BKVY7.css"
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
      const document = editor.document;
      const hoveredCharacter = document.getText(
        new vscode.Range(position, position.translate(0, 1))
      );
      console.log(`Hovered character: ${hoveredCharacter}`);
    }
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
