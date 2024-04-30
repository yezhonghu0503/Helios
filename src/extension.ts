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
  // 从当前行向上搜索
  // for (let i = position.line - 1; i >= 0; i--) {
  //   const line = document.lineAt(i);
  //   const classMatchUp = getClassFromLine(line.text, line.text.length);
  //   if (classMatchUp) {
  //     return classMatchUp;
  //   }
  // }

  // 从当前行向下搜索
  const classRegExp = /class\b|className/g;
  let i = position.line;
  const currentLineText = document.lineAt(i).text;
  if (!classRegExp.test(currentLineText)) {
    return null;
  }
  let classIndex = currentLineText.indexOf('class="');
  // TODO 需要整理一下逻辑：大概思路是以当前行的class="索引开始，搜索每一行是否有结束class的"/字符
  // TODO 同时把符合的字符放到res（临时命名）中去，构建完整的样式字符串
  let res = currentLineText.slice(
    classIndex + 7,
    !~currentLineText.slice(classIndex + 7).indexOf('"')
      ? currentLineText.length
      : currentLineText.slice(classIndex + 7).indexOf('"') + classIndex + 7
  );
  // while (res[res.length - 1] !== '"') {
  //   console.log(res);

  //   res = getClassFromLine(document.lineAt(i + 1).text, res);
  // }
  console.log(currentLineText);
  return null;
}

function getClassFromLine(lineText: string, rawString: string): string {
  return `${rawString} ${lineText.slice(
    0,
    !~lineText.indexOf('"') ? lineText.length : lineText.indexOf("")
  )}`;
}
// This method is called when your extension is deactivated
export function deactivate() {}
