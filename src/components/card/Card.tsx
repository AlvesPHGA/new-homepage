import '../../../content.mock.json';
import image01 from '../../assets/images/image-retro-pcs.jpg';

export function Card() {
   return (
      <a className="flex font-inter group xl:gap-6 xl:w-wCard xl:h-fit xl:cursor-pointer 2xl:gap-6 2xl:w-wCard 2xl:h-fit 2xl:cursor-pointer lg:gap-4 lg:w-wCard_lg lg:h-fit lg:cursor-pointer md:w-[calc(768px/2)] md:mt-6 md:gap-3 mbl_s:w-full mbl_s:gap-2 mbl_m:w-full mbl_m:gap-2 mbl_l:w-full mbl_l:gap-2">
         <div>
            <img src={image01} alt="" className="object-fill" />
         </div>
         <div className="flex flex-col justify-center xl:gap-3 2xl:gap-3 lg:gap-1 ">
            <span className="font-bold text-grayishBlue xl:text-4xl 2xl:text-4xl lg:text-2xl md:text-4xl mbl_s:text-xl mbl_m:text-3xl mbl_l:text-3xl">
               01
            </span>
            <h2 className="text-veryDarkBlue xl:text-xl xl:font-extra-bold xl:group-hover:text-softRed xl:transition-all xl:delay-200 2xl:text-xl 2xl:font-extra-bold 2xl:group-hover:text-softRed 2xl:transition-all 2xl:delay-200 lg:text-lg lg:font-bold lg:group-hover:text-softRed lg:transition-all lg:delay-200 md:text-xl md:font-extra-bold md:my-2 mbl_s:font-bold mbl_s:text-base mbl_m:font-extra-bold mbl_m:text-xl mbl_l:font-extra-bold mbl_l:text-xl">
               Reviving Retro PCs
            </h2>
            <p className="text-darkGrayishBlue xl:text-sm xl:pr-6 2xl:text-sm 2xl:pr-6 lg:text-sm lg:pr-6 mbl_s:text-sm">
               What happens when old PCs are given modern upgrades?
            </p>
         </div>
      </a>
   );
}
