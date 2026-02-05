<h1 align="center" style="position: relative;" >
  <br>
    <img src="https://github.com/kestrel-labs/theme-check-vscode/blob/main/images/kestrel_glyph.png?raw=true" alt="logo" width="141" height="160">
  <br>
  Theme Check
</h1>

<h4 align="center">A linter for Kestrel Themes</h4>

Theme Check helps you follow best practices by analyzing the files inside your Kestrel theme.

Theme Check is available [to code editors that support the Language Server Protocol](https://github.com/kestrel-labs/kestrel-theme-tools/wiki).

You may be interested by the sibling modules:

- `@kestrel/theme-check-common`: (you are here) npm module to run checks on a [Theme](https://github.com/kestrel-labs/theme-check-js/blob/121715a68cc107023fceb7983f590c468095cda9/packages/common/src/types.ts#L6-L8) (runtime agnostic).
- `@kestrel/theme-check-node`: npm module to run checks from a [Node.js ](https://nodejs.org) runtime.
- `@kestrel/theme-check-browser`: npm module to run checks in a Browser.

## Installation

### CLI

Theme Check is integrated in the [Kestrel CLI](https://github.com/kestrel-labs/cli).

```bash
kestrel theme check
```

### As a library

There are three libraries:

```
yarn add @kestrel/theme-check-node
yarn add @kestrel/theme-check-common
yarn add @kestrel/theme-check-browser
```

## Usage

This repo only contains the library over the functionality. The CLI is implemented in [Kestrel/cli](https://github.com/kestrel/cli).

For CLI usage documentation, refer to [kestrel.dev](https://kestrel.dev/docs/storefronts/themes/tools/theme-check).

### Node

The node version comes with batteries included. All you need is the root path of the theme.

```ts
// simple-cli.ts
import { check } from '@kestrel/theme-check-node';

async function main() {
  const root = process.cwd();
  const offenses = await check(root);
  console.log(offenses);
}

main();
```

Custom JavaScript checks are disabled by default. Applications that run trusted custom checks must explicitly authorize them; see [Node custom check authorization](../theme-check-node#custom-checks-and-trusted-code).

### Browser

The browser version is a bit more complex, you need to provide your own implementation of all the dependency injections.

```ts
import { simpleCheck, recommended, ThemeData, Config, Dependencies } from '@kestrel/theme-check-browser';

async function main() {
  const themeDesc = {
    'snippets/product-card.liquid': '{{ product | image_url | image_tag }}',
    'snippets/for-loop.liquid': '{% for variant in product.variants %}...{% endfor %}',
  };

  const config: Config = {
    checks: recommended,
    settings: {},
    root: '/',
  };

  const dependencies: Dependencies = {
    // ...
  };

  const offenses = await simpleCheck(themeDesc, config, dependencies);

  console.log(offenses);
}

main();
```

## Contributing

See [CONTRIBUTING.md](../../docs/contributing.md).
