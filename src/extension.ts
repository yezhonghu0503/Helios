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

    // 设置 WebviewView 的 HTML 内容，可以在这里指定要加载的网页内容
    webviewView.webview.html = ``;
  }
}

export function activate(context: vscode.ExtensionContext) {
  // vscode.window.registerTreeDataProvider("epubTree", new EpubTreeProvider());
  vscode.window.registerWebviewViewProvider(
    "editor",
    new DependenciesProvider(context)
  );

  let disposable = vscode.commands.registerCommand("helios.edit", () => {});

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
