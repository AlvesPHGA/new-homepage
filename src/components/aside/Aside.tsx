export function AsideContent() {
   return (
      <aside className="bg-veryDarkBlue font-inter py-5 px-5">
         <h2 className="text-softOrange text-5xl font-bold">New</h2>

         <a className="mt-8 mb-8 pr-6 block cursor-pointer group">
            <h3 className="text-white text-lg font-bold group-hover:text-softOrange transition-all delay-200">
               Hydrogen VS Electric Cars
            </h3>
            <p className="text-grayishBlue leading-7">
               Will hydrogen-fueled cars ever catch up to EVs?
            </p>
         </a>

         <a className="border-t border-b border-darkGrayishBlue py-8 pr-4 block cursor-pointer group">
            <h3 className="text-white text-lg font-bold group-hover:text-softOrange transition-all delay-200">
               The Downsides of Al Artistry
            </h3>
            <p className="text-grayishBlue leading-7">
               What are the possible adverse effects of on-demand AI image
               generation?
            </p>
         </a>

         <a className="block cursor-pointer group">
            <h3 className="text-white text-lg font-bold mt-8 group-hover:text-softOrange transition-all delay-200">
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
