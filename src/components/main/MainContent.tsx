import { useFirstPrismicDocument } from '@prismicio/react';
import coverMain from '../../assets/images/image-web-3-desktop.jpg';
import coverMainMbl from '../../assets/images/image-web-3-mobile.jpg';

export function MainContent() {
   const [document] = useFirstPrismicDocument();
   console.log(document);
   return (
      <section className="main__content">
         <img
            src={innerWidth < 426 ? coverMainMbl : coverMain}
            alt="Foto de capa"
         />

         <div className="main__content__box">
            <h1 className="main__content__title">
               The Bright Future of Web 3.0?
            </h1>

            <div className="main__content__box__01">
               <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
               </p>

               <a href="" className="main__content__cta">
                  Read more
               </a>
            </div>
         </div>
      </section>
   );
}
