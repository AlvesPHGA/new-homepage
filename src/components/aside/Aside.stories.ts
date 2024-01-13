import '../../index.css';

import { Meta, StoryObj } from '@storybook/react';

import { AsideContent, IAside } from './Aside';

export default {
   title: 'Components/Aside',
   component: AsideContent,
   decorators: [
      (Story) => {
         return Story();
      },
   ],
} as Meta<IAside>;

export const Aside_Item01: StoryObj<IAside> = {
   args: {
      title: 'Hydrogen VS Electric Cars',
      text: 'Will hydrogen-fueled cars ever catch up to EVs?',
   },
};

export const Aside_Item02: StoryObj<IAside> = {
   args: {
      title: 'The Downsides of Al Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?',
   },
};

export const Aside_Item03: StoryObj<IAside> = {
   args: {
      title: 'Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look what that means.',
   },
};
