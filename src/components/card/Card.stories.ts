import type { Meta, StoryObj } from '@storybook/react';

import { Card, ICard } from './Card';

export default {
   title: 'Components/Card',
   component: Card,

   decorators: [
      (Story) => {
         return Story();
      },
   ],
} as Meta<ICard>;

export const Card01: StoryObj<ICard> = {
   args: {
      id: '01',
      img: './src/assets/images/image-retro-pcs.jpg',
      title: 'Reviving Retro PCs',
      text: 'What happens when old PCs are given modern upgrades?',
   },
};

export const Card02: StoryObj<ICard> = {
   args: {
      id: '02',
      img: './src/assets/images/image-top-laptops.jpg',
      title: 'Top 10 Laptops of 2022',
      text: 'Our best picks for various needs and budgets.',
   },
};

export const Card03: StoryObj<ICard> = {
   args: {
      id: '03',
      img: './src/assets/images/image-gaming-growth.jpg',
      title: 'The Growth of Gaming',
      text: 'How the pandemic has sparked fresh opportunities.',
   },
};
