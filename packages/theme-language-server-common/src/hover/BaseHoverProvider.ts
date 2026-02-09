import { Hover, HoverParams } from 'vscode-languageserver';
import { LiquidHtmlNode } from '@kestrel/theme-check-common';

export interface BaseHoverProvider {
  hover(
    currentNode: LiquidHtmlNode,
    ancestors: LiquidHtmlNode[],
    params: HoverParams,
  ): Promise<Hover | null>;
}
