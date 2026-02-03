<h1 align="center" style="position: relative;" >
  <br>
    <img src="https://github.com/kestrel-labs/theme-check-vscode/blob/main/images/kestrel_glyph.png?raw=true" alt="logo" width="141" height="160">
  <br>
  Liquid HTML parser
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@kestrel/liquid-html-parser"><img src="https://img.shields.io/npm/v/@kestrel/liquid-html-parser.svg?sanitize=true" alt="Version"></a>
  <a href="https://github.com/kestrel-labs/kestrel-theme-tools/blob/main/LICENSE.md"><img src="https://img.shields.io/npm/l/@kestrel/liquid-html-parser.svg?sanitize=true" alt="License"></a>
  <a href="https://github.com/kestrel-labs/liquid-html-parser-prototype/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/kestrel-labs/prettier-plugin-liquid-prototype/actions/workflows/ci.yml/badge.svg"></a>
  <!--
    <a href="https://npmcharts.com/compare/@kestrel/liquid-html-parser?minimal=true"><img src="https://img.shields.io/npm/dm/@kestrel/prettier-plugin-liquid.svg?sanitize=true" alt="Downloads"></a>
  -->
</p>

This module provides the Liquid HTML parser that powers the prettier plugin, linter and language server for Liquid-powered Kestrel themes.

It turns a `.liquid` file contents into an Abstract Syntax Tree (AST) that contains _both_ Liquid and HTML nodes.

## Installation

```bash
# with npm
npm install @kestrel/liquid-html-parser

# with yarn
yarn add @kestrel/liquid-html-parser
```

## Usage

```ts
import { toLiquidHtmlAST, LiquidHtmlNode, NodeTypes } from '@kestrel/prettier-plugin-liquid';

const ast: LiquidHtmlNode = toLiquidHtmlAST(`
<body>
  {% for product in all_products %}
    <img src="{{ product | image_url }}">
  {% endfor %}
</body>
`);
```

## You should know

Because Liquid is very permissive, things like the `name` of an HTML tag may have a surprising type: an array of `LiquidVariableOutput | TextNode`. 

This is because the following use cases are supported by the parser:

```liquid
{% # compound html tag names %}
<tag-{{ name }}>
</tag-{{ name }}>

{% # compound html attribute names %}
<img data-{{ attr_name }}="...">
```

## License

MIT.
