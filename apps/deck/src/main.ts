import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';

let deck = new Reveal({
  controls: false,
  hash: true,
  hashOneBasedIndex: true,
  plugins: [Markdown],
  slideNumber: true,
});
deck.initialize();
