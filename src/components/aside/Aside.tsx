export function AsideContent() {
   return (
      <aside className="bg-veryDarkBlue font-inter">
         <h2 className="text-softOrange text-5xl font-bold">New</h2>

         <div>
            <h3 className="text-white font-bold">Hydrogen VS Electric Cars</h3>
            <p className="text-offWhite">
               Will hydrogen-fueled cars ever catch up to EVs?
            </p>
         </div>

         <div>
            <h3 className="text-white font-bold">
               The Downsides of Al Artistry
            </h3>
            <p className="text-offWhite">
               What are the possible adverse effects of on-demand AI image
               generation?
            </p>
         </div>

         <div>
            <h3 className="text-white font-bold">Is VC Funding Drying Up?</h3>
            <p className="text-offWhite">
               Private funding by VC firms is down 50% YOY. We take a look at
               what that means.
            </p>
         </div>
      </aside>
   );
}
