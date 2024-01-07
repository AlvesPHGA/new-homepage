/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            // primary
            softOrange: 'hsl(35, 77%, 62%)',
            softRed: 'hsl(5, 85%, 63%)',

            // neutral
            offWhite: 'hsl(36, 100%, 99%)',
            grayishBlue: 'hsl(233, 8%, 79%)',
            darkGrayishBlue: 'hsl(236, 13%, 42%)',
            veryDarkBlue: 'hsl(240, 100%, 5%)',
         },

         spacing: {
            wCard: 'calc(1140px/3)',
            wCard_lg: 'calc(970px/3)',
         },

         fontFamily: {
            inter: ['Inter', 'sans-serif'],
         },

         fontWeight: {
            normal: '400',
            bold: '700',
            'extra-bold': '800',
         },

         gridTemplateColumns: {
            main: '63% 32%',
         },

         screens: {
            mbl_s: { max: '320px' },
            mbl_m: { min: '321px', max: '375px' },
            mbl_l: { min: '376px', max: '425px' },
            tablet: { min: '426px', max: '768px' },
            laptop: { min: '769px', max: '1024px' },
            desktop: { min: '1025px', max: '1440px' },
            other: { min: '1441' },
         },
      },
   },
   plugins: [],
};
