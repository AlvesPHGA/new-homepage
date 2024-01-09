export function AsideContent() {
   return (
      <aside className="aside">
         <h2 className="aside__title">New</h2>

         <a className="aside__item group">
            <h3 className="aside__item__subtitle xl:group-hover:text-softOrange 2xl:group-hover:text-softOrange lg:group-hover:text-softOrange">
               Hydrogen VS Electric Cars
            </h3>

            <p className="aside__item__text">
               Will hydrogen-fueled cars ever catch up to EVs?
            </p>
         </a>

         <a className="aside__item border-t border-b border-darkGrayishBlue group xl:py-8 xl:pr-4 2xl:py-8 2xl:pr-4 lg:py-6 lg:pr-4 md:py-4 md:pr-0 mbl_s:my-5 mbl_s:py-5 mbl_m:my-6 mbl_m:py-6">
            <h3 className="aside__item__subtitle xl:group-hover:text-softOrange  2xl:group-hover:text-softOrange lg:group-hover:text-softOrange">
               The Downsides of Al Artistry
            </h3>
            <p className="aside__item__text">
               What are the possible adverse effects of on-demand AI image
               generation?
            </p>
         </a>

         <a className="block cursor-pointer group">
            <h3 className="aside__item__subtitle xl:mt-8 xl:group-hover:text-softOrange 2xl:mt-8 2xl:group-hover:text-softOrange lg:mt-4 lg:group-hover:text-softOrange">
               Is VC Funding Drying Up?
            </h3>
            <p className="aside__item__text">
               Private funding by VC firms is down 50% YOY. We take a look at
               what that means.
            </p>
         </a>
      </aside>
   );
}
