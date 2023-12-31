export function AsideContent() {
   return (
      <aside className="bg-veryDarkBlue font-inter py-10 px-5">
         <h2 className="text-softOrange text-5xl font-bold">New</h2>

         <div className="mt-8 mb-8">
            <h3 className="text-white text-lg font-bold">
               Hydrogen VS Electric Cars
            </h3>
            <p className="text-grayishBlue leading-7">
               Will hydrogen-fueled cars ever catch up to EVs?
            </p>
         </div>

         <div className="border-t border-b border-darkGrayishBlue py-8">
            <h3 className="text-white text-lg font-bold">
               The Downsides of Al Artistry
            </h3>
            <p className="text-grayishBlue leading-7">
               What are the possible adverse effects of on-demand AI image
               generation?
            </p>
         </div>

         <div>
            <h3 className="text-white text-lg font-bold mt-8">
               Is VC Funding Drying Up?
            </h3>
            <p className="text-grayishBlue leading-7">
               Private funding by VC firms is down 50% YOY. We take a look at
               what that means.
            </p>
         </div>
      </aside>
   );
}
