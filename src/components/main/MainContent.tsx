import coverMain from '../../assets/images/image-web-3-desktop.jpg';

export function MainContent() {
   return (
      <section className="w-full">
         <img
            src={coverMain}
            alt="Foto de capa"
            className="h-72 w-full object-cover"
         />

         <div className="font-inter flex justify-between mt-8">
            <h1 className="text-5xl leading-[3rem] font-extra-bold w-[280px]">
               The Bright Future of Web 3.0?
            </h1>

            <div className="w-[358px] mx-2">
               <p className="text-base">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
               </p>

               <a
                  href=""
                  className="block w-fit px-11 py-3 text-white bg-softRed uppercase mt-10 tracking-widest hover:bg-veryDarkBlue transition-all delay-200"
               >
                  Read more
               </a>
            </div>
         </div>
      </section>
   );
}
