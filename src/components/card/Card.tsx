export interface IPCard {
   number?: number;
   title?: string;
   image?: { alt: string; url: string };
   content?: string;
}

export function Card({ number, title, image, content }: IPCard) {
   return (
      <a className="card group">
         <img
            src={`${image?.url}`}
            alt={`${image?.alt}`}
            className="h-[152px] w-[156px] object-fill"
         />
         <div className="card__box">
            <span className="card__box__number">0{number}</span>
            <h2 className="card__box__title xl:group-hover:text-softRed  2xl:group-hover:text-softRed lg:group-hover:text-softRed">
               {title}
            </h2>
            <p className="card__box__text">{content}</p>
         </div>
      </a>
   );
}
