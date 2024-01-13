import { useSinglePrismicDocument } from '@prismicio/react';
import { homeDocument } from './types/home';

export const handleDocument = () => {
   const [document] = useSinglePrismicDocument('home_test');

   if (!document?.data) return null;

   const data: homeDocument = document?.data;

   return {
      title: data?.title_page,
      description: data?.principal_description_page,
      cardsContainer: {
         cards: data?.body?.[0].items?.map((primaryCard) => ({
            numberPublish: primaryCard?.number_post,
            titleCard: primaryCard?.card_title,
            contentCard: primaryCard?.card_content,
            imageCard: {
               url:
                  primaryCard?.post_cover?.recommended?.url ??
                  primaryCard?.post_cover?.url,
               alt:
                  primaryCard?.post_cover?.recommended?.alt ??
                  primaryCard?.post_cover?.alt,
            },
         })),
      },
   };
};
