<h1 align="center">
  <img src="./images/kestrel_glyph.png" alt="Kestrel Liquid" width="96" height="96" />
  <br />
  Kestrel Liquid
</h1>

<p align="center">Liquid themes with syntax highlighting, formatting, completion, navigation and theme checks in VS Code.</p>

## Features

- Syntax highlighting for Liquid, JSON templates, CSS and JavaScript in theme files
- Formatting through Prettier and `@kestrel/prettier-plugin-liquid`
- Completion and hover documentation for Liquid tags, filters, objects, HTML tags and attributes
- Completion for section and block settings, translations and render tag snippets
- Go to definition for snippets, sections and translations
- Theme checks with quick fixes from `@kestrel/theme-check-common`
- Auto-closing pairs and document symbols

## Install

Build a VSIX from this repository and install it with the Extensions view (`Install from VSIX...`):

```sh
pnpm --dir packages/vscode-extension build
pnpm --dir packages/vscode-extension package
```

`pnpm package` writes `theme-check-vscode-<version>.vsix` in the extension folder. The extension bundles the language server, so no separate install is needed.

## Configure

- `themeCheck.customChecks`: `"prompt"` (default) or `"disabled"`. Controls whether the extension asks before running custom JavaScript checks. This is a user setting; workspace settings are ignored. Changing it restarts the language server.
- `themeCheck.checkOnSave`: run checks when a theme file is saved (default `true`).
- `themeCheck.checkOnOpen`: run checks when a theme file is opened (default `true`).
- `themeCheck.checkOnChange`: run checks while typing (default `true`).

## Commands

- `Liquid Theme Check: Restart Server`
- `Liquid Theme Check: Run Checks`
- `Liquid Theme Check: Find dead code`

## Develop

```sh
pnpm --dir packages/vscode-extension dev
```

This starts a webpack watch build. Press `F5` in VS Code to launch an Extension Development Host.

Unit tests:

```sh
pnpm --dir packages/vscode-extension test
```

## Layout

The extension talks to `@kestrel/theme-language-server-node`. Diagnostics come from `@kestrel/theme-check-node`. Both are workspace packages, so a change to the linter or language server is visible after rebuilding the extension bundle.
