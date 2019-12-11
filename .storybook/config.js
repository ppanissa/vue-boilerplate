import Vue from 'vue';
import { configure, addParameters, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/vue';

addDecorator(withA11y);
addDecorator(withInfo);
addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
  },
  docs: {
    iframeHeight: '60px',
  },
});

addDecorator(centered);

configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);
