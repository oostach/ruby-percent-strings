# Ruby Percent Strings

VS Code extension that helps easily convert regular ruby arrays to percent ruby arrays.

## Available Commands:
  - `Ruby Percent Strings: Convert to Strings Array` convert ["foo", "bar", "baz"]` to `%w(foo bar baz)`
  - `Ruby Percent Strings: Convert to Symbols Array` convert `[:foo, :bar, :baz]` to `%i(foo bar baz)`

## Extension Settings
  If you want to change the type of brackets for wrapping, you can change in the settings
  * String Brackets (`ruby-percent-strings.stringBrackets`: [`round`- default, `square`]) - allow changing the type of brackets for the strings array
  * Symbol Brackets (`ruby-percent-strings.symbolBrackets`: [`round`- default, `square`]) - allow to change the type of brackets for the symbols array

## Keybindings
  ```json
      {
        "command": "ruby-percent-strings.convertToStringsArray",
        "key": "ctrl+alt+w",
        "mac": "ctrl+alt+w",
        "when": "editorTextFocus"
      },
      {
        "command": "ruby-percent-strings.convertToSymbolsArray",
        "key": "ctrl+alt+i",
        "mac": "ctrl+alt+i",
        "when": "editorTextFocus"
      }
  ```
