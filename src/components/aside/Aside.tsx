export function AsideContent() {
   return (
      <aside className="bg-veryDarkBlue font-inter xl:py-5 xl:px-5 2xl:py-5 2xl:px-5 lg:py-4 lg:px-5 md:px-2 md:py-2 mbl_s:my-10 mbl_s:py-5 mbl_s:px-3 mbl_m:my-10 mbl_m:py-5 mbl_m:px-3 mbl_l:my-10 mbl_l:py-5 mbl_l:px-3">
         <h2 className="text-softOrange font-bold xl:text-5xl 2xl:text-5xl lg:text-4xl md:text-2xl mbl_s:mb-3 mbl_s:text-3xl mbl_m:mb-3 mbl_m:text-4xl mbl_l:mb-3 mbl_l:text-3xl">
            New
         </h2>

         <a className="block cursor-pointer group xl:mt-8 xl:mb-8 xl:pr-6 2xl:mt-8 2xl:mb-8 2xl:pr-6 lg:mt-2 lg:mb-4 lg:pr-6 md:mt-1 md:mb-4">
            <h3 className="text-white text-lg font-bold xl:group-hover:text-softOrange xl:transition-all xl:delay-200 2xl:group-hover:text-softOrange 2xl:transition-all 2xl:delay-200 lg:group-hover:text-softOrange lg:transition-all lg:delay-200 md:text-base mbl_m:text-xl mbl_l:text-xl">
               Hydrogen VS Electric Cars
            </h3>

            <p className="text-grayishBlue xl:leading-7 2xl:leading-7 lg:leading-7">
               Will hydrogen-fueled cars ever catch up to EVs?
            </p>
         </a>

         <a className="border-t border-b border-darkGrayishBlue block cursor-pointer group xl:py-8 xl:pr-4 2xl:py-8 2xl:pr-4 lg:py-6 lg:pr-4 md:py-4 md:pr-0 mbl_s:my-5 mbl_s:py-5 mbl_m:my-6 mbl_m:py-6">
            <h3 className="text-white text-lg font-bold xl:group-hover:text-softOrange xl:transition-all xl:delay-200 2xl:group-hover:text-softOrange 2xl:transition-all 2xl:delay-200 lg:group-hover:text-softOrange lg:transition-all lg:delay-200 md:text-base mbl_m:text-xl mbl_l:text-xl">
               The Downsides of Al Artistry
            </h3>
            <p className="text-grayishBlue xl:leading-7 2xl:leading-7 lg:leading-7">
               What are the possible adverse effects of on-demand AI image
               generation?
            </p>
         </a>

         <a className="block cursor-pointer group">
            <h3 className="text-white text-lg font-bold xl:mt-8 xl:group-hover:text-softOrange xl:transition-all xl:delay-200 2xl:mt-8 2xl:group-hover:text-softOrange 2xl:transition-all 2xl:delay-200 lg:mt-4 lg:group-hover:text-softOrange lg:transition-all lg:delay-200 md:text-base md:mt-4 mbl_m:text-xl mbl_l:text-xl">
               Is VC Funding Drying Up?
            </h3>
            <p className="text-grayishBlue leading-7">
               Private funding by VC firms is down 50% YOY. We take a look at
               what that means.
            </p>
         </a>
      </aside>
   );
}
