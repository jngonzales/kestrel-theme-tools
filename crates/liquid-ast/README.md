# liquid-ast

The syntax tree of Liquid HTML templates, as
[`@kestrel/liquid-html-parser`](https://github.com/kestrel-labs/kestrel-theme-tools/tree/main/packages/liquid-html-parser)
builds it. [`liquid-parser`](https://crates.io/crates/liquid-parser) parses templates into it, and
the checks of [`theme-check`](https://crates.io/crates/theme-check) walk it.

A `Document`'s children are `Node`s. Spans are byte offsets in the source, and strings borrow from
it when they can.
