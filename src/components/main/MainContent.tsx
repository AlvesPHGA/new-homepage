// import { useFirstPrismicDocument } from '@prismicio/react';
import coverMain from '../../assets/images/image-web-3-desktop.jpg';
import coverMainMbl from '../../assets/images/image-web-3-mobile.jpg';

interface ICMainContent {
   title?: string;
   description?: string;
}

export function MainContent({ title, description }: ICMainContent) {
   // const [document] = useFirstPrismicDocument();

   if (!title || !description) return null;

   return (
      <section className="main__content">
         <img
            src={innerWidth < 426 ? coverMainMbl : coverMain}
            alt="Foto de capa"
         />

         <div className="main__content__box">
            <h1 className="main__content__title">{title}</h1>

            <div className="main__content__box__01">
               <p>{description}</p>

               <a href="" className="main__content__cta">
                  Read more
               </a>
            </div>
         </div>
      </section>
   );
}
