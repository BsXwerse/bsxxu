import { SHIKI_THEMES } from '@/lib/constants';
import rehypeShiki, { type RehypeShikiOptions } from '@shikijs/rehype';

const shortCase = new Map([
  ['javascript', 'js'],
  ['typescript', 'ts'],
]);

const rehypeCode: [any, RehypeShikiOptions] = [
  rehypeShiki,
  {
    inline: 'tailing-curly-colon',
    themes: SHIKI_THEMES,
    transformers: [
      {
        pre(node) {
          node.properties['data-lang'] =
            shortCase.get(this.options.lang.toLowerCase()) ?? this.options.lang;
        },
      },
    ],
  },
];

export default rehypeCode;
