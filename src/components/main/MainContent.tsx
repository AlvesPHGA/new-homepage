import coverMain from '../../assets/images/image-web-3-desktop.jpg';

export function MainContent() {
   return (
      <section className="border w-full">
         <img
            src={coverMain}
            alt="Foto de capa"
            className="h-72 w-full object-cover"
         />

         <div className="font-inter flex justify-between">
            <h1 className="text-5xl font-extra-bold w-[280px]">
               The Bright Future of Web 3.0?
            </h1>

            <div className="w-[358px]">
               <p className="text-base">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
               </p>

               <a href="">Read more</a>
            </div>
         </div>
      </section>
   );
}
