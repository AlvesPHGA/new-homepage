import '../../../content.mock.json';

interface ICard {
   id: string;
   img: string;
   title: string;
   text: string;
}

export function Card({ id, img, title, text }: ICard) {
   return (
      <a className="card groups">
         <div>
            <img src={img} alt="" className="object-fill h-full w-full" />
         </div>
         <div className="card__box">
            <span className="card__box__number">{id}</span>
            <h2 className="card__box__title xl:group-hover:text-softRed   2xl:group-hover:text-softRed lg:group-hover:text-softRed">
               {title}
            </h2>
            <p className="card__box__text">{text}</p>
         </div>
      </a>
   );
}
