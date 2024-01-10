import '../../../content.mock.json';
import image01 from '../../assets/images/image-retro-pcs.jpg';

export function Card() {
   return (
      <a className="card groups">
         <div>
            <img src={image01} alt="" className="object-fill" />
         </div>
         <div className="card__box">
            <span className="card__box__number">01</span>
            <h2 className="card__box__title xl:group-hover:text-softRed   2xl:group-hover:text-softRed lg:group-hover:text-softRed">
               Reviving Retro PCs
            </h2>
            <p className="card__box__text">
               What happens when old PCs are given modern upgrades?
            </p>
         </div>
      </a>
   );
}
