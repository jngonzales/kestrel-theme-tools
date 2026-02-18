<h1 align="center">Kestrel Theme Tools</h1>

<p align="center">Lint, format, complete and navigate Liquid themes. One parser, one language server, three runtimes (Node, browser, VS Code).</p>

## Demo

<video src="docs/assets/demo.mp4" poster="docs/assets/demo.jpg" controls muted playsinline preload="metadata" width="900"></video>

If the player does not load, open [docs/assets/demo.mp4](docs/assets/demo.mp4).

## What is in here

| Package | What it does |
| --- | --- |
| [`@kestrel/liquid-html-parser`](./packages/liquid-html-parser) | Parses Liquid and HTML into one tree. Everything else is built on it. |
| [`@kestrel/prettier-plugin-liquid`](./packages/prettier-plugin-liquid) | Prettier plugin for Liquid and HTML templates. |
| [`@kestrel/theme-check-common`](./packages/theme-check-common) | Linter core: checks, fixes and configuration, runtime agnostic. |
| [`@kestrel/theme-check-browser`](./packages/theme-check-browser) | Browser build of the linter. |
| [`@kestrel/theme-check-node`](./packages/theme-check-node) | Node build of the linter, including the `theme-check` CLI entry point. |
| [`@kestrel/theme-language-server-common`](./packages/theme-language-server-common) | Language server core: completion, hover, definitions, diagnostics. |
| [`@kestrel/theme-language-server-browser`](./packages/theme-language-server-browser) | Browser build of the language server. |
| [`@kestrel/theme-language-server-node`](./packages/theme-language-server-node) | Node build of the language server. |
| [`@kestrel/theme-graph`](./packages/theme-graph) | Theme graph: sections, snippets, templates and how they reference each other. |
| [`@kestrel/codemirror-language-client`](./packages/codemirror-language-client) | CodeMirror client for the language server. |
| [`theme-check-vscode`](./packages/vscode-extension) | The VS Code extension that wires all of the above into an editor. |

## Requirements

- Node 24.22.0 or newer (see `.node-version`)
- pnpm 10.16.1 (`corepack enable` then `pnpm install`)

## Build

```sh
pnpm install --frozen-lockfile
pnpm build:ts
```

The development dependency install runs a preinstall script that fetches TextMate grammars with `sh`. On Windows, install with `pnpm install --frozen-lockfile --ignore-scripts` and build through Git Bash:

```sh
pnpm --config.script-shell="C:\Program Files\Git\bin\bash.exe" -r --workspace-concurrency=1 build:ts
```

## Test

```sh
pnpm test
```

Vitest runs the package suites from the root. The Rust crates under `crates/` (the Liquid parser and theme-check bindings) are built with cargo when a package depends on them; `cargo --version` must succeed.

## Use the linter from a terminal

```sh
pnpm theme-check path/to/theme
```

This runs `packages/theme-check-node/dist/cli.js`, so build first.

## Repository layout

```
packages/   TypeScript packages and the VS Code extension
crates/     Rust parser and theme-check bindings
docs/       Language server and architecture notes
scripts/    Build helpers
```

## Working in the desktop extension

```sh
pnpm --dir packages/vscode-extension build:extension
pnpm --dir packages/vscode-extension dev
```

The extension bundles the language server, so a rebuilt language server is picked up by rebuilding the extension.

## Contributing

Read [`docs/contributing.md`](./docs/contributing.md) before opening a change. Checks must pass with `pnpm format:check`, `pnpm type-check` and `pnpm test`.
