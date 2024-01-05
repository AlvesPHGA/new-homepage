import coverMain from '../../assets/images/image-web-3-desktop.jpg';
import coverMainMbl from '../../assets/images/image-web-3-mobile.jpg';

export function MainContent() {
   const { innerWidth } = window;
   console.log(innerWidth);
   return (
      <section className="w-full">
         <img
            src={innerWidth < 426 ? coverMainMbl : coverMain}
            alt="Foto de capa"
            className="h-72 w-full object-cover mbl_s:h-60 mbl_m:h-60 mbl_l:h-60"
         />

         <div className="font-inter xl:flex xl:justify-between xl:mt-8 2xl:flex 2xl:justify-between 2xl:mt-8 lg:flex lg:justify-between lg:mt-7">
            <h1 className="xl:text-5xl xl:leading-[3rem] xl:font-extra-bold xl:w-[280px] 2xl:text-5xl 2xl:leading-[3rem] 2xl:font-extra-bold 2xl:w-[280px] lg:text-4xl lg:leading-[2.8rem] lg:font-extra-bold lg:w-[248px] md:text-3xl md:leading-none md:font-extra-bold md:mt-4 md:mb-3 mbl_s:font-extra-bold mbl_s:text-4xl mbl_s:mt-4 mbl_m:text-4xl mbl_m:mt-4 mbl_m:font-extra-bold mbl_l:text-4xl mbl_l:mt-4 mbl_l:font-extra-bold">
               The Bright Future of Web 3.0?
            </h1>

            <div className="xl:w-[358px] xl:mx-2 2xl:w-[358px] 2xl:mx-2 lg:w-[358px] lg:mx-2 md:w-full">
               <p className="xl:text-base 2xl:text-base lg:text-base md:my-2 md:text-base mbl_s:my-3 mbl_m:my-3 mbl_l:my-3">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
               </p>

               <a
                  href=""
                  className="block w-fit text-white bg-softRed uppercase xl:px-11 xl:py-3  xl:mt-10 xl:tracking-widest xl:hover:bg-veryDarkBlue xl:transition-all xl:delay-200 2xl:px-11 2xl:py-3  2xl:mt-10 2xl:tracking-widest 2xl:hover:bg-veryDarkBlue 2xl:transition-all 2xl:delay-200 lg:px-9 lg:py-2  lg:mt-5 lg:tracking-widest lg:hover:bg-veryDarkBlue lg:transition-all lg:delay-200 md:px-4 md:py-1 mbl_s:px-8 mbl_s:py-1 mbl_s:text-lg mbl_m:px-8 mbl_m:py-2 mbl_m:text-lg mbl_l:px-8 mbl_l:py-2 mbl_l:text-lg"
               >
                  Read more
               </a>
            </div>
         </div>
      </section>
   );
}
