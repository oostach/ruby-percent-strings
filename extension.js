// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ruby-percent-strings" is now active!')
  const config = vscode.workspace.getConfiguration('ruby-percent-strings')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const convertStringArray = function(text) {
    const escapedText = text.trim().replace(/[[\]",]/gi, '')
    let result = null

    if (config.get('stringBrackets') === 'square') {
      result = `%w[${escapedText}]`
    } else if (config.get('stringBrackets') === 'round') {
      result = `%w(${escapedText})`
    }

    return result
  }

  const convertSymbolArray = function(text) {
    const escapedText = text.trim().replace(/[[\]:,]/gi, '')
    let result = null

    if (config.get('symbolBrackets') === 'square') {
      result = `%i[${escapedText}]`
    } else if (config.get('symbolBrackets') === 'round') {
      result = `%i(${escapedText})`
    }

    return result
  }

  const convertArray = function(converter) {
    const activeEditor = vscode.window.activeTextEditor
    if (!activeEditor) {
      vscode.window.showWarningMessage('Any open editor found!')
      return // No open text editor
    }
    const selection = activeEditor.selection

    if (selection && !selection.isEmpty) {
      const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character)
      const selectedText = activeEditor.document.getText(selectionRange)
      const convertedText = converter(selectedText)

      activeEditor.edit(editBuilder => editBuilder.replace(selectionRange, convertedText))
    } else {
      vscode.window.showWarningMessage('No selection found!')
    }
  }

  context.subscriptions.push(vscode.commands.registerCommand('ruby-percent-strings.convertToStringsArray', function () {
    convertArray(convertStringArray)
  }))

  context.subscriptions.push(vscode.commands.registerCommand('ruby-percent-strings.convertToSymbolsArray', function () {
    convertArray(convertSymbolArray)
  }))
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
