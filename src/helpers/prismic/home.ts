import { useSinglePrismicDocument } from '@prismicio/react';
import { homeDocument } from './types/home';

export const handleDocument = () => {
   const [document] = useSinglePrismicDocument('home_test');

   if (!document?.data) return null;

   const data: homeDocument = document?.data;

   return {
      title: data?.title_page?.[0].text,
      description: data?.principal_description_page?.[0].text,
      cardsContainer: {
         cards: data?.body?.map((dt) =>
            dt.items?.map((primaryCard) => ({
               numberPublish: primaryCard?.number_post,
               titleCard: primaryCard?.card_title?.[0].text,
               contentCard: primaryCard?.card_content?.[0].text,
               imageCard: {
                  url:
                     primaryCard?.post_cover?.recommended?.url ??
                     primaryCard?.post_cover?.url,
                  alt:
                     primaryCard?.post_cover?.recommended?.alt ??
                     primaryCard?.post_cover?.alt,
               },
            })),
         ),
      },
   };
};
