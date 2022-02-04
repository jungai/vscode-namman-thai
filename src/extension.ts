import * as vscode from "vscode";

// side-effect
let myStatusBarItem: vscode.StatusBarItem;

myStatusBarItem = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Left,
  1
);

// your extension is activated the very first time the command is executed
export function activate({ subscriptions }: vscode.ExtensionContext) {
  updateStatusBarItem();
}

function updateStatusBarItem(): void {
  myStatusBarItem.text = "namman";
  myStatusBarItem.show();
}
