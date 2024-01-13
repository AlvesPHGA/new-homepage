export interface IAside {
   title: string;
   text: string;
}

export function AsideContent({ title, text }: IAside) {
   return (
      <>
         <a className="aside__item border-b pt-6 pb-6 last:border-none last:pb-0 bg-veryDarkBlue group">
            <h3 className="aside__item__subtitle xl:group-hover:text-softOrange 2xl:group-hover:text-softOrange lg:group-hover:text-softOrange">
               {title}
            </h3>

            <p className="aside__item__text">{text}</p>
         </a>
      </>
   );
}
