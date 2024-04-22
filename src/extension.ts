// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("helios.edit", () => {
    // 创建一个 WebviewPanel 实例并放置在边栏中
    const panel = vscode.window.createWebviewPanel(
      "customSidebar",
      "Custom Sidebar",
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
      }
    );

    // TODO 如何结合React构建页面
    const htmlPath = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
</head>

<body>
    <div>123</div>
</body>

</html>
`;
    panel.webview.html = htmlPath;

    // 处理面板关闭事件
    panel.onDidDispose(() => {
      // 在此处清理资源（如果需要）
    });
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
