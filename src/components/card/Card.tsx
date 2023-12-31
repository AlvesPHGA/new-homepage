import '../../../content.mock.json';
import image01 from '../../assets/images/image-retro-pcs.jpg';

export function Card() {
   return (
      <a className="flex gap-6 w-wCard h-fit font-inter group cursor-pointer">
         <div>
            <img src={image01} alt="" className="object-fill" />
         </div>
         <div className="flex flex-col justify-center gap-3 ">
            <span className="text-4xl font-bold text-grayishBlue">01</span>
            <h2 className="text-xl text-veryDarkBlue font-extra-bold group-hover:text-softRed transition-all delay-200">
               Reviving Retro PCs
            </h2>
            <p className="text-sm pr-6 text-darkGrayishBlue">
               What happens when old PCs are given modern upgrades?
            </p>
         </div>
      </a>
   );
}
