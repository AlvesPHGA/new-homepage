import Logo from '../../../assets/icon/logo.svg';

const navLinksLegend = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export function Header() {
   return (
      <header className="header">
         <div className="header__container xl:2xl:w-[75rem] lg:w-[1000px] md:w-[calc(768px-40px)]">
            <img src={Logo} alt="Logo site" />
            <nav className="header__nav">
               {navLinksLegend.map((legend) => (
                  <a
                     key={legend}
                     className="lg:hover:text-softRed lg:transition-all lg:delay-100 lg:mr-6 lg:last:mr-0"
                     href=""
                  >
                     {legend}
                  </a>
               ))}
            </nav>
         </div>
      </header>
   );
}
