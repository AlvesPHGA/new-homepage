import { prismicImage, prismicText } from './general';

export interface prismicCard {
   card_title?: prismicText[];
   card_content?: prismicText[];
   number_post?: number;
   post_cover?: prismicImage;
}

export interface homeDocument {
   title_page?: prismicText[];
   principal_description_page?: prismicText[];

   body?: [
      {
         slice_type?: string;
         items?: prismicCard[];
      },
   ];
}
